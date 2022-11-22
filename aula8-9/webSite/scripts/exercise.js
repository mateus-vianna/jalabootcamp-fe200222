

const list = document.getElementById("list");
const ol = document.createElement('ol');
const listItem = (item) => `<li style="margin-top:25px">${item}</li>`
const tempList = [];

const tasks =[
    'When the mouse is inside the container the mouse icon should change into another icon',
    'All the buttons should have a hover effect where the label and button color changes',
    'When the fist button is clicked a new article should appear inside another container under the first container',
    'When the second button is clicked a counter should appear on the first container',
    'When the third button is clicked a timer should run and each click displayed by the second button should count as a second on that counter. Each second should be consoled in the browser',
    'After the runs the current counter for the second button should be 0'
]

tasks.forEach((task) => { 
     ol.innerHTML += listItem(task)
})

list.appendChild(ol)


