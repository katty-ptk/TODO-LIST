// set date
const date_options = {
    month: "long", // the month will be spelled the long way ==> January, February, March
    weekday: "long", // the weekday will also be spelled the long way ==> Monday, Tuesday, Wednesday
    day: "numeric" // 1, 2, 30
};

const date = new Date();
document.querySelector("#date-h1").innerHTML = date.toLocaleDateString("en-US", date_options); // the day will be in English, and spelled like above

// chanage affirmation on refresh
function changeAffirmation() {
    const affirmations = [
        "You are amazing. ❤",
        "You are enough! ❤",
        "You are awesome! ❤",
        "You are loved. ❤",
        "You are important. ❤",
        "You rock! ❤",
        "You can handle today. ❤"
    ]; // this holds the affirmations which will randomly change

    var affirmation_container = document.querySelector("#affirmation");
    var random_affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    var affirmation_h1 = document.createElement('h1');
     
    affirmation_container.appendChild(affirmation_h1);
    affirmation_h1.textContent += random_affirmation;
}   


// classes names
const CHECK = "checked";
const UNCHECK = "unchecked";


// adding the to-do 
const todos_list = document.querySelector("#todos-list");
const input = document.querySelector("#add-tasks");

addToDo = ( toDo, id, done ) => {

    const item = `
        <li class="item">
            <i class="icon-circle-blank" job="complete" id="0" style="font-size: 35px; color: #ffffff; margin-left: 5px;"></i>
            <p class="todo-text" style="margin: 0 50px;";>${toDo}</p> 
            <i class="icon-eraser" job="delete" id="0" style="font-size: 35px; color: #ffffff;"></i>        
        </li>
`; // #{toDo} takes the added task's value and passes it there
    todos_list.insertAdjacentHTML("beforeend", item); 
}

document.querySelector("#input-form").addEventListener("submit", function ( event ) {
    event.preventDefault();

    const toDo = input.value;

    if ( toDo ) 
        addToDo( toDo );
    else
        alert('introdu un task')

    input.value = "";
});

// addToDo("drink coffee", 1, false, false);
// console.log(todos_list);