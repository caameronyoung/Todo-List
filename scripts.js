//dateTime variables to increase usability of todo list each day
const todaysDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[todaysDate.getDay()].toString();
let date = todaysDate.getDate(); 
let month = todaysDate.getMonth() + 1;
let year = todaysDate.getFullYear().toString().substr(-2).toString();
console.log(day);

//constant getters and setters for drawing the checkboxes of my todo list
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawShape()
{
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(100,20);
    ctx.lineTo(175,100);
    ctx.lineTo(20,100);
    ctx.lineTo(20,20);
    ctx.stroke();
}


document.getElementById('dateHolder').innerText += ' ' + day + ' ' + date + '/' + month + '/' + year;
