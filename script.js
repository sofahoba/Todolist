const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
let tasks = [];

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }
  tasks.push({ text: taskText, completed: false });
  taskInput.value = "";
  updateDOM();
}

function updateDOM() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleComplete(${index})">Complete</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  updateDOM();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateDOM();
}
