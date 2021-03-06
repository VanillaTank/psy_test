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

window.onload = () => {
  startCustomSelect();
  createQuestions();
  const saveResultBtn = document.querySelector('#saveResultBtn');
  saveResultBtn.addEventListener('click', processQuestions);
}

//------------------------------------------
function createQuestions() {
  const parent = document.querySelector('.questions_block');
  parent.innerHTML = '';

  questionRowHeader = `
  <div class="question_row_header">
        <div class="question_text">Вопрос</div>
        <div class="question_cell-bullet">
          Абсолютно не соотв
        </div>
        <div class="question_cell-bullet">
          По большей части не соотв
        </div>
        <div class="question_cell-bullet">
          Скорее соответствует, чем нет
        </div>
        <div class="question_cell-bullet">
          В общем соответствует
        </div>
        <div class="question_cell-bullet">
          По большей части соответствует
        </div>
        <div class="question_cell-bullet">
          Полностью соответствует
        </div>
      </div>`;
  parent.innerHTML = questionRowHeader;
  for (let i = 0; i < questionsTexts.length; i++) {
    const HTMLString = `
    <div class="question_row">
       <div class="question_text">${i + 1}. ${questionsTexts[i]}</div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" id="q${i + 1}_1" name="q${i + 1}" value="1">
          <label class="question_label hidden" for="q${i + 1}_1">Абсолютно не соотв.</label>
        </div>
         <div class="question_cell-bullet">
          <input class="question_radio" type="radio" id="q${i + 1}_2" name="q${i + 1}" value="2">
          <label class="question_label hidden" for="q${i + 1}_2">По большей части не соотв.</label>
        </div>
        <div class="question_cell-bullet">
          <input class="question_radio" type="radio" id="q${i + 1}_3" name="q${i + 1}" value="3">
          <label class="question_label hidden" for="q${i + 1}_3">Скорее соответствует, чем нет</label>
       </div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" id="q${i + 1}_4" name="q${i + 1}" value="4">
          <label class="question_label hidden" for="q${i + 1}_4">В общем соответствует</label>
       </div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" id="q${i + 1}_5" name="q${i + 1}" value="5">
          <label class="question_label hidden" for="q${i + 1}_5">По большей части соответствует</label>
       </div>
       <div class="question_cell-bullet">
          <input class="question_radio" type="radio" id="q${i + 1}_6" name="q${i + 1}" value="6">
          <label class="question_label hidden" for="q${i + 1}_6">Полностью соответствует</label>
       </div>
    </div>
`
    parent.innerHTML += HTMLString
  }
}

function processQuestions() {

  const userName = processTextInput('#name', 'Пожалуйста, впишите ваше ФИО.');
  const sex = processTextInput('input[name="sex"]:checked', 'Пожалуйста, выберите ваш пол.');
  const age = processTextInput('#age', 'Пожалуйста, впишите ваш возраст.')
  const education = processTextInput('.__select__title', 'Пожалуйста, заполните графу "Образование".');
  const profession = processTextInput('#profession', 'Пожалуйста, впишите вашу профессию.');


  if ( !userName || !sex || !age || !education || !profession ) return

  const userAnswers = {};
  for (let i = 0; i < questionsTexts.length; i++) {
    const currentQuestionName = `q${i + 1}`;
    const currentQuestion = [...document.getElementsByName(currentQuestionName)];

    let currentAnswer = undefined;
    for (const answ of currentQuestion) {
      if (answ.checked) {
        currentAnswer = parseInt(answ.value);
      }
    }

    if (!currentAnswer) {
      processQuestionsError(currentQuestion);
      return
    }
    userAnswers[currentQuestionName] = currentAnswer;
  }
  generateJSON(userAnswers, userName, sex, age, education, profession);
  clearUserInfoInputs();
  createQuestions();
  showSuccessMsg(userName);

}

function showSuccessMsg(userName) {
   const successDiv = document.createElement('div');
   successDiv.classList.add('successDiv');
   successDiv.innerHTML = `
   <div class='successMsgWrap'>
      <p>
        Спасибо, Ваш ответ учтен и сохранен в файл "${userName}.json" в папке Загрузки.<br> 
        Отправьте его своему психологу.
      </p>
      <button class='btn okSuccessMsgBtn' id="okSuccessMsgBtn" type='button'>
        OK
      </button>
   </div>
   `;

   document.body.append(successDiv);

   document.querySelector('#okSuccessMsgBtn').addEventListener('click', () => {
    successDiv.remove();
   })
}

function clearUserInfoInputs() {
  const arrErrorUserInfoInputs = [...document.querySelectorAll('.input-error')];
  arrErrorUserInfoInputs.forEach((el) => el.classList.remove('input-error'));

  document.querySelector('#name').value = '';
  document.querySelector('#age').value = '';
  document.querySelector('.__select__title').textContent = 'Не выбрано';
  document.querySelector('#singleSelect0').checked;
  document.querySelector('#profession').value = '';
}

function processTextInput(id, alertText) {
  let item;

  if (id === ".__select__title") {
    item = document.querySelector(id).textContent.trim();
  } else {
    item = document.querySelector(id).value.trim();
  }

  if (!item || item === "Не выбрано") {
    alert(alertText);
    document.querySelector(id).classList.add('input-error');
    return undefined
  }

  if (id === '#name' && (!/^[А-ЯЁ\s]+$/i.test(item) || item.length > 70 || item.length < 6)) {
    onUserInfoError(id, alertText)
    return undefined
  }
  else if (id === '#age' && (!/^[0-9]+$/i.test(item) || parseInt(item) > 120 || parseInt(item) < 2)) {
    onUserInfoError(id, alertText)
    return undefined
  }
  else if (id === '#profession' && (!/^[А-ЯЁ\s]+$/i.test(item) || item.length > 300 || item.length < 2)) {
    onUserInfoError(id, alertText)
    return undefined
  }

  return item;
}

function onUserInfoError(id, alertText) {
  alert(alertText);
  document.querySelector(id).classList.add('input-error');
}

function processQuestionsError(currentQuestion) {
  alert('Пожалуйста, ответьте на все вопросы.');
  currentQuestion[0].closest('.question_row').classList.add('error');
}

function generateJSON(userAnswers, userName, sex, age, education, profession) {
  let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const time = new Date().toLocaleString('ru-RU', options);

  const data = {
    "name": userName,
    "time": time,
    "sex": sex,
    "age": age,
    "education": education,
    "profession": profession,
    "userAnswers": userAnswers
  }
  saveJSON(data, userName);
}

function saveJSON(data, userName) {
  data = JSON.stringify(data, null, 2);
  function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }
  download(data, userName, 'application/json;charset=utf-8')
}

function startCustomSelect() {
  const selectSingle = document.querySelector('.__select');
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }
}
