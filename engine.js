/* Ember learning engine. Browser-local records, explicit dates and transparent practice metrics. */
(function (root, factory) {
  'use strict';
  const createEngine = factory();
  const engine = createEngine();
  engine.createEngine = createEngine;
  if (typeof module === 'object' && module.exports) module.exports = engine;
  if (root) root.Ember = engine;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const STORAGE_KEY = 'ember-ielts-v1';
  const TIME_ZONE = 'Asia/Shanghai';
  const INTERVALS = [1, 3, 7, 14, 30];
  const FORBIDDEN = new Set(['__proto__', 'prototype', 'constructor']);
  const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
  const plain = value => !!value && typeof value === 'object' && !Array.isArray(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
  const safeKey = key => typeof key === 'string' && key.length > 0 && key.length <= 180 && !FORBIDDEN.has(key);

  function validDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(value + 'T00:00:00.000Z');
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }
  function requireDate(value) {
    if (!validDate(value)) throw new Error('日期无效，请使用 YYYY-MM-DD。');
    return value;
  }
  function addDays(value, count) {
    requireDate(value);
    if (!Number.isInteger(count) || Math.abs(count) > 36525) throw new Error('日期间隔无效。');
    const date = new Date(value + 'T00:00:00.000Z');
    date.setUTCDate(date.getUTCDate() + count);
    return date.toISOString().slice(0, 10);
  }
  function normalize(value) {
    return String(value == null ? '' : value).normalize('NFKC').toLowerCase()
      .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
      .trim().replace(/[.!?。！？]+$/g, '').replace(/\s+/g, ' ').trim();
  }
  function checkAnswer(given, expected, accepted) {
    const candidate = normalize(given);
    if (!candidate) return false;
    const alternatives = [expected].concat(Array.isArray(accepted) ? accepted : []);
    return alternatives.some(value => candidate === normalize(value));
  }
  function checkNoUnsafeKeys(value, depth) {
    if (depth > 12) throw new Error('备份层级过深。');
    if (!value || typeof value !== 'object') return;
    for (const key of Object.keys(value)) {
      if (FORBIDDEN.has(key)) throw new Error('备份包含不安全的字段。');
      checkNoUnsafeKeys(value[key], depth + 1);
    }
  }
  function boundedString(value, max, name) {
    if (typeof value !== 'string' || value.length > max) throw new Error(name + ' 格式无效。');
    return value;
  }
  function boundedNumber(value, min, max, name, integer) {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max || (integer && !Number.isInteger(value))) throw new Error(name + ' 数值无效。');
    return value;
  }
  function mapEntries(value, max, name, handler) {
    if (!plain(value) || Object.keys(value).length > max) throw new Error(name + ' 格式或数量无效。');
    const result = {};
    for (const [key, item] of Object.entries(value)) {
      if (!safeKey(key)) throw new Error(name + ' 包含无效标识。');
      result[key] = handler(item, key);
    }
    return result;
  }
  function validateAttempt(item, includeId) {
    if (!plain(item) || typeof item.correct !== 'boolean') throw new Error('答题记录格式无效。');
    const result = {
      given: boundedString(item.given, 10000, '答案'),
      correct: item.correct,
      skill: boundedString(item.skill, 40, '技能'),
      date: requireDate(item.date),
      at: boundedString(item.at, 40, '记录时间')
    };
    if (includeId) {
      if (!safeKey(item.questionId)) throw new Error('题目标识无效。');
      result.questionId = item.questionId;
    }
    return result;
  }
  function validateState(input) {
    if (!plain(input) || input.version !== 1) throw new Error('这不是兼容的 Ember 学习备份。');
    checkNoUnsafeKeys(input, 0);
    if (!plain(input.settings)) throw new Error('学习设置无效。');
    const result = {
      version: 1,
      startDate: requireDate(input.startDate),
      settings: {
        target: boundedNumber(input.settings.target, 1, 9, '目标分数'),
        dailyMinutes: boundedNumber(input.settings.dailyMinutes, 5, 240, '每日时长', true),
        testType: boundedString(input.settings.testType, 40, '考试类别')
      },
      days: {}, words: {}, drafts: {}, attempts: [],
      lastDay: requireDate(input.lastDay || input.startDate)
    };
    result.days = mapEntries(input.days, 7300, '学习日记录', (item, key) => {
      requireDate(key);
      if (!plain(item) || !Array.isArray(item.done) || item.done.length > 200 || item.done.some(value => !safeKey(value))) throw new Error('每日完成记录无效。');
      const day = {
        done: [...new Set(item.done)],
        answers: mapEntries(item.answers, 2000, '每日答案', value => validateAttempt(value, false)),
        minutes: boundedNumber(item.minutes, 0, 1440, '学习时长'),
        wordReviews: mapEntries(item.wordReviews || {}, 1000, '词汇复习记录', value => {
          if (typeof value !== 'boolean') throw new Error('词汇复习记录无效。');
          return value;
        })
      };
      if (own(item, 'wordLimit')) day.wordLimit = boundedNumber(item.wordLimit, 0, 12, '每日新词量', true);
      return day;
    });
    result.words = mapEntries(input.words, 10000, '词汇记录', item => {
      if (!plain(item) || typeof item.lastCorrect !== 'boolean') throw new Error('词汇状态无效。');
      const word = {
        stage: boundedNumber(item.stage, 0, 5, '复习阶段', true),
        due: requireDate(item.due),
        lastReviewed: item.lastReviewed === null ? null : requireDate(item.lastReviewed),
        lastCorrect: item.lastCorrect,
        reviews: boundedNumber(item.reviews, 0, 100000, '复习次数', true),
        lapses: boundedNumber(item.lapses, 0, 100000, '遗忘次数', true),
        mode: boundedNumber(item.mode, 0, 3, '练习形式', true)
      };
      if (item.firstSeen) word.firstSeen = requireDate(item.firstSeen);
      return word;
    });
    result.drafts = mapEntries(input.drafts, 1500, '写作草稿', value => boundedString(value, 100000, '草稿'));
    if (!Array.isArray(input.attempts) || input.attempts.length > 12000) throw new Error('答题历史格式或数量无效。');
    result.attempts = input.attempts.map(item => validateAttempt(item, true));
    return result;
  }

  return function createEngine(options) {
    options = options || {};
    const now = typeof options.now === 'function' ? options.now : () => new Date();
    let storage = null;
    let lastError = '';
    if (own(options, 'storage')) storage = options.storage;
    else {
      try { if (typeof localStorage !== 'undefined') storage = localStorage; }
      catch (_) { lastError = '浏览器阻止了本地存储；本次练习仍可进行，请导出备份。'; }
    }
    function today(value) {
      const date = value === undefined ? now() : value;
      const parsed = date instanceof Date ? date : new Date(date);
      if (!Number.isFinite(parsed.getTime())) throw new Error('当前时间无效。');
      const parts = new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(parsed);
      const get = type => parts.find(part => part.type === type).value;
      return get('year') + '-' + get('month') + '-' + get('day');
    }
    function fresh() {
      const date = today();
      return { version: 1, startDate: date, settings: { target: 7.5, dailyMinutes: 60, testType: 'undecided' }, days: {}, words: {}, drafts: {}, attempts: [], lastDay: date };
    }
    let state = fresh();
    function save() {
      if (!storage || typeof storage.setItem !== 'function') {
        lastError = '本地存储不可用；进度暂存在本页面，请导出备份。';
        return false;
      }
      try {
        storage.setItem(STORAGE_KEY, JSON.stringify(state));
        lastError = '';
        return true;
      } catch (_) {
        lastError = '本地存储空间不足或访问被阻止；当前进度仍在，请导出备份。';
        return false;
      }
    }
    function load() {
      if (!storage || typeof storage.getItem !== 'function') return state;
      try {
        const raw = storage.getItem(STORAGE_KEY);
        if (raw) {
          if (raw.length > 4000000) throw new Error('备份过大。');
          state = validateState(JSON.parse(raw));
        }
        lastError = '';
      } catch (_) {
        // Do not silently overwrite a damaged backup. Reading never writes storage.
        lastError = '原有学习记录无法读取。它仍保留在浏览器中，请先备份再继续。';
      }
      return state;
    }
    function getDay(date) {
      date = requireDate(date || today());
      if (!own(state.days, date)) state.days[date] = { done: [], answers: {}, minutes: 0, wordReviews: {} };
      if (!state.days[date].wordReviews) state.days[date].wordReviews = {};
      return state.days[date];
    }
    function day(date) {
      date = requireDate(date || today());
      const exists = own(state.days, date);
      const result = getDay(date);
      if (!exists) save();
      return result;
    }
    function touch(date) { if (date > state.lastDay) state.lastDay = date; }
    function complete(key, date) {
      if (!safeKey(key)) throw new Error('练习标识无效。');
      date = requireDate(date || today());
      const record = getDay(date);
      if (!record.done.includes(key)) record.done.push(key);
      touch(date); save();
      return record.done.slice();
    }
    function isComplete(key, date) {
      date = requireDate(date || today());
      return !!(state.days[date] && state.days[date].done.includes(key));
    }
    function setDraft(key, value) {
      if (!safeKey(key)) throw new Error('草稿标识无效。');
      state.drafts[key] = boundedString(value, 100000, '草稿');
      save(); return value;
    }
    function getDraft(key) { return safeKey(key) && own(state.drafts, key) ? state.drafts[key] : ''; }
    function answer(questionId, given, correct, skill, date) {
      if (!safeKey(questionId) || typeof correct !== 'boolean') throw new Error('答题参数无效。');
      date = requireDate(date || today());
      const entry = { questionId, given: String(given == null ? '' : given).slice(0, 10000), correct, skill: String(skill || 'practice').slice(0, 40), date, at: new Date(now()).toISOString() };
      state.attempts.push(entry);
      if (state.attempts.length > 12000) state.attempts = state.attempts.slice(-12000);
      const { questionId: unused, ...dailyAnswer } = entry;
      getDay(date).answers[questionId] = dailyAnswer;
      touch(date); save();
      return entry;
    }
    function dueCount(date) {
      return Object.values(state.words).filter(word => word.due <= date && word.lastReviewed !== date).length;
    }
    function dueWords(words, date) {
      date = requireDate(date || today());
      if (!Array.isArray(words)) return [];
      return words.filter(word => word && safeKey(word.id) && own(state.words, word.id) && state.words[word.id].due <= date && state.words[word.id].lastReviewed !== date)
        .sort((a, b) => state.words[a.id].due.localeCompare(state.words[b.id].due) || state.words[b.id].lapses - state.words[a.id].lapses);
    }
    function dailyWordLimit(date) {
      date = requireDate(date || today());
      const record = getDay(date);
      if (own(record, 'wordLimit')) return record.wordLimit;
      const previous = state.days[addDays(date, -1)];
      const reviews = Object.values(previous && previous.wordReviews || {});
      const accuracy = reviews.length ? reviews.filter(Boolean).length / reviews.length : null;
      let limit = 6;
      if (accuracy !== null && accuracy < 0.7) limit = 3;
      else if (reviews.length >= 5 && accuracy >= 0.9) limit = Math.min(12, Math.max(6, previous.wordLimit || 6) + 2);
      if (dueCount(date) > 12) limit = 0;
      record.wordLimit = limit;
      save();
      return limit;
    }
    function newWords(words, date) {
      date = requireDate(date || today());
      if (!Array.isArray(words)) return [];
      const learnedToday = Object.values(state.words).filter(word => word.firstSeen === date).length;
      const remaining = Math.max(0, dailyWordLimit(date) - learnedToday);
      return words.filter(word => word && safeKey(word.id) && !own(state.words, word.id)).slice(0, remaining);
    }
    function getWordMode(id, date) {
      if (!safeKey(id)) throw new Error('词汇标识无效。');
      date = requireDate(date || today());
      const word = state.words[id];
      if (!word) return 0;
      return word.lastReviewed === date ? word.mode : (word.mode + 1) % 4;
    }
    function reviewWord(id, correct, date, detail) {
      if (!safeKey(id) || typeof correct !== 'boolean') throw new Error('词汇复习参数无效。');
      date = requireDate(date || today());
      if (detail !== undefined && !plain(detail)) throw new Error('词汇作答详情无效。');
      detail = detail || {};
      if (own(detail, 'selfRated') && typeof detail.selfRated !== 'boolean') throw new Error('词汇自评状态无效。');
      const given = own(detail, 'given') ? boundedString(detail.given, 10000, '词汇答案') : (correct ? 'recalled' : 'needs-review');
      const skill = detail.selfRated ? 'vocabulary-self' : 'vocabulary';
      // Cache the day's capacity before a new answer alters the backlog.
      dailyWordLimit(date);
      const previous = state.words[id];
      if (previous && previous.lastReviewed === date) return { ...previous, repeated: true };
      if (previous && previous.lastReviewed && previous.lastReviewed > date) return { ...previous, repeated: true };
      const mode = getWordMode(id, date);
      const stage = correct ? Math.min(5, (previous ? previous.stage : 0) + 1) : 0;
      const interval = correct ? INTERVALS[stage - 1] : 1;
      const word = {
        stage, due: addDays(date, interval), lastReviewed: date, lastCorrect: correct,
        reviews: (previous ? previous.reviews : 0) + 1,
        lapses: (previous ? previous.lapses : 0) + (correct ? 0 : 1),
        mode, firstSeen: previous && previous.firstSeen || date
      };
      state.words[id] = word;
      getDay(date).wordReviews[id] = correct;
      answer('vocab:' + id, given, correct, skill, date);
      return { ...word, repeated: false };
    }
    function active(record) {
      return !!record && (record.done.length > 0 || Object.keys(record.answers).length > 0 || Object.keys(record.wordReviews || {}).length > 0 || record.minutes > 0);
    }
    function stats(date) {
      date = requireDate(date || today());
      const record = state.days[date];
      // Free-form word use is self-assessed, so it contributes activity but not
      // objective accuracy. The attempt remains available for honest history.
      const answers = Object.values(record && record.answers || {}).filter(item => item.skill !== 'vocabulary-self');
      const correct = answers.filter(item => item.correct).length;
      let cursor = active(record) ? date : addDays(date, -1);
      let streak = 0;
      while (active(state.days[cursor]) && streak < 7300) { streak++; cursor = addDays(cursor, -1); }
      return {
        streak, completed: record ? record.done.length : 0,
        totalAnswers: answers.length, correct,
        accuracy: answers.length ? correct / answers.length : null,
        due: dueCount(date), newLimit: dailyWordLimit(date),
        learned: Object.keys(state.words).length,
        totalAttempts: state.attempts.length,
        activeDays: Object.values(state.days).filter(active).length
      };
    }
    function exportData() { return JSON.stringify(state, null, 2); }
    function importData(json) {
      if (typeof json !== 'string' || json.length > 4000000) throw new Error('备份文件无效或超过 4 MB。');
      let parsed;
      try { parsed = JSON.parse(json); } catch (_) { throw new Error('备份不是有效的 JSON 文件。'); }
      const candidate = validateState(parsed);
      state = candidate;
      const persisted = save();
      return { imported: true, persisted, days: Object.keys(state.days).length, words: Object.keys(state.words).length };
    }
    function addMinutes(minutes, date) {
      boundedNumber(minutes, 0, 240, '学习时长');
      date = requireDate(date || today());
      const record = getDay(date);
      record.minutes = Math.min(1440, record.minutes + minutes);
      touch(date); save(); return record.minutes;
    }
    load();
    return {
      STORAGE_KEY, TIME_ZONE, INTERVALS: INTERVALS.slice(),
      today, addDays, load, save, getState: () => state, day, complete, isComplete,
      setDraft, getDraft, answer, checkAnswer, dueWords, newWords, dailyWordLimit,
      reviewWord, getWordMode, stats, exportData, importData, addMinutes,
      getLastError: () => lastError,
      get storageAvailable() { return !!storage; },
      get lastError() { return lastError; }
    };
  };
});
