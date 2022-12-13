// let div = document.querySelector(".container");

// const callback = () => {
//   console.debug("%c%s", "color: #f200e2", "Callback called");
//   div.innerHTML = "<h1>Now you see me</h1>";
// };

// setTimeout(callback, 9000);

/* ----------------------------------------------- */

// let div = document.querySelector(".container");

// const callback = () => {
//   console.debug("%c%s", "color: #f200e2", "Callback called");
//   div.innerHTML = "<h1>Now you see me</h1>";
// };

// let counter = 0;

// setInterval(() => {
//   div.innerHTML = counter++;
// }, 1000);


// /* ----------------------------------------------- */

// let div = document.querySelector(".container");

// const callback = () => {
//   console.debug("%c%s", "color: #f200e2", "Callback called");
//   div.innerHTML = "<h1>Now you see me</h1>";
// };

// setTimeout(callback, 2000);

// let counter = 0;

// const id = setInterval(() => {
//   div.innerHTML += counter++;
//   stop()
// }, 1000);

// const stop = () => {
//   if (counter > 5) {
//     clearInterval(id)
//   }
// }


/* ----------------------------------------------- */

// let div = document.querySelector(".container");
// let button = document.querySelector(".btn");

// const callback = () => {
//   console.debug("%c%s", "color: #f200e2", "Callback called");
//   div.innerHTML = "<h1>Boom</h1>";
// };

// const timeoutId = setTimeout(callback, 9000);

// let counter = 0;

// const intervalId = setInterval(() => {
//   div.innerHTML += counter++;
//   stop()
// }, 9000);

// const stop = () => {
//   if (counter > 5) {
//     clearInterval(intervalId);
//     console.debug('Interval cleared')
//   }
// };

// const stopTimer = () => {
//     div.innerHTML = '<h3 style="font-weight:bold">All good now</h3>'
//     console.debug('Timer cleared')
//     clearTimeout(timeoutId)
// }
  
// button.addEventListener('click',stopTimer)


/* ----------------------------------------------- */

// let div = document.querySelector(".container");
// let button = document.querySelector(".btn");
  

// let waitForNothing = new Promise( (res, err) => {
//   const counter = 0
//   if(!counter){
//     res('success')
//   }
//   else {
//     err('error')
//   }
// })


// waitForNothing.then((sucess) => {
//   div.innerHTML = sucess
// }, (error) => {
//   div.innerHTML = error
// })

// pending = undefined
// fullied = finished nicely
// rejected = error 



/* ----------------------------------------------- */

// let div = document.querySelector(".container");
// let button = document.querySelector(".btn");

// let waitForNothing = new Promise( (res, err) => {
//   setTimeout(res("<h1>All Good</h1>") || err("<h1>Boom</h1>"), 90000);
// })


// waitForNothing.then((success) => {
//   console.log('%c%s', 'color: #017e12', 'Foi');
//   div.innerHTML = success
// }, (error) => {
//   div.innerHTML = error
// })


/* ----------------------------------------------- */

const data = async() => {
  return fetch("http://localhost:8080/api/book")
}

data().then(res => {
    return res.json()
}).then(x => {
    console.log('%c%s', 'color: #ffcc00', JSON.stringify(x.it));
}) 
