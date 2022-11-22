//function declaration:
function doSum(a, b) {
  let c = a + b;
  return c;
}

//function expression || função anonima || anonymous function
const doSumSec = function (a, b) {
  let c = a + b;
  return c;
};

// IIFE ( Imediately Invoked function Expression)

(function () {
  let a = 4;
  let c = doSum(a, 3);
  // console.log(`Sum equal = ${c}`);
})();

// Define a default volume for the window (the entire DOM):

const doOther = () => { 
  let a = 3;
  let b = 21;
  console.log('%c%s', 'color: #00bf00', a+b);
}

window.location
console.log('%c%s', 'color: #0088cc', window.location);

const greenPack = {
  name: 'Frog Pack',
  color: 'green',
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log('this.volume in the method:', this.volume);
    this.volume = volume;
    console.log('this.volume after update:', this.volume);
    (function () {
      console.log('this.volume in nested function:', this.volume);
    })();
    (() => {
      console.log('this.volume in arrow function:', this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));
