function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    const timestamp = new Date().toLocaleString();
    
    newTask.innerHTML = `
        ${taskText} <span>${timestamp}</span>
        <button onclick="completeTask(this)">Complete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";
}

function completeTask(button) {
    const taskItem = button.parentElement;
    const completedTaskList = document.getElementById('completed-task-list');
    const timestamp = new Date().toLocaleString();

    taskItem.querySelector('button').remove();
    taskItem.innerHTML += ` <span>Completed: ${timestamp}</span>`;
    taskItem.classList.add('completed');
    
    completedTaskList.appendChild(taskItem);
}
