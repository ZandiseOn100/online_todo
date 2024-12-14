const form = document.getElementById("form");
const taskName = document.getElementById("taskname");
const taskDescription = document.getElementById("taskdescription");
const taskDueDate = document.getElementById("taskduedate");
const radioButtonYes = document.getElementById("radiobtnyes");
const radioButtonNo = document.getElementById("radiobtnno");
const taskList = document.getElementById("taskList");


//Event listener for adding new task
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const newTaskName = taskName.value.trim();
    const newTaskDescription = taskDescription.value.trim();
    const newTaskDueDate = taskDueDate.value.trim();
    const isTaskComplete = radioButtonYes.checked ? "Yes" : radioButtonNo.checked ? "NO" : "";

    if (newTaskName === ""){
        alert("Task name required");
    } else if(newTaskDescription === ""){
        alert("Task description required");
    }else if(newTaskDueDate === ""){
        alert("Task due date required");
    }else if(isTaskComplete === ""){
        alert("Is your task complete?");
    }else{
        // Add task to list
        addTaskToList(newTaskName, newTaskDescription, newTaskDueDate, isTaskComplete);
        // Clear form
        taskName.value = "";
        taskDescription.value = "";
        taskDueDate.value = "";
        radioButtonYes.value = false;
        radioButtonNo.value = false;
    }

});

// Function to add new task to the list

function addTaskToList(taskNameText, taskDescriptionText, taskDueDateText, isTaskCompleteText ){
    const li = document.createElement("li");

    li.innerHTML =
     `Task: ${taskNameText}. <br> 
     Description: ${taskDescriptionText}. <br> 
     Due Date: ${taskDueDateText}.<br> 
     Complete: ${isTaskCompleteText}.`;


    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Task";
    editButton.addEventListener("click", () => editTask(li));
    li.appendChild(editButton);

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Task";
    deleteButton.addEventListener("click", () => deleteTask(li));
    li.appendChild(deleteButton);

    // Append Task to list 
    taskList.appendChild(li);
}

// Function to edit a task

function editTask(li){
    const updatedText = prompt("Update Task: ", li.textContent);
    if(updatedText !== null){
        li.textContent = updatedText.trim() === "" ? li.textContent : updatedText;
    }
}


// Function to delete a task

function deleteTask(task){
    taskList.removeChild(task);
}

// Contact form
const contactForm = document.getElementById("contactForm");
const fullnameInput = document.getElementById("fullname");
const userMessageInput = document.getElementById("message");
const messageResponse = document.getElementById("messageResponse");

// Event listener for submitting a message

contactForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const newFullnameInput = fullnameInput.value.trim();
    const newUserMessageInput = userMessageInput.value.trim();

    if (newFullnameInput === "" || newFullnameInput.length < 3){
        alert("Enter your full name please. And your name must be longer than 3 characters");
    }else if(newUserMessageInput === ""){
        alert("Please enter your message!");
    }else{

        sendMessage(newFullnameInput, newUserMessageInput);
        // Clear the form

        fullnameInput.value = "";
        userMessageInput.value = "";
    }

});

// Function to send message
function sendMessage(fullnameInputText, userMessageInputText){
    const messageItem = document.createElement("li");
    messageItem.innerHTML =`<strong>Message sent successfully!</strong> <br>
    Full name: ${fullnameInputText} <br>
    Message: ${userMessageInputText}`;
    messageResponse.appendChild(messageItem);
}
