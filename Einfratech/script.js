function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskSpan = taskItem.querySelector('span');
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText;
    }
}
