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

        // create div which will hold the task and its complete button
        var task_div = document.createElement('div');
        task_div.setAttribute("id", "task-div");
        document.getElementById("task-div").appendChild(task_p);
        document.getElementById("divs").appendChild(task_div);

        // document.getElementById("divs").appendChild(task_p);            
    
        $("#task-input").val("");
    }      
});