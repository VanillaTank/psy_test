const questionsTexts = [
  "Рядом со мной не было человека, который бы обо мне заботился, проявлял участие и искренний интерес ко всему, что происходило со мной",
  "Я «цепляюсь» за близких мне людей, так как боюсь, что они меня покинут",
  "Мне кажется, что другие люди меня используют",
  "Я не вписываюсь ни в одну из компаний",
  "Ни один мужчина (женщина), к которым я испытываю влечение, не могли бы полюбить меня, если бы узнали о моих недостатках",
  "Почти всё, что я делаю на работе (в учебе) не так хорошо, как это могли бы сделать другие люди",
  "Думаю, что я не способен самостоятельно справляться с повседневными делами",
  "Я не могу избавиться от ощущения, что должно случиться чтото плохое",
  "Я не смог «отделиться» от своих родителей в той мере, в какой это сделали мои сверстники",
  "Я думаю, что если я буду делать только то, что мне хочется, это непременно приведет к неприятностям",
  "В конце концов, именно мне приходится заботиться о моих близких",
  "Я слишком застенчив, чтобы проявлять свою симпатию (внимание или привязанность) к другим людям",
  "Я должен быть лучшим во всем, что я делаю, и не могу быть хуже других",
  "Мне очень трудно принять «нет» в качестве ответа, если я чего-нибудь хочу от других людей",
  "Я не могу заставить себя выполнять рутинные или скучные задания",
  "C важными людьми и наличие денег дают мне ощущение собственной значимости",
  "Даже когда дела идут хорошо, у меня такое ощущение, что это ненадолго",
  "Если я допущу ошибку, то должен быть наказан",
  "Я не знаю таких людей, которые давали бы мне тепло, любовь и заботу",
  "Я так сильно нуждаюсь в других людях, что боюсь их потерять",
  "Я чувствую, что не могу ослабить свою защиту и вести себя естественно в присутствии других людей, так как они могут причинить мне боль",
  "Я очень сильно отличаюсь от других людей",
  "Никто, о ком я мечтаю, не захотел бы остаться рядом со мной, есл бы, узнал, какой я на самом деле",
  "Я неспособен добиться успеха",
  "В повседневной жизни я во многом завишу от других людей",
  "Я полагаю, что в любой момент может произойти нечто ужасное (природная катастрофа, преступление, финансовый кризис или несчастный случай)",
  "Я и мои родители склонны (были склонны) принимать излишнее участие вжизни и решении проблем друг друга",
  "Я чувствую, что я должен уступать желаниям других людей, иначе они могут отвергнуть меня или как-то отомстить",
  "Я - хороший человек, так как думаю о других больше, чем  себе",
  "Мне неловко показывать другим свои чувств",
  "Я стараюсь делать все как можно лучше и не приемлю, когда говорят «…и так уже достаточно хорошо…»",
  "Я особенный человек и не обязн подчиняться многим ограничениям, установленным для других людей",
  "Если мне не удается достичь цели, я легко отчаиваюсь и сдаюсь",
  "Достижения имеют для меня наибольшую ценность, если их замечают другие люди",
  "Когда случается что-то хорошее, я жду, что должно случиться что-то плохое",
  "Если я не буду стараться изо всех сил, то у меня обязательно будут неприятности",
  "Я никогда не чувствовал, что я был кем-то особенным для другого человека",
  "Я опасаюсь, что мои близкие покинут или «бросят» меня",
  "Думаю, что рано или поздно, кто-нибудь меня обязательно предаст",
  "Я – одиночка, и не принадлежу ни к какому «кругу»",
  "Я недостоин любви, внимания или уважения других людей",
  "Большинство людей достигают лучших результатов в работе, чем я",
  "Мне не хватает здравого смысла",
  "Я боюсь, что на меня могут напасть",
  "Мне всегда было очень трудно скрывать от родителей подробности личной жизни, не испытывая при этом чувства вины",
  "В отношениях с другими людьми я легко соглашаюсь быть на вторых ролях",
  "Я так занят делами моих близких, что у меня не остается времени для себя",
  "Мне трудно быть раскованным и непосредственным с другими людьми",
  "Я должен выполнять все свои обязательства",
  "Я терпеть не могу, когда меня ограничивают или не дают делать то, что я хочу",
  "Мне очень трудно отказывать себе в удовлетворении сиюминутных желаний ради достижения отдаленной цели",
  "Когда я не получаю повышенного внимания, я чувствую себя недостаточно значимым человеком",
  "Невозможно всё предусмотреть - что-нибудь обязательно пойдёт не так",
  "Если я не сделаю какую-либо работу как следует, то должен буду отвечать за последствия",
  "У меня никогда не было человека, который бы по-настоящему выслушивал и понимал меня или интересовался моими истинными потребностями и чувствами",
  "Когда я чувствую, что близкий человек отдаляется или уходит от меня, я впадаю в отчаяние",
  "Я очень подозрительно отношусь к тому, какими мотивами руководствуются другие люди",
  "Я чувствую себя отчужденным или изолированным от других людей",
  "Мне кажется, что меня нельзя полюбить",
  "В работе я не так талантлив, как большинство других людей",
  "В житейских ситуациях на мое мнение нельзя полагаться",
  "Я боюсь, что потеряю все деньги или останусь без средств к существованию",
  "Я чувствую, что живу не собственной жизнью, а так, как хотели бы от меня мои родители",
  "Так как решения за меня всегда принимали другие, то теперь я сам не знаю, чего хочу на самом деле",
  "Мне всегда приходится выслушивать проблемы других людей",
  "Я так сильно контролирую себя, что меня считают неэмоциональным или бесчувственным",
  "Я постоянно испытываю давление от того, что нужно что-то сделать или чего-то достичь",
  "Считаю, что я не должен следовать общепринятым правилам и договоренностям, как это делают другие люди",
  "Я не могу заставить себя делать то, что мне не нравится, даже если я знаю, что это нужно для моего же блага",
  "Если меня знакомят с новой компанией или я кому-нибудь чтото рассказываю, то для меня очень важно получить признание и восхищение",
  "Независимо от того, насколько усердно я работаю, меня беспокоит, что я могу лишиться денежных средств и остаться ни с чем",
  "Не имеет значения, почему я сделал ошибку - если я сделаю что-то не так, то мне придётся за это расплачиваться",
  "В моей жизни не было такого человека, который мог бы дать мне хороший совет или направить меня, когда я не знал, как поступить",
  "Иногда я так боюсь, что кто-то покинет меня, что сам первый начинаю отталкивать этого человека",
  "Обычно я ищу скрытые мотивы у других людей",
  "Я чувствую себя посторонним в любой группе",
  "У меня много неприемлемых качеств, из-за которых я не могу открываться перед другими людьми или позволять им узнавать меня получше",
  "В том, что касается работы или учебы, я не такой сообразительный как большинство других людей",
  "Я не уверен в своей способности справляться с повседневными проблемами, которые, постоянно возникают",
  "Я беспокоюсь, что у меня развивается тяжелое заболевание, хотя врачи не обнаруживают ничего серьезного",
  "Я не чувствую себя целостной личностью отдельно от личности моего партнера или кого-то из родителей",
  "Мне очень трудно требовать от других, чтобы они уважали мои права и считались с моими чувствами",
  "Люди считают, что я делаю слишком много для других и недостаточно для себя",
  "Меня считают эмоционально зажатым и напряженным",
  "Мне трудно снять с себя ответственность за что-либо или дать себе право на ошибку",
  "То, что я предлагаю и делаю, является более ценным, чем вклад других людей",
  "Мне редко удаётся сдерживать обещания, которые я даю самому себе",
  "Я чувствую себя по-настоящему ценным человеком, когда меня хвалят или осыпают комплиментами",
  "Я боюсь, что любое неправильное решение может привести к катастрофе",
  "Я плохой человек, который заслуживает наказания"
]
const categories = ['ed', 'ab', 'ma', 'si', 'ds', 'fa', 'di', 'vh', 'em', 'sb', 'ss', 'ei',
  'us', 'et', 'is', 'as', 'np', 'pu'
];

