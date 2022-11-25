

const list = document.getElementById("list");
const ol = document.createElement('ol');
const listItem = (item) => `<li style="margin-top:25px">${item}</li>`
const tempList = [];

const tasks =[
    'You should connect your newly created app to our backend folder',
    'You should print the message received from our server into the console',
    'Connect your app to the <a href"https://rapidapi.com/boggio-analytics/api/football-prediction">Football Prediction</a> API using fetch',
    'There is an error on step 3 line. "Football Prediction" should be link to the API'
]

tasks.forEach((task) => { 
     ol.innerHTML += listItem(task)
})

list.appendChild(ol)


fetch("http://localhost:8080/api/test").then(response => {
    return response.text()
}).then(text => {
    console.log('%c%s', 'color: #7f7700', text);
})