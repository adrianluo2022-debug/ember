/* Original teaching materials. These are not IELTS past papers or news reports. */
(function () {
  const choice = (id, prompt, options, answer, explanation) => ({ id, type: 'choice', prompt, options, answer, explanation });
  const input = (id, prompt, answer, explanation, accepted = []) => ({ id, type: 'input', prompt, answer, accepted, explanation });
  const tf = (id, prompt, answer, explanation) => choice(id, prompt, ['True', 'False', 'Not Given'], answer, explanation);
  const word = (id, text, phonetic, pos, meaning, example, cloze, options) => ({ id, word: text, phonetic, pos, meaning, example, cloze, answer: text, options });
  window.CONTENT_B = {
    words: [
      word('w43', 'restore', '/rɪˈstɔːr/', 'v.', '修复；使恢复原貌', 'The team plans to restore the original wooden doors.', 'The damaged doors need care. We plan to _____ them.', ['replace', 'restore', 'delay', 'predict']),
      word('w44', 'preserve', '/prɪˈzɜːrv/', 'v.', '保留；保护', 'We can preserve the brick walls while changing the layout.', 'The walls tell the building’s story, so we should _____ them.', ['preserve', 'remove', 'interrupt', 'estimate']),
      word('w45', 'heritage', '/ˈherɪtɪdʒ/', 'n.', '文化遗产；传统', 'The former factory is part of the district’s industrial heritage.', 'The museum protects the town’s industrial _____.', ['deadline', 'surface', 'heritage', 'budget']),
      word('w46', 'transform', '/trænsˈfɔːrm/', 'v.', '改造；使转变', 'A new entrance can transform the visitor experience.', 'The proposal will _____ an old warehouse into a library.', ['maintain', 'measure', 'transform', 'reject']),
      word('w47', 'vacant', '/ˈveɪkənt/', 'adj.', '空置的；无人使用的', 'The building has been vacant for five years.', 'Nobody has used the shop for years; it is _____.', ['occupied', 'vacant', 'crowded', 'portable']),
      word('w48', 'accessible', '/əkˈsesəbl/', 'adj.', '可进入的；便于使用的', 'A ramp makes the main entrance accessible to wheelchair users.', 'The entrance should be _____ to wheelchair users.', ['temporary', 'private', 'accessible', 'fragile']),
      word('w49', 'resource', '/rɪˈsɔːrs/', 'n.', '资源', 'Fresh water is a limited resource.', 'Clean water is a valuable _____ that we should protect.', ['resource', 'deadline', 'pattern', 'opinion']),
      word('w50', 'replacement', '/rɪˈpleɪsmənt/', 'n.', '替换；替代品', 'The supplier could not provide replacement parts for the chair.', 'A new part used instead of a damaged one is a _____.', ['replacement', 'reflection', 'conclusion', 'district']),
      word('w51', 'waste', '/weɪst/', 'n./v.', '废弃物；浪费', 'Repairing furniture can reduce construction waste.', 'Ordering the correct quantity can reduce material _____.', ['privacy', 'heritage', 'waste', 'access']),
      word('w52', 'allowance', '/əˈlaʊəns/', 'n.', '预留量；预留额度', 'The flooring order includes an allowance for cutting.', 'We ordered extra material as an _____ for cutting.', ['outcome', 'allowance', 'audience', 'opportunity']),
      word('w53', 'conserve', '/kənˈsɜːrv/', 'v.', '节约；保护资源', 'Low-flow taps help conserve water.', 'Turning off unused lights helps _____ energy.', ['consume', 'conserve', 'expand', 'deliver']),
      word('w54', 'impact', '/ˈɪmpækt/', 'n.', '影响', 'We considered the environmental impact of each material.', 'The team assessed the project’s environmental _____.', ['impact', 'ceiling', 'invoice', 'texture']),
      word('w55', 'pedestrian', '/pəˈdestriən/', 'n./adj.', '行人；行人的', 'The street has a separate pedestrian route.', 'A person travelling on foot is a _____.', ['supplier', 'pedestrian', 'tenant', 'driver']),
      word('w56', 'commute', '/kəˈmjuːt/', 'n./v.', '通勤；往返上下班', 'My daily commute takes forty minutes.', 'My journey between home and work is my _____.', ['workshop', 'commute', 'proposal', 'holiday']),
      word('w57', 'congestion', '/kənˈdʒestʃən/', 'n.', '拥堵', 'A reliable bus service may reduce traffic congestion.', 'Too many cars can cause traffic _____.', ['confidence', 'heritage', 'congestion', 'privacy']),
      word('w58', 'district', '/ˈdɪstrɪkt/', 'n.', '地区；城区', 'The new library serves residents across the district.', 'This _____ of the city is known for its old workshops.', ['district', 'material', 'deadline', 'ceiling']),
      word('w59', 'affordable', '/əˈfɔːrdəbl/', 'adj.', '价格可承受的', 'The neighbourhood needs more affordable housing.', 'Housing should be _____ for people on ordinary incomes.', ['accurate', 'affordable', 'vacant', 'unexpected']),
      word('w60', 'facility', '/fəˈsɪləti/', 'n.', '设施；场所', 'The swimming pool is an important community facility.', 'The new sports _____ will include a swimming pool.', ['resource', 'facility', 'argument', 'surface']),
      word('w61', 'presentation', '/ˌpreznˈteɪʃn/', 'n.', '展示；演示；汇报', 'Maya organised her presentation around a visitor’s journey.', 'The designer explained her proposal during a ten-minute _____.', ['presentation', 'replacement', 'installation', 'resource']),
      word('w62', 'workshop', '/ˈwɜːrkʃɑːp/', 'n.', '工作坊；实践研讨课', 'We attended a workshop on inclusive design.', 'The practical training _____ lasted two hours.', ['deadline', 'surface', 'workshop', 'invoice']),
      word('w63', 'audience', '/ˈɔːdiəns/', 'n.', '听众；观众；受众', 'Maya used shorter explanations so that the audience could follow her ideas.', 'The people listening to a presentation are its _____.', ['contractor', 'audience', 'prototype', 'resource']),
      word('w64', 'conclusion', '/kənˈkluːʒn/', 'n.', '结论；结尾总结', 'The conclusion should bring the main points together.', 'The final section that summarises the main points is the _____.', ['allowance', 'district', 'conclusion', 'maintenance']),
      word('w65', 'diagram', '/ˈdaɪəɡræm/', 'n.', '示意图；图解', 'The entrance diagram helped visitors understand the route.', 'A simplified drawing that explains how something works is a _____.', ['deadline', 'compromise', 'diagram', 'resource']),
      word('w66', 'confusion', '/kənˈfjuːʒn/', 'n.', '困惑；混淆', 'The small labels caused confusion during the presentation.', 'Unclear instructions can cause _____ about what to do next.', ['congestion', 'confusion', 'privacy', 'confidence']),
      word('w67', 'prototype', '/ˈproʊtətaɪp/', 'n.', '原型；试制模型', 'We built a prototype before producing the final chair.', 'The first test version of a product is a _____.', ['prototype', 'deadline', 'resource', 'district']),
      word('w68', 'simulate', '/ˈsɪmjuleɪt/', 'v.', '模拟', 'The software can simulate daylight at different times.', 'This tool can _____ how sunlight enters the room.', ['simulate', 'negotiate', 'restore', 'conserve']),
      word('w69', 'accurate', '/ˈækjərət/', 'adj.', '准确的', 'Accurate measurements are essential before ordering furniture.', 'Check the dimensions again to make sure they are _____.', ['affordable', 'accurate', 'vacant', 'durable']),
      word('w70', 'privacy', '/ˈpraɪvəsi/', 'n.', '隐私', 'We must protect the privacy of people who take part in the study.', 'Do not share client information without considering their _____.', ['privacy', 'heritage', 'congestion', 'texture']),
      word('w71', 'reliable', '/rɪˈlaɪəbl/', 'adj.', '可靠的', 'A reliable supplier delivers the agreed materials on time.', 'We need a _____ source of information that we can trust.', ['reliable', 'fragile', 'vacant', 'unexpected']),
      word('w72', 'limitation', '/ˌlɪmɪˈteɪʃn/', 'n.', '局限；限制', 'One limitation of the model is that it cannot show texture accurately.', 'A weakness that restricts what a tool can do is a _____.', ['facility', 'limitation', 'resource', 'district']),
      word('w73', 'negotiate', '/nɪˈɡoʊʃieɪt/', 'v.', '协商；谈判', 'We need to negotiate a realistic delivery date.', 'Both sides will discuss the terms and try to _____ an agreement.', ['negotiate', 'simulate', 'preserve', 'reflect']),
      word('w74', 'contractor', '/ˈkɑːntræktər/', 'n.', '承包商；承包人', 'The contractor received written confirmation of the revised scope.', 'The company hired to carry out the construction work is the _____.', ['contractor', 'audience', 'district', 'resource']),
      word('w75', 'installation', '/ˌɪnstəˈleɪʃn/', 'n.', '安装；安装工作', 'The additional cost includes materials and installation.', 'Putting the new flooring into place is part of its _____.', ['presentation', 'conclusion', 'installation', 'perspective']),
      word('w76', 'compromise', '/ˈkɑːmprəmaɪz/', 'n./v.', '折中方案；妥协', 'Keeping the layout but changing the colour was a practical compromise.', 'Both sides accepted part of the other’s proposal and reached a _____.', ['resource', 'compromise', 'limitation', 'district']),
      word('w77', 'approve', '/əˈpruːv/', 'v.', '批准；认可', 'The client needs to approve the order by noon tomorrow.', 'Please review the final drawings and _____ them before construction begins.', ['approve', 'conserve', 'simulate', 'reflect']),
      word('w78', 'scope', '/skoʊp/', 'n.', '范围；工作范围', 'Adding a second floor would change the scope of the project.', 'The contract defines the _____ of the designer’s work.', ['scope', 'feedback', 'texture', 'commute']),
      word('w79', 'evaluate', '/ɪˈvæljueɪt/', 'v.', '评估', 'We will evaluate the design after collecting user feedback.', 'We should _____ the results before deciding whether the plan worked.', ['evaluate', 'order', 'restore', 'commute']),
      word('w80', 'perspective', '/pərˈspektɪv/', 'n.', '视角；观点', 'Talking to residents helped me understand their perspective.', 'Consider the problem from the user’s _____.', ['deadline', 'perspective', 'facility', 'congestion']),
      word('w81', 'opportunity', '/ˌɑːpərˈtuːnəti/', 'n.', '机会', 'The project gave me an opportunity to work with international colleagues.', 'The placement is a valuable _____ to learn new skills.', ['opportunity', 'limitation', 'waste', 'surface']),
      word('w82', 'adapt', '/əˈdæpt/', 'v.', '适应；调整', 'Designers need to adapt to different working cultures.', 'When circumstances change, we need to _____ our plans.', ['adapt', 'predict', 'consume', 'restore']),
      word('w83', 'confidence', '/ˈkɑːnfɪdəns/', 'n.', '信心', 'Regular speaking practice has increased my confidence.', 'Preparing and practising helped build my _____.', ['privacy', 'confidence', 'congestion', 'heritage']),
      word('w84', 'outcome', '/ˈaʊtkʌm/', 'n.', '结果；成果', 'The final outcome was a space that residents enjoyed using.', 'We will compare the intended result with the actual _____.', ['outcome', 'resource', 'priority', 'prototype'])
    ],
    days: [
      {
        id: 8, title: '让旧建筑继续讲故事', theme: 'Adaptive reuse', focus: 'reading', subtitle: '在原创改造故事里练习过去时与现在完成时。',
        vocabIds: ['w43', 'w44', 'w45', 'w46', 'w47', 'w48'],
        grammar: { title: '完成的过去事件，还是持续到现在？', rule: '有明确过去时间，如 last year，用一般过去时。描述持续至今的状态或与现在有关的经历，用现在完成时。since 接起点，for 接时长。', examples: ['The studio surveyed the building last year.', 'The building has been vacant for five years.', 'The team has worked on the proposal since March.'] },
        reading: {
          title: 'A second life for a small factory',
          text: 'When a small clothing factory closed, its building remained vacant for five years. Last spring, a local design studio proposed turning it into a community library. The team wanted to transform the space without removing every sign of its industrial past. They planned to restore the wooden entrance doors and preserve a wall where workers had written their names.\n\nThe first proposal placed the reading room upstairs. However, interviews with local residents revealed a problem: several older people found the existing stairs difficult to use. The designers moved the main reading area to the ground floor and added an accessible entrance. A smaller upstairs room would be used for staff meetings.\n\nSome residents initially preferred a completely new building. After seeing the revised plans, many supported keeping the factory because it represented their neighbourhood’s heritage. The studio has not started construction yet. It is still checking the cost of repairing the roof. The project shows that preserving a building can involve changing its use and layout, rather than keeping every feature exactly as it was.',
          questions: [
            choice('d8r1', 'Why did the designers move the main reading room?', ['The upstairs room was too dark.', 'Some residents had difficulty using the stairs.', 'The roof had already collapsed.', 'Staff requested a larger meeting room.'], 'Some residents had difficulty using the stairs.', '第二段说明居民访谈发现老年人使用楼梯有困难，因此把主阅览区移至首层。'),
            tf('d8r2', 'Construction work has already begun.', 'False', '文末明确说 has not started construction yet，与题目相反。'),
            tf('d8r3', 'The project will cost less than a new building.', 'Not Given', '文章提到核查屋顶维修成本，但没有比较新建与改造的总成本。不能用常识补答案。'),
            input('d8r4', 'Complete with ONE word from the text: The factory represented the neighbourhood’s _____.', 'heritage', '第三段给出 heritage，表示社区的历史文化遗产。')
          ]
        },
        listening: {
          title: 'The library site meeting',
          transcript: 'Good morning, everyone. Before we begin the site visit, I would like to explain three changes to the library proposal. First, the entrance will remain on the east side of the building. We considered the west side, but the pavement there is too narrow for a ramp. Second, we will preserve the original brick wall in the reading room. The wooden shelves, however, are new. Finally, the roof inspection was planned for Tuesday, but the engineer can now come on Thursday. Please do not order the roofing material before we receive the report. Our aim is to restore the factory carefully and create a library that is accessible to everyone. Construction has not started, so there is still time to review the details.',
          questions: [
            choice('d8l1', 'Where will the entrance be?', ['On the north side', 'On the west side', 'On the east side', 'On the south side'], 'On the east side', '录音先给确定方案 east side，west side 是被否决的选项。'),
            input('d8l2', 'On which day will the engineer inspect the roof? Write ONE word.', 'Thursday', 'Tuesday 是原计划，but 后的 Thursday 才是调整后的日期。', ['thursday']),
            choice('d8l3', 'What should the team do before ordering roofing material?', ['Build the shelves', 'Receive the inspection report', 'Move the entrance', 'Paint the brick wall'], 'Receive the inspection report', '听取 do not ... before ...，先收到报告再订购屋顶材料。')
          ]
        },
        writing: {
          title: '解释一个设计调整', prompt: '原创段落训练：用 100–140 个英文单词说明旧厂房改图前后的变化，以及为什么无障碍需求影响了方案。至少使用 preserve、accessible 和一个过去时句子。不是完整 IELTS 考试作文。', minWords: 100,
          model: 'The designers originally planned to place the main reading room upstairs. However, interviews showed that some older residents would have difficulty reaching it. The team therefore revised the layout and moved the main reading area to the ground floor. This change makes the library more accessible without removing its historical character. For example, the designers can still preserve the original brick wall and restore the entrance doors. In my view, this is a sensible balance between heritage and everyday use. A building should tell its story, but it should also meet the needs of the people who will use it. The final construction cost still needs to be checked.',
          checklist: ['是否写清“原方案—发现的问题—调整”这条逻辑？', '是否区分过去决定 planned/revised 与现在观点 makes/can？', '是否准确使用 preserve 和 accessible？', '是否避免声称文章未提供的成本或完工信息？']
        },
        speaking: { title: '一座值得保留的建筑', prompt: 'Describe an old building that you think should be preserved. 准备 1 分钟，尝试说 60–120 秒。', cues: ['Where is it?', 'What is special about it?', 'How could it be used in the future?', 'How could it become more accessible?'], model: 'I would like to describe an old workshop near my home. It has brick walls and large windows, and it reminds residents of the area’s history. I think it could become a small library. The designers should preserve its main features while adding an accessible entrance. This would allow the building to serve a new purpose.' }
      },
      {
        id: 9, title: '从材料到环境影响', theme: 'Materials that last', focus: 'listening', subtitle: '听懂材料选择的理由，重新遇见 preserve 与 restore。',
        vocabIds: ['w49', 'w50', 'w51', 'w52', 'w53', 'w54'],
        grammar: { title: '被动语态：把重点放在材料上', rule: '当材料或动作结果比执行者更重要时，可用被动语态：be + 过去分词。时态体现在 be 上。已经完成用 have/has been + 过去分词。', examples: ['The chairs were repaired last month.', 'The materials are checked before delivery.', 'Most of the flooring has been ordered.'] },
        reading: {
          title: 'The cheapest chair was not the cheapest choice',
          text: 'A small café needed twenty chairs. The owner first chose a low-priced model because it would reduce the opening budget. Before placing the order, the designer asked the supplier about repairs and replacement parts. The supplier could not provide spare legs, and the seats could not be removed easily.\n\nThe team then examined a more expensive chair made by a local workshop. Its frame was durable, and each part could be replaced separately. They also tested a sample in the café for a week. Staff found it easy to clean, although it was slightly heavier than the first model. The owner decided to order the second chair and keep several existing tables. Those tables were restored instead of being thrown away.\n\nThe designer did not claim that every local product had a smaller environmental impact. Transport was only one factor. Material use, maintenance and useful life also mattered. By preserving usable furniture, the café could reduce waste and conserve resources. The team recorded the purchase price and planned to compare repair costs after a year. Their decision was based on expected long-term use, not price alone.',
          questions: [
            choice('d9r1', 'What was a problem with the first chair?', ['It was too heavy.', 'Spare parts were not available.', 'It could not fit under the tables.', 'Its colour was too bright.'], 'Spare parts were not available.', '第一段指出供应商不能提供备用椅腿，且座面难以拆卸。'),
            tf('d9r2', 'The team tested the second chair before ordering it.', 'True', '第二段明确写 tested a sample ... for a week。'),
            tf('d9r3', 'The designer said that local products always had a smaller environmental impact.', 'False', '第三段 did not claim ... every local product，明确否定这种绝对判断。'),
            input('d9r4', 'Complete with ONE word: The existing tables were _____ rather than discarded.', 'restored', '第二段 Those tables were restored，题目 discarded 与 thrown away 同义。这里需要过去分词 restored。')
          ]
        },
        listening: {
          title: 'Choosing the café floor',
          transcript: 'We have compared three flooring options for the café. The stone is durable, but it is above our budget. The first timber sample is affordable, although the supplier cannot confirm when it will arrive. I recommend the second timber option. It costs a little more, but the supplier has confirmed delivery in two weeks. We should order forty-eight square metres, including the allowance for cutting. Please keep the leftover pieces because they may be useful for future repairs. We also discussed the lighting. The existing fittings will be kept, but their lamps will be replaced with more efficient ones. This will help conserve energy without creating unnecessary waste. I will send a revised cost summary this afternoon so that the owner can approve the changes.',
          questions: [
            choice('d9l1', 'Why is the first timber option not recommended?', ['It is above the budget.', 'Its delivery date is uncertain.', 'It is not durable enough.', 'It is too dark.'], 'Its delivery date is uncertain.', '第一种木材价格可以接受，但到货时间不能确认。不要把石材超预算的原因混入。'),
            input('d9l2', 'How many square metres should be ordered? Write a NUMBER.', '48', '数量为 forty-eight，且已包含切割余量。', ['forty-eight', 'forty eight']),
            choice('d9l3', 'What will happen to the existing light fittings?', ['They will be discarded.', 'They will be moved outside.', 'They will be kept with new lamps.', 'They will be sold to the supplier.'], 'They will be kept with new lamps.', 'fittings 保留，lamps 更换，区分灯具和光源。')
          ]
        },
        writing: {
          title: '比较两种材料方案', prompt: '原创观点段落：用 100–140 个英文单词说明为什么最便宜的材料未必是最合适的选择。给一个设计项目例子，并使用 durable、waste 和 impact。', minWords: 100,
          model: 'The cheapest material is not always the most suitable choice for a design project. A low purchase price may be attractive, but the material could need frequent repairs or early replacement. For example, a café floor is used by many people every day, so it needs to be durable and easy to maintain. A more expensive floor may be a better choice if individual sections can be repaired. This can reduce waste and the demand for new resources. However, price alone does not prove quality either. Designers should compare reliable information about performance, maintenance and environmental impact before making a recommendation to the client.',
          checklist: ['是否提出清晰观点，而非只列单词？', '是否用一个具体场景支持观点？', '是否使用比较表达 more expensive / better / cheaper？', '是否避免 always 等无依据的绝对判断？']
        },
        speaking: { title: '推荐一种耐用材料', prompt: 'What makes a material suitable for a busy public space? 先说观点，再给例子，最后解释取舍。', cues: ['Durability', 'Cleaning and maintenance', 'Cost', 'Environmental impact'], model: 'I think durability is especially important because public spaces are used by many people. For instance, a café floor should be easy to clean and repair. I would compare several samples rather than choose by appearance alone. A cheaper material may create more waste if it needs to be replaced frequently.' }
      },
      {
        id: 10, title: '重新看见一条街道', theme: 'A neighbourhood for people', focus: 'speaking', subtitle: '用比较级描述城市空间，练习观点与证据。',
        vocabIds: ['w55', 'w56', 'w57', 'w58', 'w59', 'w60'],
        grammar: { title: '比较级：比较具体维度', rule: '比较两种方案时用比较级 + than。短形容词常加 -er，较长形容词常用 more/less。不要同时使用 more 和 -er。', examples: ['The new route is safer than the old one.', 'The bus is more affordable than a taxi.', 'The pavement is less crowded in the morning.'] },
        reading: {
          title: 'A street trial, not a final answer',
          text: 'In the fictional district of Brook Lane, residents complained that a busy shopping street was difficult to cross. The local planning team introduced a six-week trial. Two parking spaces were removed near the crossing, and temporary seating was installed outside a community facility. A separate pedestrian route was marked with painted lines.\n\nBefore the trial, the team counted people walking along the street at three times of day. They repeated the counts during the trial and interviewed shop owners. More people stopped to use the seating, but the number of visitors to nearby shops did not increase equally. One café became busier, while a small repair shop reported no change.\n\nSeveral residents said the street felt safer. However, delivery drivers reported that unloading had become more difficult. The team proposed a morning delivery period to address this problem. They also asked whether an improved bus service could make the commute more affordable and reduce congestion. No final decision has been made. The trial suggests that a successful street must balance pedestrian access, business needs and transport connections, rather than rely on one attractive design feature.',
          questions: [
            choice('d10r1', 'How did the team compare conditions before and during the trial?', ['They counted pedestrians and interviewed shop owners.', 'They measured only traffic noise.', 'They surveyed only the café customers.', 'They compared property prices.'], 'They counted pedestrians and interviewed shop owners.', '第二段介绍步行人数统计与商户访谈，两类证据共同使用。'),
            tf('d10r2', 'All nearby shops received more visitors.', 'False', 'café 更忙，但 repair shop 没有变化；all 与原文不符。'),
            tf('d10r3', 'The improved bus service has already started.', 'Not Given', '文章只说团队提出是否改善公交的讨论，没有说明已启动。'),
            input('d10r4', 'Complete with ONE word: The team proposed a morning _____ period.', 'delivery', '第三段 morning delivery period 是应对卸货困难的建议。')
          ]
        },
        listening: {
          title: 'Getting to the community centre',
          transcript: 'Welcome to the new community centre. If you are travelling from the station, the number twelve bus stops directly outside our main entrance. You can also walk here in about fifteen minutes, but please use the riverside route rather than Market Street, where construction work is taking place. The centre opens at nine on weekdays and at ten on Saturdays. Our swimming pool is on the ground floor, beside the café. The workshop rooms are upstairs, and there is a lift near reception. Cycle parking is available behind the building. We have only six car parking spaces, so we encourage visitors to use public transport where possible. This helps reduce congestion and keeps the main pedestrian entrance clear for everyone.',
          questions: [
            input('d10l1', 'Which bus stops outside the centre? Write a NUMBER.', '12', 'number twelve bus，即 12 路公交。', ['twelve']),
            choice('d10l2', 'Which walking route is recommended?', ['Market Street', 'The riverside route', 'The route behind the station', 'The main road'], 'The riverside route', 'Market Street 正在施工，因此推荐 riverside route。'),
            input('d10l3', 'At what time does the centre open on Saturdays?', '10', '工作日 9 点，周六 10 点。留意限定词 Saturdays。', ['10:00', 'ten', '10 am', '10 a.m.'])
          ]
        },
        writing: {
          title: '提出改善街区的建议', prompt: '原创观点段落：用 100–140 个英文单词比较步行友好街区与以停车为主的街区。说明一个优点及一个需要解决的问题。至少使用两个比较级。', minWords: 100,
          model: 'A pedestrian-friendly street can be more comfortable than a street designed mainly for cars. Wider pavements and accessible crossings may make it easier for residents to reach shops and community facilities. Seating can also give older people a place to rest. However, removing parking spaces may create difficulties for delivery drivers and people who cannot easily use public transport. A balanced approach is therefore needed. For example, a separate morning delivery period could keep the pedestrian route clear during busier hours. Designers should collect evidence from different users before making permanent changes. A street should be judged by how well it works, not only by how attractive it looks.',
          checklist: ['是否比较了具体方面，而非笼统说 better？', '是否包含一个优点和一个问题？', '是否使用 evidence 或其他已学词汇？', '是否把事实、推测 may/could 和建议区分清楚？']
        },
        speaking: { title: '你会如何改善通勤？', prompt: 'How could your city make daily travel easier? 回答 60–90 秒，比较至少两种出行方式。', cues: ['Your current commute', 'One transport problem', 'A realistic improvement', 'Who would benefit'], model: 'My daily commute is usually by bus. It is more affordable than taking a taxi, but it can be slow during busy periods. I think a more reliable bus service would help. The city could also improve pedestrian routes near stations. However, each district has different needs, so local residents should be involved in planning.' }
      },
      {
        id: 11, title: '把反馈变成进步', theme: 'Learning through feedback', focus: 'writing', subtitle: '从故事中提取证据，把旧词放进新的学习情境。',
        vocabIds: ['w61', 'w62', 'w63', 'w64', 'w65', 'w66'],
        grammar: { title: '不可数名词与具体建议', rule: 'feedback、evidence、knowledge、information 通常不可数。不加 -s；表达“一条”时可用 a piece of。suggestion 和 comment 则可以计数。', examples: ['The tutor gave me useful feedback.', 'This interview provides a piece of evidence.', 'I received three helpful suggestions.'] },
        reading: {
          title: 'A clearer presentation',
          text: 'During a design workshop, Maya presented a proposal for a small neighbourhood library. She described the durable materials and the efficient lighting system, but her audience struggled to understand why she had chosen the layout. Her tutor did not simply tell her to improve her English. Instead, he asked her to explain the journey of one visitor through the building.\n\nMaya revised her presentation around an older resident arriving on foot. She explained where the resident would enter, find information and sit down to read. This approach helped her connect each design decision to a specific need. She also replaced several technical terms with shorter explanations.\n\nAt the next session, the group answered three questions about the proposal. Their answers showed that the layout was easier to understand, although the entrance diagram still caused confusion. Maya recorded this feedback and changed the drawing. She has now started a short reflection notebook. After each presentation, she writes what worked, what evidence supports that view and what she will revise next. Her aim is not to avoid every mistake, but to use each attempt to improve one important aspect of her communication.',
          questions: [
            choice('d11r1', 'What did the tutor ask Maya to explain?', ['The full construction budget', 'One visitor’s journey through the building', 'The history of the district', 'Every technical term in her slides'], 'One visitor’s journey through the building', '导师建议以一个访客的使用路径组织说明，而不是单独堆积材料信息。'),
            tf('d11r2', 'Maya removed all technical terms from her presentation.', 'False', '原文 several，表示一些；不是 all。'),
            tf('d11r3', 'The workshop lasted three days.', 'Not Given', '文章提到 next session，但没有给出总天数。'),
            input('d11r4', 'Complete with ONE word: The entrance _____ still caused confusion.', 'diagram', '第三段指出 entrance diagram 仍造成困惑。')
          ]
        },
        listening: {
          title: 'Feedback after a presentation',
          transcript: 'Thanks for your presentation, Maya. Your explanation of the accessible entrance was clear, and the example of an older visitor helped us understand the layout. There are two things to revise before Friday. First, the labels on the floor plan are too small. Please increase their size, but keep the number of labels the same. Second, your conclusion introduces a new material that you did not discuss earlier. Either explain that material in the main presentation or leave it out of the conclusion. You do not need to add more slides. In fact, the current eight slides are enough. After making these changes, practise the presentation with a colleague and ask them to explain your main idea back to you. Their response will provide useful evidence of how clearly you communicated.',
          questions: [
            choice('d11l1', 'What should Maya change about the labels?', ['Their colour', 'Their number', 'Their size', 'Their language'], 'Their size', 'increase their size，但 keep the number the same。'),
            choice('d11l2', 'What is the problem with the conclusion?', ['It is too short.', 'It introduces a new material.', 'It repeats the title.', 'It contains too many diagrams.'], 'It introduces a new material.', '结论突然引入前文没讨论的新材料，应提前说明或删除。'),
            input('d11l3', 'How many slides does Maya currently have? Write a NUMBER.', '8', 'the current eight slides are enough，即现有 8 页已经足够。', ['eight'])
          ]
        },
        writing: {
          title: '把一句空泛评价改具体', prompt: '原创说明段落：用 100–140 个英文单词解释什么样的反馈最有帮助。给出一个具体例子，并使用 feedback、evidence 和 revise。', minWords: 100,
          model: 'Useful feedback should identify a specific problem and suggest a practical next step. For example, telling a designer that a presentation is confusing does not explain what needs to change. It is more helpful to say that the entrance diagram is difficult to read because the labels are too small. This gives the designer a clear reason to revise the drawing. Feedback should also be supported by evidence. If several listeners misunderstand the same point, this may show that the explanation needs improvement. However, not every comment has to be accepted. The designer should consider the purpose of the project and reflect on which changes would benefit the audience most.',
          checklist: ['feedback 和 evidence 是否没有误加 -s？', '是否包含“问题—原因—下一步”的例子？', '是否使用至少一个 because / if 从句？', '最后一句是否回到观点，而不是加入无关新话题？']
        },
        speaking: { title: '一次有帮助的反馈', prompt: 'Describe some useful feedback you received. 说出具体建议及你随后做出的修改。', cues: ['Who gave the feedback?', 'What was the exact problem?', 'What did you revise?', 'What did you learn?'], model: 'A colleague once told me that my presentation focused too much on materials and not enough on the client’s needs. I revised it by explaining how people would use each space. This approach made my ideas easier to follow. I learned that useful feedback should describe a specific problem and a possible solution.' }
      },
      {
        id: 12, title: '数字工具，也需要判断', theme: 'Technology with a purpose', focus: 'reading', subtitle: '区分工具能做什么与不能证明什么，练习情态动词。',
        vocabIds: ['w67', 'w68', 'w69', 'w70', 'w71', 'w72'],
        grammar: { title: 'can、may、must：能力、可能性与必要性', rule: '情态动词后用动词原形，不加 to，不随主语加 -s。can 表能力，may 表可能性，must 表强烈必要性。', examples: ['The model can simulate daylight.', 'The result may change after the site survey.', 'We must protect the client’s privacy.'] },
        reading: {
          title: 'The model that needed a measurement',
          text: 'A design team built a digital prototype of a small café to compare two seating layouts. The model could simulate daylight and allow the owner to move through the room on a screen. During the first review, the owner preferred a layout with a long shared table beside the window. The image looked convincing, and everyone was ready to continue.\n\nA junior designer then asked whether the window dimensions had been checked on site. The model was based on an old drawing, and the actual window was lower than the drawing suggested. Once accurate measurements were added, the team discovered that a storage unit would block part of the light. They revised the furniture arrangement before ordering anything.\n\nThe team did not stop using digital tools. Instead, they wrote down the source of each important measurement and marked uncertain information clearly. They also removed the client’s personal details before sharing screenshots outside the office. The experience showed a limitation of visual models: a realistic image is not necessarily reliable evidence. A useful tool can support a decision, but the quality of its input still matters.',
          questions: [
            choice('d12r1', 'What was the source of the inaccurate window dimensions?', ['A recent site survey', 'An old drawing', 'A supplier’s invoice', 'A visitor interview'], 'An old drawing', '第二段说模型基于 old drawing，而实际窗户更低。'),
            tf('d12r2', 'The furniture was ordered before the team discovered the problem.', 'False', 'revised ... before ordering anything，发现并修正问题后才会订货。'),
            tf('d12r3', 'The junior designer had more than ten years of experience.', 'Not Given', 'junior 是角色信息，文中没有给出工作年限。'),
            input('d12r4', 'Complete with ONE word: A realistic image is not necessarily reliable _____.', 'evidence', '结尾提醒 realistic 不等于有可靠 evidence，复习上一课的不可数名词。')
          ]
        },
        listening: {
          title: 'Sharing a digital prototype',
          transcript: 'Before you send the prototype to the client, please check three details. The model should show the revised table position, but the chair colour should remain grey for now. We have not approved a final colour. Next, remove the client’s phone number from the title page. Protecting privacy is important even when a file is sent only for feedback. Finally, label the daylight images as simulations. They were produced for a summer afternoon and do not show conditions throughout the year. The file should be sent by four tomorrow, rather than by the end of today. This gives us time to check the measurements again. The prototype is useful for discussing ideas, but we must be clear about its limitations and avoid presenting uncertain information as fact.',
          questions: [
            choice('d12l1', 'Which colour should the chairs be in the model?', ['Blue', 'Brown', 'Grey', 'White'], 'Grey', '灰色只是现阶段模型颜色，final colour 尚未批准。'),
            choice('d12l2', 'What information should be removed?', ['The table dimensions', 'The client’s phone number', 'The project title', 'The image date'], 'The client’s phone number', '为了保护隐私，要移除标题页上的客户电话号码。'),
            input('d12l3', 'By what time tomorrow should the file be sent?', '4', 'by four tomorrow，而不是今天下班前。', ['four', '4 pm', '4 p.m.', '16:00', '4:00'])
          ]
        },
        writing: {
          title: '论证工具的价值与局限', prompt: '原创观点段落：用 100–140 个英文单词说明数字模型如何帮助设计师，以及为什么仍需现场核实。使用 can、may 或 must 中至少两个。', minWords: 100,
          model: 'Digital models can help designers explain ideas that are difficult to describe in words. A client may understand a proposed layout more easily by exploring a prototype than by reading a technical drawing. These tools can also simulate daylight and compare different furniture arrangements. However, the results depend on accurate information. If the dimensions are wrong, a convincing image may lead to an unsuitable decision. Designers must therefore check important measurements and explain any limitations. They should also protect the client’s privacy when sharing files. In my view, digital tools are most useful when they support careful professional judgement and are combined with reliable evidence from the site.',
          checklist: ['情态动词后是否使用原形，如 can help？', '是否同时写出价值和局限？', '是否用一个具体例子解释 accurate information 的重要性？', '是否复用了 evidence / feedback / approach 中的一个词？']
        },
        speaking: { title: '一项有用但不完美的工具', prompt: 'Describe a digital tool you use in your work. 介绍一项优势，再说明一项 limitation。', cues: ['What do you use it for?', 'How does it help a client?', 'What can it not do reliably?', 'How do you check its results?'], model: 'I use three-dimensional modelling software to explain layouts to clients. It can help them compare different options before construction begins. However, one limitation is that the image depends on the measurements I enter. I must check important dimensions on site. The tool supports my judgement, but it cannot replace careful checking.' }
      },
      {
        id: 13, title: '把临时变更说清楚', theme: 'Negotiating a design change', focus: 'speaking', subtitle: '回到真实工作场景，用条件句解释成本、范围与取舍。',
        vocabIds: ['w73', 'w74', 'w75', 'w76', 'w77', 'w78'],
        grammar: { title: '第一条件句：解释可能发生的结果', rule: 'If + 一般现在时，主句用 will + 原形，表达未来可能出现的条件和结果。通常不用 If you will ...。', examples: ['If we change the flooring, the cost will increase.', 'If the client approves today, we will place the order tomorrow.', 'If the deadline changes, I will update the schedule.'] },
        reading: {
          title: 'A change after the order',
          text: 'Two weeks before a café renovation was due to finish, the owner asked for different flooring. Most of the original material had already been ordered. Rather than reject the request immediately, the designer asked the owner to clarify the problem. The owner explained that the approved sample looked darker under the new lighting than it had in the showroom.\n\nThe designer identified three options. The team could keep the flooring and adjust the lamps, change only the entrance area, or replace the entire floor. Each option had a different effect on cost and the deadline. Before recommending a solution, the designer asked the supplier for reliable information about returns and delivery dates.\n\nThe owner’s priority was to create a brighter entrance without delaying the opening. After reviewing a small prototype under the actual lighting, both sides agreed on a compromise: they would use lighter material near the door and keep the remaining flooring. The designer recorded the revised scope and additional cost in writing. This helped ensure that the client and contractor understood the same agreement. The conversation succeeded because it began with the reason for the change, not an argument about who was right.',
          questions: [
            choice('d13r1', 'Why did the owner request a flooring change?', ['The supplier had cancelled the order.', 'The sample looked darker under the new lighting.', 'The contractor had damaged the floor.', 'The café needed a larger entrance.'], 'The sample looked darker under the new lighting.', '第一段说明现场新灯光让原先确认的材料显得更暗。'),
            tf('d13r2', 'The owner’s main priority was to replace every part of the floor.', 'False', '真正 priority 是入口更明亮且不推迟开业，不是全部更换。'),
            tf('d13r3', 'The supplier agreed to accept all unused materials without a fee.', 'Not Given', '文章只说询问退货信息，没有给出供应商的具体条件。'),
            input('d13r4', 'Complete with ONE word: The revised _____ and additional cost were recorded in writing.', 'scope', '最后一段明确 recorded the revised scope and additional cost，scope 指工作范围。')
          ]
        },
        listening: {
          title: 'Confirming the agreement',
          transcript: 'Thank you for discussing the flooring options today. I would like to confirm what we agreed. We will change the material in the entrance area only, which is twelve square metres. The rest of the floor will stay as originally planned. The additional material cost is six hundred dollars, and installation will cost another two hundred. This change will not affect the opening date if we approve the order by noon tomorrow. Please reply to my email to confirm the revised scope and cost. If you would like to change the seating area as well, I will need to check a new delivery date before promising the same deadline. Our priority is to make the entrance brighter while keeping the programme realistic. I will also attach the sample photograph taken under the actual lighting.',
          questions: [
            input('d13l1', 'How large is the entrance area? Write a NUMBER in square metres.', '12', '入口面积 twelve square metres。', ['twelve']),
            input('d13l2', 'What is the total additional cost in dollars? Write a NUMBER.', '800', '材料 600 美元加安装 200 美元，总额为 800。', ['$800', 'eight hundred']),
            choice('d13l3', 'What must happen to keep the opening date unchanged?', ['The seating area must be redesigned.', 'The order must be approved by noon tomorrow.', 'The supplier must remove all old material.', 'The client must visit the showroom today.'], 'The order must be approved by noon tomorrow.', '条件句 if we approve ... by noon tomorrow，说明保持日期的前提。')
          ]
        },
        writing: {
          title: '写一段专业的变更说明', prompt: '原创工作场景写作：用 100–140 个英文单词给客户说明入口换材方案、额外成本及确认期限。使用一个 if 条件句。数据采用听力材料中的 12㎡、800 美元、明天中午前批准。', minWords: 100,
          model: 'Thank you for discussing the flooring options with me today. As agreed, we will replace the material in the twelve-square-metre entrance area and keep the remaining flooring. The total additional cost will be eight hundred dollars, including materials and installation. If you approve the order by noon tomorrow, we will be able to keep the planned opening date. Please confirm the revised scope and cost by replying to this email. I have attached a photograph of the sample under the actual lighting. If you also want to change the seating area, I will need to check the delivery schedule before confirming whether the same deadline is possible.',
          checklist: ['金额是否把材料费与安装费相加为 800？', '是否说明只改入口，而不是全地面？', 'if 从句是否使用现在时，主句使用 will？', '是否给出明确下一步：请客户确认？']
        },
        speaking: { title: '客户突然要求改图', prompt: 'Role-play: a client wants to replace flooring that has already been ordered. Explain the situation politely and offer a next step. 先说明事实，再解释条件，最后提出行动。', cues: ['Clarify the reason', 'Explain cost and deadline effects', 'Offer one compromise', 'Ask for confirmation'], model: 'Could you clarify what you would like to change about the flooring? Most of the materials have already been ordered, so there may be an additional cost. If we change the whole floor, I will need to check the delivery date. One possible compromise is to change only the entrance area. I can compare the costs before you decide.' }
      },
      {
        id: 14, title: '把学过的带进新情境', theme: 'A wider perspective', focus: 'writing', subtitle: '两周综合迁移：用新故事串起旧词、时态与设计判断。',
        vocabIds: ['w79', 'w80', 'w81', 'w82', 'w83', 'w84'],
        grammar: { title: '综合运用：过去行动、现在收获、未来条件', rule: '讲故事时用过去时交代行动；用现在完成时说明至今的变化；用 if + 现在时 / will + 原形说明下一步。先保证意思与时态一致，再追求复杂句。', examples: ['I revised the layout after the workshop.', 'The experience has increased my confidence.', 'If I receive more feedback, I will evaluate it carefully.'] },
        reading: {
          title: 'A placement that changed a designer’s questions',
          text: 'Leo joined a short placement at an international design studio. He expected the main benefit to be learning new software. During his first week, however, he spent more time interviewing library users than building digital models. The project involved adapting a vacant shop into an affordable community facility. The team wanted to preserve useful furniture and make the entrance accessible.\n\nAt first, Leo worried that his English would prevent him from contributing. He prepared a short list of questions before each interview and asked people to clarify unfamiliar expressions. His colleagues gave him specific feedback on his notes. Over time, he became more confident about explaining his perspective and checking whether he had understood correctly.\n\nThe final proposal was evaluated by local residents. They praised the flexible seating but questioned the privacy of a consultation area. The team revised the layout rather than treating the first presentation as a finished outcome. Leo returned home with more than a software skill. He had learned to adapt his approach, use evidence and view uncertainty as an opportunity to ask better questions. He still made language mistakes, but those mistakes no longer stopped him from participating.',
          questions: [
            choice('d14r1', 'What did Leo initially expect to gain from the placement?', ['Experience in buying furniture', 'A new software skill', 'A permanent job', 'A qualification in engineering'], 'A new software skill', '首句之后明确 expected ... learning new software。'),
            tf('d14r2', 'Leo’s colleagues gave him specific feedback on his interview notes.', 'True', '第二段直接说明 specific feedback on his notes。'),
            tf('d14r3', 'The placement took place in Canada.', 'Not Given', 'international studio 并没有说明国家，不能推断。'),
            input('d14r4', 'Complete with ONE word: Residents questioned the _____ of a consultation area.', 'privacy', '第三段提出 consultation area 的 privacy 问题，复习第 12 天词汇。')
          ]
        },
        listening: {
          title: 'The end-of-project review',
          transcript: 'Today we will evaluate the library project from three perspectives: visitors, staff and maintenance workers. Visitor feedback was collected last Friday, and the staff interviews are scheduled for next Monday. Please bring your notes to our review meeting on Wednesday morning. We are particularly interested in whether the entrance is accessible and whether the furniture is easy to move. Do not judge the outcome only by the number of visitors. We also need to understand who uses the space and what difficulties they face. One resident has already mentioned privacy in the consultation area, so we should investigate that point. After the review, each designer will suggest one change and explain the evidence behind it. This is an opportunity to reflect on our decisions and adapt the design where necessary.',
          questions: [
            choice('d14l1', 'When is the review meeting?', ['Last Friday', 'Next Monday afternoon', 'Wednesday morning', 'Wednesday evening'], 'Wednesday morning', 'Friday 是收集访客反馈，Monday 是员工访谈，review meeting 在 Wednesday morning。'),
            choice('d14l2', 'What does the speaker say about visitor numbers?', ['They are the only useful measure.', 'They should not be the only measure.', 'They have already doubled.', 'They are too difficult to collect.'], 'They should not be the only measure.', 'Do not judge ... only by the number of visitors，不能只看人数。'),
            input('d14l3', 'How many changes should each designer suggest? Write a NUMBER.', '1', 'each designer will suggest one change，数量为 1。', ['one'])
          ]
        },
        writing: {
          title: '两周回顾：进步需要什么证据？', prompt: '原创反思段落：用 100–150 个英文单词说明你这两周改善了什么、还需练什么、接下来会如何调整。至少使用 3 个已学词，并分别写一个过去时、现在完成时和 if 条件句。不要声称未经测评的 IELTS 分数。', minWords: 100,
          model: 'During the past two weeks, I practised explaining design decisions in English. I revised several sentences about client requests and learned to distinguish completed past events from experience that continues to the present. This practice has increased my confidence, especially when I explain the possible impact of a design change. However, I still need to improve my listening when speakers correct dates or quantities. I will evaluate my progress by reviewing mistakes and comparing recordings on similar topics. If I continue to confuse a grammar pattern, I will practise it in a different context. My next priority is to use familiar vocabulary more accurately, rather than simply memorise longer lists of new words.',
          checklist: ['是否用具体行为支持“我进步了”，而非只写感觉？', '是否正确区分过去时与现在完成时？', 'if 从句是否避免 will？', '是否明确一个下一阶段 priority？']
        },
        speaking: { title: '用英语介绍你的职业目标', prompt: 'Why do you want to work abroad, and how are you preparing? 说 90–120 秒，重新回答第一天的话题，但加入新的例子。', cues: ['Your design experience', 'One opportunity you hope to gain', 'A language challenge', 'Evidence of progress and your next priority'], model: 'I have worked in interior design for about four years, and I would like to gain a wider perspective by working with people from different backgrounds. My main challenge is explaining ideas confidently in English. I have started practising client conversations and reflecting on my mistakes. If I keep using new language in realistic situations, I will be better prepared to contribute to an international team.' }
      }
    ],
    grammar: [
      choice('gb01', 'The building _____ vacant since 2021.', ['is', 'has been', 'was being', 'have been'], 'has been', 'since + 过去起点，表示状态持续到现在；building 单数，使用 has been。'),
      choice('gb02', 'The team _____ the site last Tuesday.', ['has visited', 'visit', 'visited', 'visits'], 'visited', 'last Tuesday 是明确过去时间，一般过去时 visited。'),
      input('gb03', 'Fill in ONE word: The studio has worked here _____ six years.', 'for', 'for 接时间长度；since 接开始时间。'),
      choice('gb04', 'Twenty chairs _____ last month.', ['were repaired', 'was repaired', 'are repairing', 'has repaired'], 'were repaired', 'chairs 为复数，last month 是过去，被动语态用 were + repaired。'),
      choice('gb05', 'The new bus service is _____ than a taxi.', ['more cheaper', 'cheapest', 'cheaper', 'cheaply'], 'cheaper', '比较级 cheaper，不要重复叠加 more。'),
      choice('gb06', 'Which sentence is correct?', ['The route is more accessible than before.', 'The route is accessibler than before.', 'The route is more accessibler than before.', 'The route is most accessible than before.'], 'The route is more accessible than before.', 'accessible 的比较级用 more accessible，than 引出比较对象。'),
      choice('gb07', 'My tutor gave me _____.', ['three feedbacks', 'a useful feedback', 'some useful feedback', 'many feedback'], 'some useful feedback', 'feedback 通常不可数，可以用 some useful feedback。'),
      input('gb08', 'Use the correct form of evidence: We need more _____ before deciding.', 'evidence', 'evidence 为不可数名词，不能写 evidences。'),
      choice('gb09', 'The software can _____ daylight.', ['simulates', 'to simulate', 'simulate', 'simulated'], 'simulate', 'can 后用动词原形，不加 to，也不加 -s。'),
      choice('gb10', 'We must _____ the client’s privacy.', ['protect', 'protects', 'to protect', 'protected'], 'protect', 'must 后接原形 protect。'),
      choice('gb11', 'If we change the material, the cost _____.', ['will increase', 'increase', 'increased', 'has increase'], 'will increase', '第一条件句：if + 现在时，主句 will + 原形。'),
      input('gb12', 'Fill in ONE word: If the client _____ today, we will order tomorrow. (approve)', 'approves', '条件从句用一般现在时；the client 为单数，approve 加 -s。'),
      choice('gb13', 'Most of the materials _____ already been ordered.', ['has', 'have', 'is', 'was'], 'have', 'materials 为复数，使用 have。have been ordered 是现在完成时的被动语态，表示材料已经被订购。'),
      input('gb14', '按提示填入两个英文单词：This material is _____ than the first sample.（更耐用：durable）', 'more durable', 'durable 的比较级是 more durable；不能写 more durabler。than 后面接比较对象。'),
      choice('gb15', 'The experience has _____ my confidence.', ['increase', 'increasing', 'increased', 'increases'], 'increased', '现在完成时 have/has + 过去分词；increase 的过去分词是 increased。'),
      choice('gb16', 'Choose the sentence with a clear condition and result.', ['If I will receive feedback, I revise the plan.', 'If I receive feedback, I will revise the plan.', 'If I received feedback tomorrow, I will revised the plan.', 'If I receives feedback, I will revise the plan.'], 'If I receive feedback, I will revise the plan.', 'if 从句用现在时 receive，主句用 will revise，主语 I 不加 -s。')
    ]
  };
}());
