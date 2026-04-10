// Get elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask(text) {
    if (text.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create li
    const li = document.createElement("li");

    // Create task text span
    const span = document.createElement("span");
    span.textContent = text;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Put it all together
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// ONE event listener on parent ul (delegation!)
taskList.addEventListener("click", function(event) {
    // If delete button clicked
    if (event.target.matches(".delete-btn")) {
        event.target.parentElement.remove();
        console.log("Task deleted!");
    }

    // If task text clicked - toggle completed
    if (event.target.matches("span")) {
        event.target.parentElement.classList.toggle("completed");
        console.log("Task toggled!");
    }
});

// Add button click
addBtn.addEventListener("click", () => {
    addTask(taskInput.value);
});

// Press Enter to add task
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask(taskInput.value);
    }
});