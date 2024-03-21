//dateTime variables to increase usability of todo list each day
const todaysDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let completed = false;
let day = days[todaysDate.getDay()].toString();
let date = todaysDate.getDate(); 
let month = todaysDate.getMonth() + 1;
let year = todaysDate.getFullYear().toString().substr(-2).toString();




//printing date to the page
document.getElementById('dateHolder').innerText += ' ' + day + ' ' + date + '/' + month + '/' + year;


//task defintions
let chore = document.getElementById('task');
console.log(chore);





//Event listener for clicking check boxes
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(20,20,30,30);
let clicked = false;

//event listener so if clicked it toggles the colour yep yep

canvas.addEventListener('click', testFunction)
function testFunction()
{
    if (!clicked)
    {
        ctx.fillStyle = 'green';
        ctx.fillRect(20,20,30,30);
        clicked = true;
        chore.style.color = 'green';
    }
    else if (clicked)
    {
        ctx.fillStyle = 'black';
        ctx.fillRect(20,20,30,30);
        clicked =  false;
        chore.style.color = 'red';
    }
}
