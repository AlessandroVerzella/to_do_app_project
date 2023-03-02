
let taskInput = document.getElementById("input");
let inputButton = document.getElementById("input-button");
let taskList = document.getElementById("task-List");
/* Now we can start working on clicking my button. 
When the button is pressed, I want someone to enter a task
and tick under H2 'Tasks'.
To do this I create the addTask function.
*/
inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);



function addTask(e) {
    if (taskInput.value === "") {
        alert("Please enter a task");
    }
/* I use the createElement() method to create elements.
In particular, when inserting a task, an element is inserted.
For simplicity, I insert it in a variant, which I call const li.
After that I add a class to my list item.
I then use the appendChild() method to insert something
 into my list item.
To insert what I write in the list item an html text, 
I use the createTextNode() method. 
taskInput.value corresponds to the value of our input. */

let listItem =  document.createElement("listItem");
listItem.className = "task";

listItem.appendChild(document.createTextNode(taskInput.value));

// create links
let link = document.createElement("a");

// add class to <a>
link.className = "delete-todo";

// add X to <a>

link.innerHTML = "<h3>X</h3>";

// put links in the list item (li)
listItem.appendChild(link);

// insert li inside ul
taskList.appendChild(listItem);

taskInput.value = "";
   
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-todo")) {
        e.target.parentElement.parentElement.remove();
    }
}

