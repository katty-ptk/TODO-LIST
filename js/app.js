// set date
const date_options = {
    month: "long", // the month will be spelled the long way ==> January, February, March
    weekday: "long", // the weekday will also be spelled the long way ==> Monday, Tuesday, Wednesday
    day: "numeric" // 1, 2, 30
};

const date = new Date();
document.querySelector("#date").innerHTML = date.toLocaleDateString("en-US", date_options); // the day will be in English, and spelled like above

 // chanage affirmation on refresh
 function changeAffirmation() {
     const affirmations = [
        "You are amazing. ❤",
        "You are enough! ❤",
        "You are awesome! ❤",
        "You rock! ❤",
        "You can handle today. ❤",
     ]; // this holds the affirmations which will randomly change

     var affirmation_container = document.querySelector("#affirmation");
     var random_affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
     var affirmation_h1 = document.createElement('h1');
     
     affirmation_container.appendChild(affirmation_h1);
     affirmation_h1.textContent += random_affirmation;
}   