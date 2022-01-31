// const doc = new jsPDF('p','pt','a4');
// const btn = document.querySelector('#save');
// const content = document.querySelector('#content')

// btn.addEventListener('click', () => {
//     doc.addHTML(content,function() {
//         doc.save('html.pdf');
//     });
// });

{/* <div id="content">
<h1 style="color:red">Hello World</h1>
<p>this ifsdfsd sdfsd sdfs fsdf sdsf s a PDF</p>
</div>

<button id="save">Save</button> */}


const form = el('.test_form');
const answers = {};
const arrAllRadioInputs = [...document.querySelectorAll('.count input[type=radio]')];

const arrRadioInputs = arrAllRadioInputs.filter((el, index, arr) => {
  if (index + 1 <= arr.length - 1) {
    if (el.name !== arr[index + 1].name) { return el }
  } else { return el }
  return
})

arrRadioInputs.forEach(input => input.addEventListener('invalid', event => addErrorMark(event), false))
arrAllRadioInputs.forEach(input => input.addEventListener('change', event => removeErrorMark(event), false))

form.addEventListener("submit", event => on_testForm_submit(event), false);

//---------------------------------------------------------------------------
function el(el) {
  return document.querySelector(el);
}

function addErrorMark(event) {
  event.preventDefault();
  const perentRow = event.currentTarget.closest('tr');
  perentRow.classList.add('row-error');
  //todo сделать скрол к первому косячному инпуту
}

function removeErrorMark(event) {
  event.preventDefault();
  const perentRow = event.currentTarget.closest('tr');
  perentRow.classList.remove('row-error');
}

function on_testForm_submit(event) {
  event.preventDefault();
  const data = new FormData(form);
  for (const entry of data) {
    answers[entry[0]] = entry[1];
  };
  const test_key = new Test_key(answers);
}
