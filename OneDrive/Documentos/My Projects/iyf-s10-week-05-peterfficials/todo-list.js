// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State - our data lives here
let todos = [];
let currentFilter = "all";
let nextId = 1;

// Create a single todo element
function createTodoElement(todo) {
    // Create li
    const li = document.createElement("li");
    if (todo.completed) {
        li.classList.add("completed");
    }

    // Create span for text
    const span = document.createElement("span");
    span.textContent = todo.text;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.dataset.id = todo.id;

    // Put it together
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.dataset.id = todo.id;

    return li;
}

// Render all todos based on current filter
function renderTodos() {
    // Clear the list
    todoList.innerHTML = "";

    // Filter todos based on current filter
    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    // Show message if no todos
    if (filteredTodos.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "No tasks here!";
        empty.style.textAlign = "center";
        empty.style.color = "#999";
        empty.style.padding = "20px";
        todoList.appendChild(empty);
    }

    // Render each todo
    filteredTodos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });

    // Update stats
    updateStats();
}

// Update items left count
function updateStats() {
    const remaining = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${remaining} item${remaining !== 1 ? "s" : ""} left`;
}

// 6. Toggle todo
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    renderTodos();
}

// 7. Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Add a new todo
function addTodo(text) {
    // Don't add empty tasks
    if (text.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create todo object
    const todo = {
        id: nextId++,
        text: text,
        completed: false
    };

    // Add to array
    todos.push(todo);
    console.log("Todo added:", todo);
    console.log("All todos:", todos);

    // Update the page
    renderTodos();

    // Clear input
    input.value = "";
}

// Delegation - handles toggle and delete
todoList.addEventListener("click", function(event) {
    const li = event.target.closest("li");
    if (!li) return;
    const id = parseInt(li.dataset.id);

    if (event.target.matches(".delete-btn")) {
        deleteTodo(id);
    }

    if (event.target.matches("span")) {
        toggleTodo(id);
    }
});
// Filter buttons
filters.forEach(filter => {
    filter.addEventListener("click", function() {
        // Remove active class from all filters
        filters.forEach(f => f.classList.remove("active"));
        
        // Add active class to clicked filter
        this.classList.add("active");
        
        // Update current filter
        currentFilter = this.dataset.filter;
        console.log("Filter changed to:", currentFilter);
        
        // Re-render
        renderTodos();
    });
});

// Clear completed button
clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);
    console.log("Cleared completed todos!");
    renderTodos();
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo(input.value);
});

// Initialize
renderTodos();