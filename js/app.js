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


// adding the to-do 
const todos_list = document.querySelector("#todos-list"); // where the items will be put
const input = document.querySelector("#add-tasks"); // grabs the input field

let LIST = [], id = 0;

// classes
const CHECK = "checked";
const UNCHECK = "unchecked";

addToDo = ( toDo, id, done, trash ) => { // ( toDo ) is the input value
    
    const DONE = done ? CHECK : UNCHECK;
    
    const item = `
        <li class="item unchecked">
            <span id="complete-span" onclick="completeTask()">
                 <i class="icon-ok-sign" id="${id}" style="font-size: 35px; color: #ffffff; margin-left: 5px;"></i>
            </span>
            <p class="todo-text lineThrough" style="margin: 0 50px;";>${toDo}</p> 
            <span onclick="deleteTask()">
                 <i class="icon-eraser" id="${id}" style="font-size: 35px; color: #ffffff;"></i>    
            </span>    
        </li>
    `; // #{toDo} takes the added task's value and passes it there
       // the icons will be replaced
    todos_list.insertAdjacentHTML("beforeend", item); 
}

document.querySelector("#input-form").addEventListener("submit", function ( event ) {   // when 'enter' is pressed
    event.preventDefault();

    const toDo = input.value; // toDo takes input's value

    if ( toDo ) {   // if input isn't empty
        addToDo( toDo, id, false, false );   // add item to the list

        LIST.push({
            name: toDo,
            id: id,
            done: false,
            trash: false
        });
        id ++;
        // console.log(LIST);
    }
        else   // if input is emty
            alert('please enter a task!')  //  alert user

    input.value = "";
});

// // complete task
// completeTask = ( toDo ) => {
//     for (var i = 0; i <= LIST.length; i++ ){
//         if ( i == this.id ) {
//             console.log('ies');
//         }
//     }
// }

// // detele task
// deleteTask = ( toDo ) => {
//     console.log('deleteTask is working');
// }

// clear = () => {
//     console.log('clear');
// }