// import batatinha, {
//   mstring, mnumber,
//   mfloat, mboolean,
//   mnull, mundef,
//   objDemo, array,
//   sum
// } from './mtypes.js';

// mstring()
// mnumber()
// mfloat()
// mboolean()
// mnull()
// mundef()
// objDemo()
// array()
// sum()
// batatinha()

const main = document.querySelector("#root")
const div = document.createElement('div')
const templateString =
  `<div class="main-div">
  <p class="headline">Alguma coisa</p>
</div>
`

div.innerHTML = templateString;
main.appendChild(div)


