window.CONTENT_A = {
  days: [
    {
      id: 1,
      title: '介绍你的设计工作',
      theme: 'My design journey',
      focus: 'speaking',
      subtitle: '用清楚的句子介绍职业、经验和学习目标。',
      grammar: {
        title: '职业介绍与持续到现在的经验',
        rule: '职业前通常用 a/an；interior 以元音音素开头，所以说 an interior designer。描述持续到现在的经历，用 have/has + 过去分词 + for + 一段时间。',
        examples: ['I am an interior designer.', 'I have worked in design for about four years.', 'My work involves communicating with clients.']
      },
      reading: {
        title: 'A designer finds her voice',
        text: `Maya is an interior designer with four years of experience in a small studio. Most of her projects are in the United States, although she lives in another country. Her daily work includes preparing drawings, choosing materials, and communicating with clients online. She enjoys turning an unclear idea into a space that people can use comfortably.

At first, Maya believed that good drawings could explain everything. During a meeting about a family apartment, however, a client asked why she had moved the dining table away from the window. Maya understood her own decision, but she found it difficult to explain the reason in English. The new position created a clearer route through the room. Her silence made the decision seem less professional than it was.

After that meeting, Maya started a small learning habit. Each evening, she described one design decision aloud and recorded herself. She did not try to use impressive words. Instead, she checked whether her explanation included a reason and an example. Her aim was to improve communication, not to change her design style.`,
        questions: [
          { id: 'd1r1', type: 'choice', prompt: 'What does Maya mainly want to improve?', options: ['Her communication in English', 'Her drawing speed', 'Her ability to move furniture', 'Her design style'], answer: 'Her communication in English', explanation: '结尾说明她的目标是改善沟通，而不是改变设计风格。' },
          { id: 'd1r2', type: 'choice', prompt: 'Why did Maya move the dining table?', options: ['To create a clearer route through the room', 'To make it closer to the window', 'To hide a damaged wall', 'To fit a larger dining table'], answer: 'To create a clearer route through the room', explanation: '第二段明确说，新位置让室内通行路线更清晰。' },
          { id: 'd1r3', type: 'input', prompt: 'Complete with ONE word: Maya described one design decision _____ each evening.', answer: 'aloud', accepted: ['aloud'], explanation: '原文为 described one design decision aloud，表示大声说出来。' },
          { id: 'd1r4', type: 'choice', prompt: 'What did Maya check in each explanation?', options: ['A reason and an example', 'A long list of technical words', 'The price of every object', 'A new design style'], answer: 'A reason and an example', explanation: '最后一段说明她检查解释是否包含理由和例子。' }
        ]
      },
      listening: {
        title: 'A short introduction at a studio',
        transcript: `Hello, my name is Alex, and I am an interior designer. I have worked in this field for about four years. Most of my projects are in the United States, so I often meet clients online in the evening. I enjoy planning spaces and finding practical ways to make a small room feel comfortable. My biggest challenge is explaining a design decision quickly when a client asks an unexpected question. I sometimes know the answer but need extra time to find the right English words. This year, I want to improve my speaking and listening. My first step is simple: I will practise explaining one project for ten minutes every day. I hope this will help me communicate more clearly and feel more professional during meetings.`,
        questions: [
          { id: 'd1l1', type: 'input', prompt: 'Complete with ONE word: Alex has worked in design for about _____ years.', answer: 'four', accepted: ['four', '4'], explanation: '录音说 for about four years。数字 4 也可。' },
          { id: 'd1l2', type: 'choice', prompt: 'When does Alex often meet clients?', options: ['In the evening', 'At lunchtime', 'Before breakfast', 'Only on Sundays'], answer: 'In the evening', explanation: '客户在美国，因此 Alex 经常在晚上开线上会议。' },
          { id: 'd1l3', type: 'choice', prompt: 'What will Alex practise every day?', options: ['Explaining one project', 'Writing a full essay', 'Drawing ten rooms', 'Memorising a speech'], answer: 'Explaining one project', explanation: '最后的学习计划是每天花十分钟解释一个项目。' }
        ]
      },
      writing: {
        title: 'Write a professional introduction',
        prompt: '用 80–110 个英文单词介绍你自己：职业、工作年限、主要项目、一个英语沟通难点，以及你的学习目标。用真实信息替换范文中的细节。',
        minWords: 80,
        model: `I am an interior designer, and I have worked in the field for about four years. Most of my projects are in the United States. I enjoy developing layouts and choosing materials that make a space both useful and comfortable. One challenge is explaining my ideas clearly in English, especially when clients ask unexpected questions. I want to improve my communication so that I can discuss design decisions with more confidence. To begin, I plan to study for an hour each day and practise describing one project aloud.`,
        checklist: ['职业前是否用了 an interior designer？', '工作年限是否用了 have worked ... for ...？', '是否写清一个具体困难和一个可执行目标？', '检查每句话是否有主语和完整动词。']
      },
      speaking: {
        title: 'Tell me about your work',
        prompt: '准备 30 秒，然后说 45–60 秒。先自然介绍，再给一个具体例子；录音后重说一次。',
        cues: ['What do you do?', 'How long have you worked in this field?', 'What do you enjoy about your work?', 'What would you like to improve?'],
        model: `I am an interior designer, and I have worked in design for about four years. Most of my projects are in the United States. I particularly enjoy solving layout problems. For example, changing the position of a table can make a small apartment easier to use. I would like to improve my English because I need to explain these decisions to clients. Sometimes I have a clear idea but cannot express it quickly. That is why I am practising a little every day.`
      },
      vocabIds: ['w01', 'w02', 'w03', 'w04', 'w05', 'w06']
    },
    {
      id: 2,
      title: '弄清客户真正的需求',
      theme: 'Understanding a client brief',
      focus: 'listening',
      subtitle: '听出需求、预算与优先级，用完整问句确认信息。',
      grammar: {
        title: 'want、wants、wanted 与 decide to',
        rule: '一般现在时中，he/she/the client 后用 wants；过去的需求用 wanted。用了 did 后，主要动词恢复原形：Did she want ...? decide 后接 to + 动词原形。',
        examples: ['The client wants a quiet workspace.', 'Did she want a larger desk?', 'Yesterday, we decided to keep the existing floor.']
      },
      reading: {
        title: 'The room behind the pictures',
        text: `Jon received a collection of attractive office pictures from a new client, Elena. The pictures showed large desks, dark walls, and dramatic lighting. He could have started drawing immediately, but his experience had taught him to ask about daily activities first. A picture can communicate a mood without explaining a practical requirement.

During their first discussion, Elena said that she worked from home three days a week. She wanted a place for video meetings, but her daughter also used the room for homework. The room therefore needed to serve two people at different times. Elena's first priority was a clear background for calls, not a larger desk. She also wanted to keep an old chair because it was comfortable.

Jon prepared a short brief after the meeting. It listed the room's users, the budget, and three important needs. Instead of sending another set of pictures, he asked Elena to confirm these points. She corrected one detail: her daughter needed storage for art supplies as well as books. This small correction changed the design before any expensive work began.`,
        questions: [
          { id: 'd2r1', type: 'choice', prompt: 'Why did Jon ask about daily activities?', options: ['Pictures did not explain all the practical needs', 'He disliked all the reference pictures', 'He wanted to increase the budget', 'The client had already approved a drawing'], answer: 'Pictures did not explain all the practical needs', explanation: '第一段指出参考图可以表达氛围，却不能充分说明实际使用需求。' },
          { id: 'd2r2', type: 'choice', prompt: 'What was Elena’s first priority?', options: ['A clear background for video calls', 'A larger desk', 'Dramatic lighting', 'Dark walls'], answer: 'A clear background for video calls', explanation: '第二段直接写出 first priority was a clear background for calls。' },
          { id: 'd2r3', type: 'input', prompt: 'Complete with ONE word: Elena wanted to keep her old _____.', answer: 'chair', accepted: ['chair'], explanation: '她想保留旧椅子，因为坐着很舒服。' },
          { id: 'd2r4', type: 'choice', prompt: 'What additional storage did Elena mention?', options: ['Storage for art supplies', 'Storage for office chairs', 'Storage for lighting equipment', 'Storage for clothes'], answer: 'Storage for art supplies', explanation: '最后一段补充：女儿除书籍之外，还需要存放美术用品的地方。' }
        ]
      },
      listening: {
        title: 'Confirming a home office brief',
        transcript: `Designer: Before I prepare the brief, could I confirm your priorities?
Client: Of course. I want a quiet corner for online meetings. A big desk would be nice, but it is not essential.
Designer: And is the budget still three thousand dollars?
Client: Yes, that includes the desk, chair, lighting, and storage. Please keep the existing floor.
Designer: Last week, you wanted two new chairs. Is that still correct?
Client: Actually, we decided to buy just one. My current chair is comfortable enough for the second workspace.
Designer: Understood. Is there any other requirement?
Client: We need a low shelf for my son's books. He should be able to reach them himself.
Designer: I will add that and send you the updated brief tomorrow morning.`,
        questions: [
          { id: 'd2l1', type: 'choice', prompt: 'Which feature is essential to the client?', options: ['A quiet corner for online meetings', 'A very big desk', 'A new floor', 'Two new chairs'], answer: 'A quiet corner for online meetings', explanation: '客户首先强调需要安静的线上会议区域；大桌子只是可有可无。' },
          { id: 'd2l2', type: 'input', prompt: 'Complete with ONE word: The client now plans to buy _____ new chair.', answer: 'one', accepted: ['one', '1'], explanation: '注意信息变化：上周想买两把，现在决定只买一把。' },
          { id: 'd2l3', type: 'choice', prompt: 'Why does the shelf need to be low?', options: ['So the child can reach the books', 'So it can fit under a desk', 'So the floor stays visible', 'So it costs less to deliver'], answer: 'So the child can reach the books', explanation: '客户希望儿子能够自己够到书架上的书。' }
        ]
      },
      writing: {
        title: 'Send a brief confirmation',
        prompt: '用 80–110 个英文单词给客户写一段确认信息，包含空间用途、两项需求、预算和一个待确认问题。此练习关注表达清楚，不是完整考试写作任务。',
        minWords: 80,
        model: `Thank you for discussing your home office with me today. My understanding is that your main priority is a quiet place for video meetings. You also want storage that your son can use easily. We have a budget of three thousand dollars for the new furniture and lighting, and we will keep the existing floor. You decided to buy one new chair instead of two. Could you please confirm whether the low shelf should also hold art supplies? Once I have this information, I can prepare the first layout.`,
        checklist: ['客户现在的需求是否用 wants，或直接对客户用 you want？', 'decided 后是否接 to + 动词原形？', '是否区分了必须满足的需求和可选愿望？', '是否提出一个明确的确认问题？']
      },
      speaking: {
        title: 'Ask useful follow-up questions',
        prompt: '假设你正和居家办公的客户沟通。先复述需求，再提出两个追问。练习 45–60 秒。',
        cues: ['Summarise the main priority.', 'Ask how often the room is used.', 'Ask about the budget.', 'Confirm one decision.'],
        model: `If I understand correctly, your main priority is a quiet space for online meetings. You also want your daughter to use the room for homework. Could you tell me how often you both need the room at the same time? That will help me decide whether we need two separate work areas. I would also like to confirm the budget. Does it include lighting and storage? Finally, you decided to keep the existing chair. Is that still correct?`
      },
      vocabIds: ['w07', 'w08', 'w09', 'w10', 'w11', 'w12']
    },
    {
      id: 3,
      title: '比较材料，解释选择',
      theme: 'Choosing materials for real life',
      focus: 'reading',
      subtitle: '从外观走向使用需求，练习说明材料选择的理由。',
      grammar: {
        title: 'have/has 与 since/for',
        rule: 'I/you/we/they 用 have，he/she/单数名词用 has。现在完成时中，for 后接一段时间，since 后接起点。对比：for four years；since 2022。',
        examples: ['The client has chosen a warmer material.', 'We have used this supplier for three years.', 'She has worked with the studio since 2022.']
      },
      reading: {
        title: 'A beautiful surface is only the beginning',
        text: `A small café asked designer Noor to replace its worn tables. The owner wanted a warmer appearance, but the main requirement was simple maintenance. Staff cleaned every table many times a day, and customers sometimes moved chairs against the edges. Noor knew that a material had to suit this routine, not just look attractive in a photograph.

She brought three samples to the café: a pale timber, a patterned laminate, and a dark stone. Each had a different texture and price. The stone looked impressive but was too expensive for the budget. The timber felt warm, although the supplier's care instructions required more attention than the owner wanted to give. The laminate offered a practical balance for this particular project.

Before making a final decision, Noor asked the owner to examine the sample under the café's own lighting. Its colour looked slightly different from the showroom. They also checked the supplier's cleaning guidance and edge details. They asked whether the finish was durable enough for frequent use. The owner chose the laminate after this discussion. For Noor, a professional recommendation meant connecting appearance, cost, and everyday use rather than naming one material as the best choice for every space.`,
        questions: [
          { id: 'd3r1', type: 'choice', prompt: 'What was the owner’s main requirement?', options: ['Simple maintenance', 'The darkest possible colour', 'The heaviest tables', 'A photograph for an advertisement'], answer: 'Simple maintenance', explanation: '第一段强调虽然想要更温暖的外观，主要需求仍是容易维护。' },
          { id: 'd3r2', type: 'choice', prompt: 'Why was the stone rejected?', options: ['It exceeded the budget', 'Its colour was too pale', 'It could not be cleaned', 'The supplier had no samples'], answer: 'It exceeded the budget', explanation: '文中只说明石材对该项目来说太贵，不应推断其清洁性能。' },
          { id: 'd3r3', type: 'input', prompt: 'Complete with ONE word: Noor checked the sample under the café’s own _____.', answer: 'lighting', accepted: ['lighting'], explanation: '材料在不同灯光下呈现不同颜色，因此需要在实际空间光线下查看。' },
          { id: 'd3r4', type: 'choice', prompt: 'What is the main message of the passage?', options: ['Material choices should fit the specific project', 'Laminate is the best material for every café', 'Appearance is never important', 'The cheapest sample is always the right choice'], answer: 'Material choices should fit the specific project', explanation: '结尾强调应联系外观、成本和日常使用，而不是给所有空间选同一种材料。' }
        ]
      },
      listening: {
        title: 'A call to the material supplier',
        transcript: `Hello, this is Noor from North Studio. We have worked with your company for three years, and I am calling about a table surface for a café project. The client has chosen the light grey laminate after looking at three samples. Before we confirm the order, I need to check two details. First, could you send the cleaning instructions? Easy maintenance is the client's priority. Second, is the rounded edge available in the same colour? The café has a narrow route between its tables, so the edge detail matters. We need twelve tabletops, each sixty centimetres wide. The owner has asked for delivery before the end of next month. Please email the price and delivery date rather than confirming them by phone.`,
        questions: [
          { id: 'd3l1', type: 'input', prompt: 'Complete with ONE word: The client has chosen the light _____ laminate.', answer: 'grey', accepted: ['grey', 'gray'], explanation: '录音明确说 light grey laminate；英式 grey 和美式 gray 都可。' },
          { id: 'd3l2', type: 'choice', prompt: 'What does Noor ask the supplier to send?', options: ['Cleaning instructions', 'A café menu', 'Three new design drawings', 'A different budget'], answer: 'Cleaning instructions', explanation: '她先询问清洁说明，以核实材料是否符合易维护的要求。' },
          { id: 'd3l3', type: 'choice', prompt: 'How should the supplier confirm the price and delivery date?', options: ['By email', 'By phone', 'At the café', 'Through the building manager'], answer: 'By email', explanation: '结尾要求用邮件提供价格与交货日期，而不是电话确认。' }
        ]
      },
      writing: {
        title: 'Recommend a material',
        prompt: '用 80–110 个英文单词，为一个咖啡馆或住宅项目推荐材料。给出两个理由，承认一个限制，并说明下单前要检查什么。',
        minWords: 80,
        model: `For this café, I recommend the light grey laminate shown in the sample. It fits the client's budget, and the supplier's care guidance suggests that it can be maintained with a straightforward cleaning routine. Its colour also works well with the existing chairs. However, the sample looks slightly different under the café's lighting, so we should check a larger piece before ordering. I would also confirm the edge detail and delivery date. This choice is suitable for this project's daily use, although another material might be better for a different space.`,
        checklist: ['是否给出了适合该项目的具体理由？', '是否写出一个限制，避免绝对化结论？', '单数主语后是否用了 has，而复数主语后用了 have？', '如描述持续时间，检查 since 和 for。']
      },
      speaking: {
        title: 'Describe a material you like using',
        prompt: '说 60 秒，介绍一种你熟悉的材料。说明外观、使用场景和一个需要注意的问题。',
        cues: ['What does it look and feel like?', 'Where have you used it?', 'Why did it suit that project?', 'What should a client check?'],
        model: `One material I like working with is timber because its texture can make a room feel warm. I have used it in several residential projects, especially for shelving and small furniture pieces. In one apartment, it helped connect the new furniture with the existing floor. However, I would not recommend it without discussing maintenance. The finish and location matter, and different products need different care. I usually show the client a sample in the actual room before we confirm the choice.`
      },
      vocabIds: ['w13', 'w14', 'w15', 'w16', 'w17', 'w18']
    },
    {
      id: 4,
      title: '面对突然改变的方案',
      theme: 'Responding to an unexpected change',
      focus: 'writing',
      subtitle: '先确认变化，再解释影响，最后给出下一步。',
      grammar: {
        title: 'knowledge、advice、furniture 不可数',
        rule: 'knowledge、advice、furniture 通常是不可数名词，不直接加 s，也不直接用 a/an。可以说 some advice、a piece of furniture、a lot of knowledge。不可数名词作主语通常用单数动词。',
        examples: ['This advice is useful.', 'We need two pieces of furniture.', 'She has a lot of knowledge about materials.']
      },
      reading: {
        title: 'A change on Thursday afternoon',
        text: `On Thursday afternoon, Leo received an unexpected message from a residential client. The approved living room plan included a large sofa, but the client now wanted a small desk beside the window. The drawings were due to go to the contractor on Friday. Leo's first reaction was frustration because he had already revised the layout twice.

Instead of sending an immediate answer, he checked the brief and asked one question: would the desk be used daily or only occasionally? The client explained that a new job required working from home twice a week. This was a new practical need, not simply a change in taste.

Leo developed two possible solutions. The first kept the sofa and added a compact desk, leaving a narrower route through the room. The second used a smaller sofa and created a more comfortable workspace. He explained the difference with simple sketches. He also made it clear that changing the sofa would require a new supplier check and might affect the deadline.

The client chose the second option. Leo confirmed the decision by email and revised the schedule. Being flexible did not mean accepting every request without discussion. It meant helping the client understand the consequences of a new decision.`,
        questions: [
          { id: 'd4r1', type: 'choice', prompt: 'What change did the client request?', options: ['A desk beside the window', 'A larger living room window', 'A desk instead of the kitchen', 'A later move-in date'], answer: 'A desk beside the window', explanation: '第一段说明客户想在窗边增加一张小书桌。' },
          { id: 'd4r2', type: 'choice', prompt: 'Why did the client need the desk?', options: ['A new job involved working from home', 'The existing sofa had arrived damaged', 'The contractor requested a desk', 'The client disliked every approved colour'], answer: 'A new job involved working from home', explanation: '第二段补充，新工作需要每周两天居家办公。' },
          { id: 'd4r3', type: 'input', prompt: 'Complete with ONE word: Replacing the sofa might affect the _____.', answer: 'deadline', accepted: ['deadline'], explanation: '第三段明确提示更换沙发需要重新核实供应商信息，可能影响截止时间。' },
          { id: 'd4r4', type: 'choice', prompt: 'How did Leo respond professionally?', options: ['He explained options and their consequences', 'He accepted the request without checking anything', 'He refused to discuss the new need', 'He sent the old drawings without telling the client'], answer: 'He explained options and their consequences', explanation: '文章重点是先澄清需求，再解释方案、影响和时间变化。' }
        ]
      },
      listening: {
        title: 'Clarifying a last-minute request',
        transcript: `Client: Could we move the wardrobe to the opposite wall? I would like more space beside the bed.
Designer: We can explore that. Before I revise the plan, could I clarify whether the wardrobe size must stay the same?
Client: Yes. We still need the same amount of storage.
Designer: Understood. I will check the door opening and the route to the window. There may be a solution, but I cannot confirm it until I check the dimensions.
Client: Will that delay the drawings?
Designer: I can send a sketch tomorrow. If you approve it by Monday morning, I can finish the revised drawings on Tuesday instead of Monday.
Client: That works for me. Please show the existing furniture in the sketch too.
Designer: Certainly. I will include it.`,
        questions: [
          { id: 'd4l1', type: 'choice', prompt: 'What must stay the same?', options: ['The amount of storage', 'The wardrobe position', 'The drawing deadline', 'The space beside the bed'], answer: 'The amount of storage', explanation: '客户同意调整位置，但强调仍需要相同的储物量。' },
          { id: 'd4l2', type: 'input', prompt: 'Complete with ONE word: The designer needs to check the _____ before confirming a solution.', answer: 'dimensions', accepted: ['dimensions'], explanation: '设计师说必须先检查尺寸，才能确认方案可行。' },
          { id: 'd4l3', type: 'choice', prompt: 'If the sketch is approved on Monday morning, when can the revised drawings be finished?', options: ['On Tuesday', 'On Monday morning', 'On Friday', 'In two weeks'], answer: 'On Tuesday', explanation: '注意旧日期和新日期的区别：由周一改为周二。' }
        ]
      },
      writing: {
        title: 'Explain the impact of a change',
        prompt: '客户突然想移动衣柜。用 80–110 个英文单词回复：确认需求，说明两项需要检查的内容，给出下一步和预计时间。不要在没有证据时承诺一定可行。',
        minWords: 80,
        model: `Thank you for explaining the new requirement. I understand that you would like to move the wardrobe while keeping the same amount of storage. Before I revise the drawings, I need to check the door opening and the space around the bed. I will also review the dimensions of the existing furniture. I can send you a sketch tomorrow so that we can discuss the options. If you approve a solution by Monday morning, I expect to complete the revised drawings on Tuesday. Please let me know if this schedule works for you.`,
        checklist: ['是否先准确复述了客户的新需求？', 'furniture 是否没有加 s？', '是否说明需要核查的内容，而非直接保证结果？', '是否明确下一步、日期和确认条件？']
      },
      speaking: {
        title: 'Think on your feet',
        prompt: '模拟客户说：“I want to change the layout.” 用 45–60 秒回应：确认原因、询问信息、解释下一步。',
        cues: ['Acknowledge the request.', 'Ask what problem the change should solve.', 'Mention one detail you must check.', 'Explain when you can respond.'],
        model: `Of course, we can look at the layout again. Could you tell me what is not working for you? For example, do you need more storage, or is the route through the room too narrow? Once I understand the priority, I can suggest a practical solution. I will need to check the dimensions and the existing furniture before confirming any changes. I can prepare a simple sketch tomorrow, and then we can discuss how the new layout might affect the budget and deadline.`
      },
      vocabIds: ['w19', 'w20', 'w21', 'w22', 'w23', 'w24']
    },
    {
      id: 5,
      title: '把反馈变成清楚的解释',
      theme: 'Learning from useful feedback',
      focus: 'speaking',
      subtitle: '用理由和例子支撑观点，区分“能力下降”和“发现成长空间”。',
      grammar: {
        title: 'in 与 on：地点和工作内容',
        rule: '城市、国家和领域常用 in：in New York、in the US、in design。描述正在做某个项目用 work on a project。描述“在星期一”用 on Monday。介词要和具体搭配一起记。',
        examples: ['Most of my projects are in the US.', 'I am working on a small apartment.', 'We will discuss the feedback on Monday.']
      },
      reading: {
        title: 'What the criticism actually meant',
        text: `During a studio review, Anna showed a design for a shared reception area. A senior designer said that her presentation looked polished but did not explain how visitors would find the meeting rooms. Anna felt disappointed. She had spent several evenings choosing images and preparing the slides, and she briefly wondered whether she was becoming less professional.

Later, she looked at the feedback more carefully. The criticism concerned one missing explanation, not her whole ability. She had knowledge of the layout, but the audience could not see the reasoning in her head. She decided to add a simple visitor route and explain the signs at each turning point.

In the next presentation, Anna began with a practical example. She described a visitor entering the building for the first time and following the route to a meeting room. She used the plan as evidence for each decision. Her colleagues asked fewer basic questions because the sequence was easier to follow.

Anna still had things to improve, but she felt more confident. She began to treat specific feedback as information she could use. Recognising a gap in her work did not necessarily mean that her ability had declined. Sometimes it meant that she could now notice details she had missed before.`,
        questions: [
          { id: 'd5r1', type: 'choice', prompt: 'What was missing from Anna’s first presentation?', options: ['An explanation of how visitors would find the rooms', 'Images of the reception area', 'A finished set of slides', 'The name of the senior designer'], answer: 'An explanation of how visitors would find the rooms', explanation: '第一段指出缺少访客如何找到会议室的说明，不是视觉内容不够完整。' },
          { id: 'd5r2', type: 'choice', prompt: 'How did Anna’s understanding of the feedback change?', options: ['She recognised it concerned a specific missing explanation', 'She decided that all her design knowledge was useless', 'She concluded the audience did not need explanations', 'She stopped asking colleagues for their opinions'], answer: 'She recognised it concerned a specific missing explanation', explanation: '第二段区分了具体问题和整体能力，避免过度概括。' },
          { id: 'd5r3', type: 'input', prompt: 'Complete with ONE word: Anna used the plan as _____ for her decisions.', answer: 'evidence', accepted: ['evidence'], explanation: '第三段原文为 used the plan as evidence。' },
          { id: 'd5r4', type: 'choice', prompt: 'What does the final paragraph suggest?', options: ['Noticing weaknesses can reflect greater awareness', 'Experience always makes designers less capable', 'Specific feedback should be ignored', 'Confidence removes the need to improve'], answer: 'Noticing weaknesses can reflect greater awareness', explanation: '最后一段说明发现问题有时意味着观察能力提升，并不必然代表能力退步。' }
        ]
      },
      listening: {
        title: 'Feedback after a practice presentation',
        transcript: `Your explanation was much clearer this time, especially when you described the client's daily routine. I have two suggestions for the next version. First, show the layout before the material samples. That will help the client understand the overall approach before looking at smaller details. Second, replace the phrase “a better design” with a specific benefit. For example, explain that the revised position leaves enough space for someone to walk behind the chair. You do not need more technical words. You need evidence that connects the decision to the client's requirement. Please practise the introduction again on Monday. Keep it under one minute, and include one clear reason for your main decision. Your knowledge is already useful; the next step is making it easier for others to follow.`,
        questions: [
          { id: 'd5l1', type: 'choice', prompt: 'What should be shown first?', options: ['The layout', 'The material samples', 'The invoice', 'The final photograph'], answer: 'The layout', explanation: '第一条建议是先展示平面布局，再展示材料样本。' },
          { id: 'd5l2', type: 'choice', prompt: 'What should replace “a better design”?', options: ['A specific benefit', 'A longer technical phrase', 'A higher price', 'A list of famous designers'], answer: 'A specific benefit', explanation: '第二条建议要求用具体好处代替空泛的评价。' },
          { id: 'd5l3', type: 'input', prompt: 'Complete with ONE word: The next introduction should be under one _____.', answer: 'minute', accepted: ['minute'], explanation: '录音结尾要求介绍控制在一分钟以内。' }
        ]
      },
      writing: {
        title: 'Explain what you learned from feedback',
        prompt: '用 80–110 个英文单词描述一次有帮助的反馈。写出原来的问题、你做出的修改和你学到的内容；没有真实例子时可明确使用假设场景。',
        minWords: 80,
        model: `In a recent practice presentation, a colleague said that my slides looked clear but my main recommendation needed a stronger explanation. I first felt disappointed because I had spent a lot of time on the project. After reviewing the feedback, I realised that the problem was specific. I had shown the material without explaining how it suited the client's daily routine. I revised the presentation and added a practical example. This experience reminded me that professional knowledge is more useful when I can communicate the reasons behind my decisions clearly.`,
        checklist: ['是否写清一个具体反馈，而非只说 it was useful？', 'work on a project、in design 等搭配是否正确？', 'knowledge 是否保持不可数形式？', '是否区分了事实、感受和后来得出的理解？']
      },
      speaking: {
        title: 'Describe advice that helped you',
        prompt: '说 60–90 秒，介绍一条帮助你改进工作的建议。避免背诵范文；用你的经历替换细节。',
        cues: ['Who gave you the advice?', 'What was the advice?', 'How did you use it?', 'Why was it useful?'],
        model: `A colleague once advised me to explain the client's problem before showing my design solution. At that time, I usually began presentations with attractive images. The advice helped me realise that clients needed to understand the reason behind the proposal. In my next presentation, I described the storage problem first and then showed how the new layout addressed it. The discussion became more focused. I found this advice useful because it changed the order of my explanation without requiring me to redesign the whole project.`
      },
      vocabIds: ['w25', 'w26', 'w27', 'w28', 'w29', 'w30']
    },
    {
      id: 6,
      title: '从室内空间谈到社区',
      theme: 'Design and everyday communities',
      focus: 'reading',
      subtitle: '把工作经验扩展成一般观点，练习比较和解释影响。',
      grammar: {
        title: '过去的提问：did 后用原形',
        rule: '问过去发生的动作，用 Did + 主语 + 动词原形。否定用 did not/didn’t + 动词原形。did 已经表达过去，所以不要再写 wanted、changed 或 decided。',
        examples: ['Did residents want a larger meeting room?', 'They did not change the entrance.', 'Why did the team decide to keep the shelves?']
      },
      reading: {
        title: 'A neighbourhood room gets a new purpose',
        text: `A neighbourhood group wanted to turn an unused shop into a small community room. Members imagined book exchanges, evening classes, and informal meetings. Their budget was limited, so the design team began by checking what could remain. Several shelves were still in good condition, and the existing floor needed cleaning rather than replacement.

At the first meeting, residents discussed access as well as appearance. One person explained that the entrance was difficult to notice from the street. Another wanted a clear route between the front door and the seating area. These comments changed the team's priorities. Attractive furniture would have little benefit if people found the space difficult to enter or use.

The team proposed reusing the shelves, improving the entrance sign, and choosing movable tables. This flexible arrangement could support different activities without filling the room with extra furniture. An efficient layout would make good use of the limited space. Keeping useful items would also reduce the amount of material discarded during the renovation.

The group described its approach as more sustainable, but it did not claim to have solved every environmental problem. Members still needed to compare product information and future maintenance needs. Their first step was to make careful use of the resources they already had.`,
        questions: [
          { id: 'd6r1', type: 'choice', prompt: 'Why did the team first check what could remain?', options: ['The budget was limited', 'The shop was already a library', 'Residents did not want to meet', 'All the furniture was new'], answer: 'The budget was limited', explanation: '第一段把预算有限与检查可保留物品直接联系起来。' },
          { id: 'd6r2', type: 'choice', prompt: 'What concern did residents raise?', options: ['The entrance was difficult to notice', 'The shelves were too expensive to buy', 'The room had too many classes', 'The tables could not be moved outside'], answer: 'The entrance was difficult to notice', explanation: '第二段提到一位居民难以从街上发现入口。' },
          { id: 'd6r3', type: 'input', prompt: 'Complete with ONE word: The team chose _____ tables to support different activities.', answer: 'movable', accepted: ['movable'], explanation: '第三段使用 movable tables，强调可灵活改变布置。' },
          { id: 'd6r4', type: 'choice', prompt: 'How did the group describe its environmental approach?', options: ['As a first step that still needed further checks', 'As a complete solution to every environmental problem', 'As a reason to replace all existing items', 'As a plan that required no future maintenance'], answer: 'As a first step that still needed further checks', explanation: '最后一段保留限制：仍需比较产品信息和维护需求，没有夸大成果。' }
        ]
      },
      listening: {
        title: 'Planning the community room',
        transcript: `Thank you for coming to our design meeting. We reviewed the feedback from twelve residents. Most wanted a flexible room for classes and small events, so we have decided to use tables that can be moved easily. We will keep the existing shelves because they are in good condition. This should reduce the amount of new furniture we need to buy. Our first priority, however, is access. The entrance sign is currently hidden behind a plant, and visitors have told us that the door is difficult to find. We will move the plant and test a clearer sign before ordering a permanent one. Next Saturday, we will arrange the tables and invite residents to try the space. Their comments will help us revise the layout before regular activities begin.`,
        questions: [
          { id: 'd6l1', type: 'input', prompt: 'Complete with ONE word: Feedback came from _____ residents.', answer: 'twelve', accepted: ['twelve', '12'], explanation: '开头说明已查看十二位居民的反馈。' },
          { id: 'd6l2', type: 'choice', prompt: 'Why will the shelves be kept?', options: ['They are in good condition', 'They were delivered yesterday', 'They hide the entrance sign', 'They are too heavy to inspect'], answer: 'They are in good condition', explanation: '保留书架的原因是状态良好，不必另买替代品。' },
          { id: 'd6l3', type: 'choice', prompt: 'What will residents do next Saturday?', options: ['Try the space and comment on the layout', 'Order a permanent entrance sign', 'Remove all the existing shelves', 'Begin a month of regular classes'], answer: 'Try the space and comment on the layout', explanation: '下周六安排试用并收集意见；正式常规活动在之后开始。' }
        ]
      },
      writing: {
        title: 'Develop a paragraph with an example',
        prompt: '用 80–110 个英文单词回答：Why should designers consider how local people use a public space? 写一个明确观点、一个例子和一句解释；这是论证段练习。',
        minWords: 80,
        model: `Designers should consider how local people use a public space because an attractive room is not automatically a useful one. For example, a community centre may need to host classes in the morning and informal meetings in the evening. If the designer only considers one activity, the furniture may limit other uses. Listening to residents can reveal practical requirements, such as clear routes, accessible storage, and movable tables. These details help the space serve more people. Although consultation takes time, it can give the design team evidence for decisions that affect everyday use.`,
        checklist: ['第一句是否直接回答问题？', '是否用一个具体例子展开，而非重复观点？', '如提及过去的调查，did 后是否用了动词原形？', '是否避免 always、everyone 等没有依据的绝对表述？']
      },
      speaking: {
        title: 'Discuss the role of public spaces',
        prompt: '练习较抽象的问题。用“观点—理由—例子—限制”的顺序说 60 秒。',
        cues: ['Why are public spaces important?', 'How can design help different users?', 'Give an example from a neighbourhood.', 'Mention one challenge or limitation.'],
        model: `I think public spaces are important because they give people a place to meet outside their homes or workplaces. Design can make these spaces easier to use by providing clear routes and flexible seating. For example, a neighbourhood room with movable tables can support both classes and informal conversations. However, a designer should not assume that every resident has the same needs. It is useful to ask different users for feedback. The budget may limit some choices, so the team needs to agree on the main priorities.`
      },
      vocabIds: ['w31', 'w32', 'w33', 'w34', 'w35', 'w36']
    },
    {
      id: 7,
      title: '复盘第一周，设定下一步',
      theme: 'Measuring progress without rushing',
      focus: 'writing',
      subtitle: '用证据记录进步，让一小时学习更有针对性。',
      grammar: {
        title: '综合复盘：现在、过去与持续经验',
        rule: '现在的习惯用一般现在时，已完成的过去事件用一般过去时，持续到现在的经历用现在完成时。先判断想表达的时间，再选动词形式。',
        examples: ['I study English for an hour each day.', 'Yesterday, I decided to record my answer again.', 'I have practised speaking every day since Monday.']
      },
      reading: {
        title: 'A useful record of a small week',
        text: `At the end of her first week of English practice, designer Sara wanted to know whether she had made progress. She had studied for an hour each day, but the number of completed exercises did not tell the whole story. She hoped to achieve an IELTS score of 7.5, and she knew that one week of work could not show how long the full journey would take.

Sara compared two recordings of the same introduction. In the first, she paused for a long time before explaining her experience. In the second, she could say that she had worked in design for four years without stopping. She still confused some verb forms, so she wrote down three examples to review.

Next, she reread a paragraph about a client project. The revised version included a clearer reason and fewer repeated words. This was useful evidence, although it was not an official score.

For the following week, Sara chose one challenge: asking clear follow-up questions. She kept short practice sessions for all four skills but gave extra attention to speaking. Her approach was to reflect, make one practical adjustment, and remain consistent. She wanted a routine she could maintain, not a perfect week followed by exhaustion.`,
        questions: [
          { id: 'd7r1', type: 'choice', prompt: 'Why did Sara look beyond the number of completed exercises?', options: ['It did not fully show what she had learned', 'She had not completed any exercises', 'Her goal no longer involved English', 'She wanted to stop reviewing mistakes'], answer: 'It did not fully show what she had learned', explanation: '第一段说明完成数量不能呈现学习效果的全貌。' },
          { id: 'd7r2', type: 'choice', prompt: 'What improved in Sara’s second recording?', options: ['She described her work experience with fewer pauses', 'She used a completely different topic', 'She spoke without any grammar mistakes', 'She gave an official IELTS score'], answer: 'She described her work experience with fewer pauses', explanation: '第二段仅说明介绍工作经验时更流畅，没有声称语法完全正确。' },
          { id: 'd7r3', type: 'input', prompt: 'Complete with ONE word: Sara wrote down _____ examples of verb errors to review.', answer: 'three', accepted: ['three', '3'], explanation: '第二段明确为 three examples。' },
          { id: 'd7r4', type: 'choice', prompt: 'What did Sara choose to focus on the following week?', options: ['Asking clear follow-up questions', 'Studying only reading', 'Finishing every exercise as quickly as possible', 'Learning an entire speech by heart'], answer: 'Asking clear follow-up questions', explanation: '最后一段提出下一周的具体挑战，同时保留四项技能练习。' }
        ]
      },
      listening: {
        title: 'A weekly voice note',
        transcript: `This is my review of the first week. I studied for an hour on six days and for half an hour on Thursday because a client meeting finished late. I am pleased that I kept returning to the plan. My reading answers became more accurate when I checked the evidence in the text instead of choosing quickly. Speaking is still a challenge. I can explain a prepared design, but unexpected questions make me hesitate. Next week, I will practise two follow-up questions each day. I will also review the difference between “the client wants” and “did the client want.” I have not measured a complete IELTS score yet, so I cannot judge my distance from 7.5. For now, my priority is a consistent routine and clear feedback on the work I produce.`,
        questions: [
          { id: 'd7l1', type: 'choice', prompt: 'Why was Thursday’s study session shorter?', options: ['A client meeting finished late', 'The speaker had completed a full test', 'The speaker had no reading material', 'A teacher cancelled the lesson'], answer: 'A client meeting finished late', explanation: '开头说明周四客户会议结束较晚，所以只学习了半小时。' },
          { id: 'd7l2', type: 'choice', prompt: 'What helped the speaker answer reading questions more accurately?', options: ['Checking evidence in the text', 'Choosing answers more quickly', 'Avoiding unfamiliar topics', 'Reading only the questions'], answer: 'Checking evidence in the text', explanation: '学习者通过回到文章核对证据提高准确率。' },
          { id: 'd7l3', type: 'input', prompt: 'Complete with ONE word: Next week, the speaker will practise _____ follow-up questions each day.', answer: 'two', accepted: ['two', '2'], explanation: '下一周计划是每天练习两个追问。' }
        ]
      },
      writing: {
        title: 'Write your weekly review',
        prompt: '用 80–110 个英文单词复盘本周：一个有证据的进步、一个仍存在的问题和下周的具体调整。不必虚构分数；完成任务数和练习成绩都不等于官方雅思成绩。',
        minWords: 80,
        model: `This week, I practised all four English skills and paid particular attention to describing my work. When I compared two recordings, I noticed that my second introduction had fewer long pauses. However, I still made mistakes with verb forms, especially after did. I also found unexpected questions more difficult than prepared answers. Next week, I will practise two follow-up questions each day and review three mistakes from my notes. My goal is to make steady progress towards IELTS 7.5, but I need a fuller assessment before estimating how long that will take.`,
        checklist: ['是否用录音、修改前后文本或错题支持“有进步”？', '过去的具体练习是否使用过去时？', '是否写出下周可以执行的小调整？', '是否避免把局部练习表现当作完整雅思估分？']
      },
      speaking: {
        title: 'What have you learned this week?',
        prompt: '不看范文，说 60 秒。随后对照第一天的录音，只选择一个方面比较，例如停顿或表达清晰度。',
        cues: ['Describe one useful activity.', 'Give evidence of a small improvement.', 'Explain one remaining challenge.', 'State one plan for next week.'],
        model: `The most useful activity this week was recording a short explanation of my work. At first, I stopped several times because I was trying to find complicated words. When I tried again with simpler language, my answer became clearer. I still need to improve my grammar, particularly the difference between wants and wanted. Next week, I plan to practise questions that a client might ask during a meeting. I will keep a record of repeated mistakes and focus on correcting one pattern at a time.`
      },
      vocabIds: ['w37', 'w38', 'w39', 'w40', 'w41', 'w42']
    }
  ],
  words: [
    { id: 'w01', word: 'experience', phonetic: '/ɪkˈspɪəriəns/', pos: 'n.', meaning: '经验；经历', example: 'I have four years of experience in interior design.', cloze: 'Four years of design work have given me useful _____.', answer: 'experience', options: ['experience', 'ceiling', 'invoice', 'texture'] },
    { id: 'w02', word: 'client', phonetic: '/ˈklaɪənt/', pos: 'n.', meaning: '客户；委托人', example: 'The client wants a quiet workspace.', cloze: 'The person who hired our studio is our _____.', answer: 'client', options: ['client', 'material', 'deadline', 'layout'] },
    { id: 'w03', word: 'project', phonetic: '/ˈprɒdʒekt/', pos: 'n.', meaning: '项目', example: 'I am working on a residential project in the US.', cloze: 'The apartment renovation is our next design _____.', answer: 'project', options: ['project', 'pronunciation', 'maintenance', 'furniture'] },
    { id: 'w04', word: 'communicate', phonetic: '/kəˈmjuːnɪkeɪt/', pos: 'v.', meaning: '沟通；传达', example: 'Simple drawings help us communicate our ideas.', cloze: 'Clear drawings help us _____ our ideas to clients.', answer: 'communicate', options: ['communicate', 'arrive', 'belong', 'sleep'] },
    { id: 'w05', word: 'professional', phonetic: '/prəˈfeʃənəl/', pos: 'adj.', meaning: '专业的；职业的', example: 'A clear explanation can make a presentation more professional.', cloze: 'She maintains a calm, _____ manner in client meetings.', answer: 'professional', options: ['professional', 'wooden', 'circular', 'outdoor'] },
    { id: 'w06', word: 'improve', phonetic: '/ɪmˈpruːv/', pos: 'v.', meaning: '提高；改善', example: 'I want to improve my speaking skills.', cloze: 'Regular practice can help me _____ my English.', answer: 'improve', options: ['improve', 'deliver', 'install', 'borrow'] },
    { id: 'w07', word: 'requirement', phonetic: '/rɪˈkwaɪəmənt/', pos: 'n.', meaning: '要求；必需条件', example: 'Easy maintenance is an important requirement for this café.', cloze: 'A quiet workspace is a _____ that the design must meet.', answer: 'requirement', options: ['requirement', 'texture', 'sample', 'ceiling'] },
    { id: 'w08', word: 'brief', phonetic: '/briːf/', pos: 'n.', meaning: '设计任务书；需求说明', example: 'The design brief lists the users, budget, and main needs.', cloze: 'Please read the design _____ before preparing the first layout.', answer: 'brief', options: ['brief', 'stone', 'chair', 'window'] },
    { id: 'w09', word: 'budget', phonetic: '/ˈbʌdʒɪt/', pos: 'n.', meaning: '预算', example: 'The client has a budget of three thousand dollars.', cloze: 'Our total _____ is three thousand dollars, so we must control costs.', answer: 'budget', options: ['budget', 'texture', 'entrance', 'route'] },
    { id: 'w10', word: 'priority', phonetic: '/praɪˈɒrəti/', pos: 'n.', meaning: '优先事项；最重要的事', example: 'The client’s first priority is a quiet place for meetings.', cloze: 'The most important need should be our first _____.', answer: 'priority', options: ['priority', 'sample', 'surface', 'drawing'] },
    { id: 'w11', word: 'discuss', phonetic: '/dɪˈskʌs/', pos: 'v.', meaning: '讨论；商量', example: 'Let us discuss the options before choosing a material.', cloze: 'We will meet tomorrow to _____ the advantages of both layouts.', answer: 'discuss', options: ['discuss', 'deliver', 'install', 'paint'] },
    { id: 'w12', word: 'confirm', phonetic: '/kənˈfɜːm/', pos: 'v.', meaning: '确认；证实', example: 'Could you confirm the delivery date by email?', cloze: 'Please _____ that the final delivery date is still Tuesday.', answer: 'confirm', options: ['confirm', 'reduce', 'furnish', 'borrow'] },
    { id: 'w13', word: 'material', phonetic: '/məˈtɪəriəl/', pos: 'n.', meaning: '材料', example: 'The right material depends on how the space is used.', cloze: 'Timber is a natural _____ used to make furniture.', answer: 'material', options: ['material', 'deadline', 'priority', 'client'] },
    { id: 'w14', word: 'durable', phonetic: '/ˈdjʊərəbl/', pos: 'adj.', meaning: '耐用的；持久的', example: 'We need a durable surface for the busy reception desk.', cloze: 'A _____ finish should withstand frequent use without wearing out quickly.', answer: 'durable', options: ['durable', 'temporary', 'fragile', 'verbal'] },
    { id: 'w15', word: 'surface', phonetic: '/ˈsɜːfɪs/', pos: 'n.', meaning: '表面', example: 'Check how the surface looks under the room’s lighting.', cloze: 'Wipe the table’s _____ with the recommended cleaning product.', answer: 'surface', options: ['surface', 'budget', 'schedule', 'opinion'] },
    { id: 'w16', word: 'texture', phonetic: '/ˈtekstʃə/', pos: 'n.', meaning: '质感；纹理', example: 'The timber has a soft, natural texture.', cloze: 'The rough _____ of the stone is easy to feel with your hand.', answer: 'texture', options: ['texture', 'deadline', 'budget', 'location'] },
    { id: 'w17', word: 'sample', phonetic: '/ˈsɑːmpəl/', pos: 'n.', meaning: '样品；样本', example: 'We examined a small sample before placing the order.', cloze: 'The supplier sent a small _____ so we could check the colour.', answer: 'sample', options: ['sample', 'deadline', 'requirement', 'priority'] },
    { id: 'w18', word: 'maintenance', phonetic: '/ˈmeɪntənəns/', pos: 'n.', meaning: '维护；保养', example: 'The owner asked about the material’s maintenance needs.', cloze: 'Regular cleaning and repairs are part of building _____.', answer: 'maintenance', options: ['maintenance', 'pronunciation', 'discussion', 'permission'] },
    { id: 'w19', word: 'revise', phonetic: '/rɪˈvaɪz/', pos: 'v.', meaning: '修改；修订', example: 'I will revise the plan after we confirm the new requirement.', cloze: 'We need to _____ the drawing to include the client’s requested changes.', answer: 'revise', options: ['revise', 'install', 'attend', 'borrow'] },
    { id: 'w20', word: 'unexpected', phonetic: '/ˌʌnɪkˈspektɪd/', pos: 'adj.', meaning: '意外的；未预料到的', example: 'An unexpected request may affect the schedule.', cloze: 'The request was _____ because nobody had mentioned it before.', answer: 'unexpected', options: ['unexpected', 'wooden', 'rectangular', 'annual'] },
    { id: 'w21', word: 'flexible', phonetic: '/ˈfleksəbl/', pos: 'adj.', meaning: '灵活的；可调整的', example: 'A flexible layout can support several different activities.', cloze: 'The room needs a _____ layout that can change for different activities.', answer: 'flexible', options: ['flexible', 'permanent', 'identical', 'distant'] },
    { id: 'w22', word: 'deadline', phonetic: '/ˈdedlaɪn/', pos: 'n.', meaning: '截止时间', example: 'The deadline for the revised drawings is Tuesday.', cloze: 'Tuesday is the _____; the drawings must be finished by then.', answer: 'deadline', options: ['deadline', 'surface', 'evidence', 'texture'] },
    { id: 'w23', word: 'solution', phonetic: '/səˈluːʃən/', pos: 'n.', meaning: '解决办法；方案', example: 'A smaller sofa may provide a practical solution.', cloze: 'We need a _____ to the problem of limited storage.', answer: 'solution', options: ['solution', 'colour', 'sample', 'budget'] },
    { id: 'w24', word: 'clarify', phonetic: '/ˈklærɪfaɪ/', pos: 'v.', meaning: '澄清；说明清楚', example: 'Could you clarify what you mean by a more open space?', cloze: 'Could you _____ what you mean? I am not sure I understand.', answer: 'clarify', options: ['clarify', 'furnish', 'deliver', 'reduce'] },
    { id: 'w25', word: 'feedback', phonetic: '/ˈfiːdbæk/', pos: 'n.', meaning: '反馈意见（通常不可数）', example: 'Specific feedback helps me improve my presentation.', cloze: 'After my presentation, I asked my colleague for _____ on its clarity.', answer: 'feedback', options: ['feedback', 'furniture', 'lighting', 'timber'] },
    { id: 'w26', word: 'knowledge', phonetic: '/ˈnɒlɪdʒ/', pos: 'n.', meaning: '知识（不可数）', example: 'Her knowledge of materials helped us compare the options.', cloze: 'Training can increase our _____ of different construction methods.', answer: 'knowledge', options: ['knowledge', 'surface', 'delivery', 'ceiling'] },
    { id: 'w27', word: 'confident', phonetic: '/ˈkɒnfɪdənt/', pos: 'adj.', meaning: '自信的；有把握的', example: 'Practice helps me feel more confident during meetings.', cloze: 'After practising my explanation, I felt more _____ about presenting it.', answer: 'confident', options: ['confident', 'circular', 'wooden', 'distant'] },
    { id: 'w28', word: 'explain', phonetic: '/ɪkˈspleɪn/', pos: 'v.', meaning: '解释；说明', example: 'Please explain why this layout suits the client’s routine.', cloze: 'Could you _____ why you moved the table away from the window?', answer: 'explain', options: ['explain', 'install', 'borrow', 'deliver'] },
    { id: 'w29', word: 'evidence', phonetic: '/ˈevɪdəns/', pos: 'n.', meaning: '证据；依据（通常不可数）', example: 'Use evidence from the text to check your reading answer.', cloze: 'The measurements provide _____ that the desk will fit in the corner.', answer: 'evidence', options: ['evidence', 'furniture', 'lighting', 'texture'] },
    { id: 'w30', word: 'practical', phonetic: '/ˈpræktɪkəl/', pos: 'adj.', meaning: '实用的；切实可行的', example: 'The client needs a practical solution for daily use.', cloze: 'The storage is attractive and _____ because it is easy to reach and use.', answer: 'practical', options: ['practical', 'fragile', 'distant', 'verbal'] },
    { id: 'w31', word: 'sustainable', phonetic: '/səˈsteɪnəbl/', pos: 'adj.', meaning: '可持续的', example: 'The team is exploring a more sustainable approach to renovation.', cloze: 'The team wants a more _____ approach that uses resources responsibly over time.', answer: 'sustainable', options: ['sustainable', 'unexpected', 'verbal', 'circular'] },
    { id: 'w32', word: 'efficient', phonetic: '/ɪˈfɪʃənt/', pos: 'adj.', meaning: '高效的；有效利用资源的', example: 'An efficient layout makes good use of a small room.', cloze: 'An _____ process avoids wasting time and materials.', answer: 'efficient', options: ['efficient', 'expensive', 'unexpected', 'uncertain'] },
    { id: 'w33', word: 'access', phonetic: '/ˈækses/', pos: 'n.', meaning: '进入；使用机会；通行条件', example: 'A clear entrance can improve access to the community room.', cloze: 'The entrance should provide easy _____ to the meeting room.', answer: 'access', options: ['access', 'texture', 'feedback', 'maintenance'] },
    { id: 'w34', word: 'community', phonetic: '/kəˈmjuːnəti/', pos: 'n.', meaning: '社区；群体', example: 'The community helped decide how the room would be used.', cloze: 'The local _____ includes the people who live in this neighbourhood.', answer: 'community', options: ['community', 'material', 'surface', 'deadline'] },
    { id: 'w35', word: 'reduce', phonetic: '/rɪˈdjuːs/', pos: 'v.', meaning: '减少；降低', example: 'Reusing suitable furniture can reduce the need for new items.', cloze: 'We hope to _____ waste by keeping items that are still useful.', answer: 'reduce', options: ['reduce', 'increase', 'ignore', 'describe'] },
    { id: 'w36', word: 'benefit', phonetic: '/ˈbenɪfɪt/', pos: 'n.', meaning: '好处；益处', example: 'One benefit of movable tables is a more flexible layout.', cloze: 'A shorter route through the room is one _____ of the new layout.', answer: 'benefit', options: ['benefit', 'deadline', 'sample', 'requirement'] },
    { id: 'w37', word: 'reflect', phonetic: '/rɪˈflekt/', pos: 'v.', meaning: '反思；认真思考', example: 'I take a few minutes to reflect on my practice each week.', cloze: 'On Sunday, I _____ on what I learned during the week.', answer: 'reflect', options: ['reflect', 'install', 'arrive', 'deliver'] },
    { id: 'w38', word: 'progress', phonetic: '/ˈprəʊɡres/', pos: 'n.', meaning: '进步；进展（不可数）', example: 'Comparing two recordings can reveal small signs of progress.', cloze: 'Clearer explanations and fewer repeated errors are signs of _____.', answer: 'progress', options: ['progress', 'furniture', 'maintenance', 'location'] },
    { id: 'w39', word: 'challenge', phonetic: '/ˈtʃælɪndʒ/', pos: 'n.', meaning: '挑战；难题', example: 'Unexpected questions are still a challenge for me.', cloze: 'Answering quickly in English is a _____ I am working to overcome.', answer: 'challenge', options: ['challenge', 'sample', 'surface', 'texture'] },
    { id: 'w40', word: 'approach', phonetic: '/əˈprəʊtʃ/', pos: 'n.', meaning: '方法；处理方式', example: 'My approach is to practise, review, and try again.', cloze: 'We need a different _____ to solving this recurring problem.', answer: 'approach', options: ['approach', 'chair', 'material', 'ceiling'] },
    { id: 'w41', word: 'achieve', phonetic: '/əˈtʃiːv/', pos: 'v.', meaning: '实现；达到', example: 'I want to achieve my target through consistent practice and feedback.', cloze: 'I hope to _____ my long-term learning goal.', answer: 'achieve', options: ['achieve', 'install', 'borrow', 'attend'] },
    { id: 'w42', word: 'consistent', phonetic: '/kənˈsɪstənt/', pos: 'adj.', meaning: '持续稳定的；一贯的', example: 'A consistent routine is easier to maintain than occasional long sessions.', cloze: 'Regular daily practice helps me build a _____ study habit.', answer: 'consistent', options: ['consistent', 'wooden', 'circular', 'unexpected'] }
  ],
  grammar: [
    { id: 'g01', type: 'choice', prompt: 'The client _____ a quieter workspace.（现在的需求）', options: ['wants', 'want', 'wanting', 'have wanted'], answer: 'wants', explanation: 'the client 是第三人称单数；一般现在时用 wants。' },
    { id: 'g02', type: 'choice', prompt: 'Our clients _____ more storage.（现在的需求）', options: ['want', 'wants', 'wanting', 'is want'], answer: 'want', explanation: 'clients 是复数，一般现在时用动词原形 want。' },
    { id: 'g03', type: 'input', prompt: '用 want 的正确形式填空：Yesterday, the client _____ a larger desk.', answer: 'wanted', accepted: ['wanted'], explanation: 'Yesterday 明确表示过去，want 的过去式是 wanted。' },
    { id: 'g04', type: 'choice', prompt: 'Did she _____ to keep the existing chair?', options: ['want', 'wants', 'wanted', 'wanting'], answer: 'want', explanation: 'did 已经表达过去，后面的主要动词用原形 want。' },
    { id: 'g05', type: 'choice', prompt: 'Yesterday, we decided _____ the existing floor.', options: ['to keep', 'keeping', 'keep', 'kept'], answer: 'to keep', explanation: '固定结构为 decide to do something；过去式 decided 不改变后面的 to + 原形结构。' },
    { id: 'g06', type: 'input', prompt: '填入一个单词：I decided _____ learn English for my work.', answer: 'to', accepted: ['to'], explanation: 'decide 后接不定式：decided to learn。' },
    { id: 'g07', type: 'choice', prompt: 'The designer _____ worked here for four years.', options: ['has', 'have', 'is', 'does'], answer: 'has', explanation: 'The designer 是单数，第三人称单数的现在完成时用 has + 过去分词。' },
    { id: 'g08', type: 'choice', prompt: 'We _____ revised the layout twice.', options: ['have', 'has', 'are', 'do'], answer: 'have', explanation: 'We 后用 have；have revised 表示已经修改过。' },
    { id: 'g09', type: 'input', prompt: '填入 have 或 has：My colleague _____ chosen the material.', answer: 'has', accepted: ['has'], explanation: 'My colleague 指一位同事，是第三人称单数，所以用 has。' },
    { id: 'g10', type: 'choice', prompt: 'I have worked in design _____ four years.', options: ['for', 'since', 'on', 'at'], answer: 'for', explanation: 'four years 是一段时间，用 for。' },
    { id: 'g11', type: 'choice', prompt: 'She has worked at the studio _____ 2022.', options: ['since', 'for', 'during', 'on'], answer: 'since', explanation: '2022 是持续经历的起点，配合现在完成时用 since。' },
    { id: 'g12', type: 'input', prompt: '填入 for 或 since：We have used this supplier _____ three months.', answer: 'for', accepted: ['for'], explanation: 'three months 表示一段时间，用 for。' },
    { id: 'g13', type: 'choice', prompt: 'Which sentence is correct?', options: ['She has a lot of knowledge about materials.', 'She has many knowledges about materials.', 'She has a knowledge about materials.', 'She have a lot of knowledges about materials.'], answer: 'She has a lot of knowledge about materials.', explanation: 'knowledge 通常不可数，不能写 many knowledges；She 后要用 has。' },
    { id: 'g14', type: 'choice', prompt: 'The furniture _____ already in the room.', options: ['is', 'are', 'have', 'were'], answer: 'is', explanation: 'furniture 是不可数名词，即使包含多件家具，也通常搭配单数动词 is。' },
    { id: 'g15', type: 'choice', prompt: 'My colleague gave me _____.', options: ['some useful advice', 'a useful advice', 'many useful advices', 'two useful advices'], answer: 'some useful advice', explanation: 'advice 不可数，可以用 some advice；若要计数，可说 two pieces of advice。' },
    { id: 'g16', type: 'input', prompt: '填入 furniture 的正确形式：We bought two pieces of _____ for the office.', answer: 'furniture', accepted: ['furniture'], explanation: '数量由 pieces 表达；furniture 本身不加 s。' },
    { id: 'g17', type: 'choice', prompt: 'Most of my projects are located _____ the United States.（项目所在地）', options: ['in', 'on', 'at', 'for'], answer: 'in', explanation: '表示项目位于某个国家，用 located in the United States。' },
    { id: 'g18', type: 'choice', prompt: 'I am working _____ a small apartment project.', options: ['on', 'in', 'at', 'from'], answer: 'on', explanation: 'work on a project 表示正在做或推进一个项目。' },
    { id: 'g19', type: 'input', prompt: '填入一个介词：We will discuss the feedback _____ Monday.', answer: 'on', accepted: ['on'], explanation: '具体某个星期几前用 on：on Monday。' },
    { id: 'g20', type: 'choice', prompt: 'Choose the correct introduction.', options: ['I am an interior designer.', 'I am a interior designer.', 'I am interior designer.', 'I am an interior design.'], answer: 'I am an interior designer.', explanation: '单数可数职业名词 designer 前需要冠词；interior 以元音音素开头，用 an。' },
    { id: 'g21', type: 'choice', prompt: 'Why did the client _____ the layout yesterday?', options: ['change', 'changed', 'changes', 'changing'], answer: 'change', explanation: '一般过去时的问句已经使用 did，主要动词要用原形 change。' },
    { id: 'g22', type: 'input', prompt: '用 want 的正确形式填空：The client did not _____ a new floor.', answer: 'want', accepted: ['want'], explanation: 'did not 后使用动词原形，不再使用 wanted。' },
    { id: 'g23', type: 'choice', prompt: 'The presentation contains useful _____.', options: ['information', 'informations', 'an information', 'many information'], answer: 'information', explanation: 'information 和 knowledge 一样通常不可数，不加 s，也不直接加 a/an。' },
    { id: 'g24', type: 'choice', prompt: 'Choose the correct question about the past.', options: ['Did you decide to revise the plan?', 'Did you decided to revise the plan?', 'Did you decide revising the plan?', 'Did you decides to revise the plan?'], answer: 'Did you decide to revise the plan?', explanation: '两条规则同时适用：did 后用 decide；decide 后用 to revise。' }
  ]
};
