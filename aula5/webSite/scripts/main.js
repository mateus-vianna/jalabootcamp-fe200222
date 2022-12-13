// const main = document.querySelector('h1');
// main.textContent = "Hello World";

/*------------------------------------------------------------*/

// const main = document.querySelector("#main")
// const header = `<h1>Hello World</h1>`
// main.append(header);

/*------------------------------------------------------------*/

// const main = document.querySelector("#main")
// const list = document.createElement('ul')
// const array = ['water', 'cachaça', 'lemon', 'sugar', 'lime']
// array.push('ice')
// array.pop()


// for(let i = 0; i < array.length; i++){
//     const header = document.createElement('li')
//     header.innerHTML = array[i]
//     list.appendChild(header)
// }

// main.append(list)

/*------------------------------------------------------------*/

// const main = document.querySelector("#main")
// const list = document.createElement('ul')
// const array = ['water', 'cachaça', 'lemon', 'sugar', 'lime']


// let i = 0;
// while(i < array.length){
//     const header = document.createElement('li')
//     header.innerHTML = array[i]
//     console.log('%c%s', 'color: #00a3cc', array[i]);
//     list.appendChild(header),i++
// }

// main.append(list)

/*------------------------------------------------------------*/

// const main = document.querySelector("#main")
// const list = document.createElement('ul')
// const array = ['water', 'cachaça', 'lemon', 'sugar', 'lime']

// for(let i in array){
//     const header = document.createElement('li')
//     header.innerHTML = array[i]
//     list.appendChild(header)
// }

// main.append(list)

/*------------------------------------------------------------*/

// const main = document.querySelector("#main")
// const list = document.createElement('ul')
// const array = ['water', 'cachaça', 'lemon', 'sugar', 'lime']

// array.forEach(item => {
//     const header = document.createElement('li')
//     header.innerHTML = item
//     list.appendChild(header)
// })


// main.appendChild(list)

/*------------------------------------------------------------*/

const main = document.querySelector("#main")
const div = document.createElement('div')
const b = "Works"
const templateString = 
`<div>
    ${b}
    <p>Dog</p>
    <p>Buba</p>
    <article>Bilu is a friendly street dog. He's always happy, he lives besides the bbq restaurant. Smart fatty dog.</article>
</div>
`

const something = "<h1>Jame's</h1>" + b +"<h2>Outro</h2>"
div.innerHTML = templateString;
main.appendChild(div);

/*------------------------------------------------------------*/