const generalCategories = [
  { name: 'Нарушение&#160;связи и отвержение', itemsShortNames: ['ed', 'ab', 'ma', 'si', 'ds'] },
  { name: 'Нарушение автономии', itemsShortNames: ['fa', 'di', 'vh', 'em'] },
  { name: 'Направленность на других', itemsShortNames: ['sb', 'ss', 'as'] },
  { name: 'Сверхбдительность и запреты', itemsShortNames: ['ei', 'us', 'np', 'pu'] },
  { name: 'Нарушение границ', itemsShortNames: ['et', 'is'] },
]

window.onload = () => {
  const input = document.querySelector('#file');
  document.addEventListener("drop", (event) => {
    if (event.target !== input) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  document.addEventListener("dragover", (event) => {
    if (event.target !== input) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  input.addEventListener('change', onFileInput);

}
//------------------------------------------


async function onFileInput() {

  const file = await this.files[0];

  if (!file) return;

  let reader = new FileReader(file);

  reader.readAsText(file);

  reader.onload = function () {
    let data = JSON.parse(reader.result);

    const mainResuts = document.querySelector('.main-results');
    mainResuts.classList.remove('hidden');

    const userInfo = {
      name: data.name,
      time: data.time,
      sex: data.sex,
      age: data.age,
      education: data.education,
      profession: data.profession,
    }

    showUserInfo(userInfo);
    createQuestions(data.userAnswers);
    createAnswers(data.userAnswers)
    createCharts(data.userAnswers)
  };

  reader.onerror = function () {
    console.log(reader.error);
    return
  };
}

function showUserInfo(userInfo) {
  const userInfo_block = document.querySelector('.userInfo_block');
  userInfo_block.innerHTML = `
    <div class="userInfo_item"><span>ФИО:</span> ${userInfo.name}</div>
    <div class="userInfo_item"><span>Дата заполнения:</span> ${userInfo.time}</div>
    <div class="userInfo_item"><span>Пол:</span> ${userInfo.sex}</div>
    <div class="userInfo_item"><span>Возраст:</span> ${userInfo.age}</div>
    <div class="userInfo_item"><span>Образование:</span> ${userInfo.education}</div>
    <div class="userInfo_item"><span>Профессия:</span> ${userInfo.profession}</div>
  `
}

function createQuestions(userAnswers) {
  const parent = document.querySelector('.questions_block');

  for (let i = 0; i < questionsTexts.length; i++) {
    const HTMLString = `
    <div class="question_row">
       <div class="question_text">${i + 1}. ${questionsTexts[i]}</div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" name="q${i + 1}" value="1" ${userAnswers["q" + (i + 1)] === 1 ? "checked" : ''}>
          <label class="question_label hidden" for="q${i + 1}">Абсолютно не соотв.</label>
        </div>
         <div class="question_cell-bullet">
          <input class="question_radio" type="radio" name="q${i + 1}" value="2" ${userAnswers["q" + (i + 1)] === 2 ? "checked" : ''}>
          <label class="question_label hidden" for="q${i + 1}">По большей части не соотв.</label>
        </div>
        <div class="question_cell-bullet">
          <input class="question_radio" type="radio" name="q${i + 1}" value="3" ${userAnswers["q" + (i + 1)] === 3 ? "checked" : ''}>
          <label class="question_label hidden" for="q${i + 1}">Скорее соответствует, чем нет</label>
       </div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" name="q${i + 1}" value="4" ${userAnswers["q" + (i + 1)] === 4 ? "checked" : ''}>
          <label class="question_label hidden" for="q${i + 1}">В общем соответствует</label>
       </div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" name="q${i + 1}" value="5" ${userAnswers["q" + (i + 1)] === 5 ? "checked" : ''}>
          <label class="question_label hidden" for="q${i + 1}">По большей части соответствует</label>
       </div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" name="q${i + 1}" value="6" ${userAnswers["q" + (i + 1)] === 6 ? "checked" : ''}>
          <label class="question_label hidden" for="q${i + 1}">Полностью соответствует</label>
       </div>
    </div>
`
    parent.innerHTML += HTMLString
  }


}

function createAnswers(userAnswers) {

  const testResult = new Test_key(userAnswers);

  const resultsBlock = document.querySelector('.results_block');
  resultsBlock.classList.add('result-border');
  resultsBlock.innerHTML = '';


  let headerString = `
  <div class="result_row result_header">
    <div class="result_categories">Схемы</div>
    <div class="result_questions">№ вопросов</div>
    <div class="result_sum">Sum</div>
    <div class="result_mediana">Mid</div>
    <div class="result_sum1">Sum1</div>
    <div class="result_sum2">Sum2</div>
  </div>`

  let bodyString = ``;

  for (let i = 0; i < categories.length; i++) {
    bodyString += `
    <div class="result_row result_row_hover">
      <div class="result_categories">
        ${i + 1}. ${testResult[categories[i]].name}
        <div>${categories[i]}</div>
      </div>
      <div class="result_questions">
        <div class="result_questions_1">${testResult.a[`q${i + 1}`]}</div>
        <div class="result_questions_2">${testResult.a[`q${i + 19}`]}</div>
        <div class="result_questions_3">${testResult.a[`q${i + 37}`]}</div>
        <div class="result_questions_4">${testResult.a[`q${i + 55}`]}</div>
        <div class="result_questions_5">${testResult.a[`q${i + 73}`]}</div>
      </div>
      <div class="result_sum">${testResult[categories[i]].sum}</div>
      <div class="result_mediana">${testResult[categories[i]].mediana.toFixed(2)}</div>
      <div class="result_sum1">${testResult[categories[i]].sum1.toFixed(2)}</div>
      <div class="result_sum2">${testResult[categories[i]].sum2}</div>
    </div>`
  }

  const footerString = `
  <div class="result_row result_footer">
    <div class="result_categories">Общий показатель YSQ-S3R</div>
    <div class="result_questions">${testResult.generalScore.mediana.toFixed(2)}</div>
    <div class="result_sum">${testResult.generalScore.sum}</div>
    <div class="result_mediana">${testResult.generalScore.sumMedianas.toFixed(2)}</div>
    <div class="result_sum1"></div>
    <div class="result_sum2">${testResult.generalScore.sum2}</div>
  </div>
  `

  resultsBlock.innerHTML += headerString;
  resultsBlock.innerHTML += bodyString;
  resultsBlock.innerHTML += footerString;
}

function createCharts(userAnswers) {
  const testResult = new Test_key(userAnswers);

  const chartsBlock = document.querySelector('.charts_block');
  chartsBlock.innerHTML = '';

  for (const i in generalCategories) {
    const name = generalCategories[i].name;

    let categoryStatusString = '';
    for (let j = 0; j < generalCategories[i].itemsShortNames.length; j++) {
      const currentCategory = generalCategories[i].itemsShortNames[j];
      const width = testResult[currentCategory].sum1.toFixed(0);

      categoryStatusString += `
        <div class="charts_block-item">${testResult[currentCategory].name}</div>
        <div class="charts_block-bar" id=${currentCategory}>
          <div class="charts_block-bar-color ${ testResult.getColor(width) }" style="width: ${width}%;"></div>
          <div class="charts_block-bar__label">${width}</div>
        </div>
      `
    }

    chartsBlock.innerHTML += `
    <div class="wrap">
      <div class="charts_block-category">
        <div>${name}</div>
      </div>
      ${categoryStatusString}
    </div>
    `
  }
}


