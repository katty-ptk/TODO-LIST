// var divs_container = $(".divs");
$("#submit-btn").click(function ( event ) {
     event.preventDefault();

    if ( !$("#task-input").val() ) {
        
        alert("please enter a task!")

    } else {

        // add task 
        let task = $("#task-input").val();
        var task_p = document.createElement('p');
        task_p.textContent = task;
        task_p.setAttribute("class", "task-p")

        // create the div which will hold the task and its button
        var task_div = document.createElement('div');
        task_div.appendChild(task_p); 

        // create button to check task as completed
        var complete_button = document.createElement("button");
        complete_button.innerHTML = "✔️";

        task_div.appendChild(complete_button);
        document.getElementById("divs").appendChild(task_div);

        // setting attributes to style with css
        task_div.setAttribute("class", "task-div");
        task_p.setAttribute("class", "task-p");
        complete_button.setAttribute("class", "complete-button");

        $("#task-input").val("");
   
    }      
});