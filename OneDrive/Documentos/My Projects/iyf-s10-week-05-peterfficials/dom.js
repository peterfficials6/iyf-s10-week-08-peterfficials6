// 1. getElementById - gets ONE element by its id
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// 2. getElementsByClassName - gets ALL elements with that class
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// 3. getElementsByTagName - gets ALL elements with that tag
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// 4. querySelector - gets FIRST match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// 5. querySelectorAll - gets ALL matches
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);
// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("h1:", h1);

// 2. All elements with class "content"
const allContents = document.querySelectorAll(".content");
console.log("All contents:", allContents);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("Form:", form);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll(".nav-list li");
console.log("Nav items:", navItems);

// 6. The first nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First nav link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = document.querySelector(".content:last-of-type");
console.log("Last paragraph:", lastParagraph);
// DOM Traversal
const nav = document.querySelector("nav");

// Parent - element above
console.log("--- Parent ---");
console.log(nav.parentElement);

// Children - elements inside
console.log("--- Children ---");
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

// Siblings - elements beside each other
console.log("--- Siblings ---");
const article = document.querySelector("article");
console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

// Descendants - elements deep inside
console.log("--- Descendants ---");
const navLinks = nav.querySelectorAll("a");
console.log(navLinks);
// 1. Select header then navigate to nav inside it
console.log("--- Task 1 ---");
const mainHeader = document.getElementById("main-header");
const navInsideHeader = mainHeader.querySelector("nav");
console.log("Nav inside header:", navInsideHeader);

// 2. Select first nav-link then get its parent li
console.log("--- Task 2 ---");
const navLink = document.querySelector(".nav-link");
const parentLi = navLink.parentElement;
console.log("Parent li:", parentLi);

// 3. Select article then get its next sibling (section)
console.log("--- Task 3 ---");
const mainArticle = document.querySelector("article");
const nextSection = mainArticle.nextElementSibling;
console.log("Next sibling (section):", nextSection);

// 4. Select ul then get all its child li elements
console.log("--- Task 4 ---");
const navList = document.querySelector(".nav-list");
const allLiItems = navList.children;
console.log("All li items:", allLiItems);

// 5. Start from footer and navigate up to body
console.log("--- Task 5 ---");
const footer = document.querySelector("footer");
const mainElement = footer.parentElement;
console.log("Parent of footer:", mainElement);
// Text Content
console.log("--- Reading Text ---");
const mainH1 = document.querySelector("h1");
console.log("textContent:", mainH1.textContent);
console.log("innerText:", mainH1.innerText);

// Modifying text
mainH1.textContent = "Hello DOM!";
console.log("After change:", mainH1.textContent);
// HTML Content
console.log("--- Reading HTML ---");
const MainArticle = document.querySelector("article");
console.log("innerHTML:", mainArticle.innerHTML);

// Modifying HTML
//mainArticle.innerHTML = `
//    <h2>Updated Article</h2>
//    <p>This is new content.</p>
//    <p>JavaScript changed this!</p>
//`;

// Safer way - textContent escapes HTML
console.log("--- Safe way ---");
//const safeDiv = document.querySelector("section");
const userInput = "<strong>This won't be bold</strong>";
//safeDiv.textContent = userInput; // displays as text not HTML
// Attributes
console.log("--- Attributes ---");
const navAnchor = document.querySelector(".nav-link");

// Get attribute
console.log("href:", navAnchor.getAttribute("href"));

// Set attribute
navAnchor.setAttribute("href", "https://google.com");
console.log("New href:", navAnchor.getAttribute("href"));

// Check attribute
console.log("Has target?", navAnchor.hasAttribute("target"));

// Remove attribute
navAnchor.setAttribute("target", "_blank"); // first add it
console.log("Has target now?", navAnchor.hasAttribute("target"));
navAnchor.removeAttribute("target");        // now remove it
console.log("Has target after remove?", navAnchor.hasAttribute("target"));
// Styles
console.log("--- Styles ---");
const container = document.querySelector(".container");

// Changing individual styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";
container.style.border = "2px solid blue";

// Changing multiple styles at once
const mainNav = document.querySelector("nav");
Object.assign(mainNav.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    borderRadius: "5px"
});
// Creating Elements
console.log("--- Creating Elements ---");

// Step 1: Create a new element
const newParagraph = document.createElement("p");

// Step 2: Add content to it
newParagraph.textContent = "This is a new paragraph!";

// Step 3: Add a class to it
newParagraph.className = "content highlight";

// Step 4: Add it to the page
const mainArt = document.querySelector("article");
mainArt.appendChild(newParagraph);  // Add at end
// Different ways to insert elements
const newHeading = document.createElement("h3");
newHeading.textContent = "I was added by JavaScript!";

// prepend - adds as FIRST child
mainArt.prepend(newHeading);

// append - adds as LAST child
const newSpan = document.createElement("span");
newSpan.textContent = " 👈 I am a span!";
mainArt.append(newSpan);
// Removing Elements
console.log("--- Removing Elements ---");

// Method 1: Remove element directly
const mainFooter2 = document.querySelector("footer");
mainFooter2.remove();
console.log("Footer removed!");

// Method 2: Remove a child element
const navList2 = document.querySelector(".nav-list");
const lastNavItem = navList2.querySelector("li:last-child");
lastNavItem.remove();
console.log("Last nav item removed!");

// Method 3: Clear all children
const newDiv = document.createElement("div");
newDiv.innerHTML = `
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
`;
document.body.appendChild(newDiv);
console.log("Before clear:", newDiv.innerHTML);
newDiv.innerHTML = "";
console.log("After clear:", newDiv.innerHTML);
// Cloning Elements
console.log("--- Cloning Elements ---");

// Clone an existing element
const navItem = document.querySelector(".nav-link").parentElement;
console.log("Original:", navItem);

// cloneNode(true) = deep clone (copies everything inside too)
const clone1 = navItem.cloneNode(true);
clone1.querySelector("a").textContent = "Blog";
clone1.querySelector("a").href = "/blog";

const clone2 = navItem.cloneNode(true);
clone2.querySelector("a").textContent = "Portfolio";
clone2.querySelector("a").href = "/portfolio";

// Add clones to nav list
const navList3 = document.querySelector(".nav-list");
navList3.appendChild(clone1);
navList3.appendChild(clone2);
// Build: Add nav items dynamically
function addNavItem(text, href) {
    // Create li element
    const li = document.createElement("li");
    
    // Create a element inside li
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    
    // Put a inside li
    li.appendChild(a);
    
    // Add li to nav list
    const navList4 = document.querySelector(".nav-list");
    navList4.appendChild(li);
}

// Test it!
addNavItem("Services", "/services");
addNavItem("Contact Us", "/contact");
// Create a button dynamically
const myButton = document.createElement("button");
myButton.textContent = "Click Me!";
myButton.style.padding = "10px 20px";
myButton.style.fontSize = "16px";
myButton.style.cursor = "pointer";
document.body.appendChild(myButton);

// Method 1: Anonymous function
myButton.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Method 2: Arrow function
myButton.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Method 3: Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
myButton.addEventListener("click", handleClick);

// Removing an event listener
myButton.removeEventListener("click", handleClick);
// Mouse Events
console.log("--- Mouse Events ---");
myButton.addEventListener("mouseenter", () => {
    myButton.style.backgroundColor = "blue";
    myButton.style.color = "white";
    console.log("Mouse entered button!");
});

myButton.addEventListener("mouseleave", () => {
    myButton.style.backgroundColor = "";
    myButton.style.color = "";
    console.log("Mouse left button!");
});

myButton.addEventListener("dblclick", () => {
    console.log("Double clicked!");
});

// Keyboard Events
console.log("--- Keyboard Events ---");
document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

document.addEventListener("keyup", (event) => {
    console.log("Key released:", event.key);
});

// Window Events
console.log("--- Window Events ---");
window.addEventListener("resize", () => {
    console.log("Window resized! Width:", window.innerWidth);
});

window.addEventListener("scroll", () => {
    console.log("Page scrolled! Position:", window.scrollY);
});
// Click Counter
console.log("--- Click Counter ---");

// Create counter display
const counterDisplay = document.createElement("h2");
counterDisplay.textContent = "Count: 0";
counterDisplay.style.textAlign = "center";
document.body.appendChild(counterDisplay);

// Create buttons container
const buttonsDiv = document.createElement("div");
buttonsDiv.style.textAlign = "center";
document.body.appendChild(buttonsDiv);

// Create + button
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";
increaseBtn.style.padding = "10px 20px";
increaseBtn.style.fontSize = "20px";
increaseBtn.style.margin = "5px";
buttonsDiv.appendChild(increaseBtn);

// Create - button
const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";
decreaseBtn.style.padding = "10px 20px";
decreaseBtn.style.fontSize = "20px";
decreaseBtn.style.margin = "5px";
buttonsDiv.appendChild(decreaseBtn);

// Create reset button
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.style.padding = "10px 20px";
resetBtn.style.fontSize = "20px";
resetBtn.style.margin = "5px";
buttonsDiv.appendChild(resetBtn);

// Counter state
let count = 0;

// Event listeners
increaseBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
    counterDisplay.style.color = "green";
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {  // Cannot go below 0!
        count--;
        counterDisplay.textContent = `Count: ${count}`;
        counterDisplay.style.color = count === 0 ? "black" : "red";
    } else {
        counterDisplay.style.color = "red";
        console.log("Count cannot go below 0!");
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = "Count: 0";
    counterDisplay.style.color = "black";
});
// Event Object
console.log("--- Event Object ---");

// Click event object
//document.addEventListener("click", function(event) {
//    console.log("--- Click Info ---");
//    console.log("What was clicked:", event.target);
//    console.log("Event type:", event.type);
//    console.log("X position:", event.clientX);
//    console.log("Y position:", event.clientY);
//});

// Keyboard event object
document.addEventListener("keydown", function(event) {
    console.log("--- Key Info ---");
    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("Shift held?", event.shiftKey);
    console.log("Ctrl held?", event.ctrlKey);
    console.log("Alt held?", event.altKey);
});
// Keyboard Shortcuts
console.log("--- Keyboard Shortcuts ---");

document.addEventListener("keydown", function(event) {

    // Ctrl+S: Show "Saved!" message
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Stop browser save dialog
        console.log("💾 Saved!");
        
        // Show saved message on page
        const savedMsg = document.createElement("div");
        savedMsg.textContent = "💾 Saved!";
        savedMsg.style.position = "fixed";
        savedMsg.style.top = "20px";
        savedMsg.style.right = "20px";
        savedMsg.style.backgroundColor = "green";
        savedMsg.style.color = "white";
        savedMsg.style.padding = "10px 20px";
        savedMsg.style.borderRadius = "5px";
        savedMsg.style.fontSize = "16px";
        document.body.appendChild(savedMsg);

        // Remove message after 2 seconds
        setTimeout(() => savedMsg.remove(), 2000);
    }

    // Escape: Clear all form inputs
    if (event.key === "Escape") {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
        console.log("🧹 Form cleared!");
    }

    // Ctrl+Enter: Submit form
    if (event.ctrlKey && event.key === "Enter") {
        const contactForm = document.getElementById("contact-form");


    }
});
// Event Bubbling
console.log("--- Event Bubbling ---");

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("%c 3. Grandparent clicked", "color: red; font-size: 16px");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("%c 2. Parent clicked", "color: green; font-size: 16px");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("%c 1. Child clicked", "color: blue; font-size: 16px");
});
// Simple bubble test
const childDiv = document.getElementById("child");
console.log("Child div found?", childDiv);

if (childDiv) {
    childDiv.addEventListener("click", () => {
        alert("Child was clicked!"); // popup alert
    });
} else {
    console.log("ERROR: child div not found!");
}
console.log("Testing IDs...");
console.log("grandparent:", document.getElementById("grandparent"));
console.log("parent:", document.getElementById("parent"));
console.log("child:", document.getElementById("child"));
// Event Delegation
console.log("--- Event Delegation ---");

// Create a list
const taskList = document.createElement("ul");
taskList.id = "task-list";
taskList.style.listStyle = "none";
taskList.style.padding = "20px";
document.body.insertBefore(taskList, document.querySelector("script"));

// Add some items
const tasks = ["Buy groceries", "Walk the dog", "Read a book"];
tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    li.style.padding = "10px";
    li.style.margin = "5px";
    li.style.backgroundColor = "#eee";
    li.style.cursor = "pointer";
    taskList.appendChild(li);
});

// BAD way - adds listener to EACH item
// tasks.forEach(li => li.addEventListener("click", handler));

// GOOD way - ONE listener on the parent
taskList.addEventListener("click", function(event) {
    if (event.target.matches("li")) {
        event.target.style.backgroundColor = 
        event.target.style.backgroundColor === "green" ? "#eee" : "green";
        console.log("Task clicked:", event.target.textContent);
    }
});
// Form Handling
console.log("--- Form Handling ---");

const contactForm = document.getElementById("contact-form");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");

// Helper functions
function showError(input, message) {
    input.classList.add("error");
    input.classList.remove("success");

    // Check if error message already exists
    let errorMsg = input.nextElementSibling;
    if (!errorMsg || !errorMsg.classList.contains("error-msg")) {
        errorMsg = document.createElement("p");
        errorMsg.className = "error-msg";
        input.parentElement.insertBefore(errorMsg, input.nextSibling);
    }
    errorMsg.textContent = message;
}

function clearError(input) {
    input.classList.remove("error");
    input.classList.add("success");

    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains("error-msg")) {
        errorMsg.remove();
    }
}

// Real time name validation
formName.addEventListener("input", function(event) {
    const value = event.target.value;
    if (value.length < 2) {
        showError(formName, "Name must be at least 2 characters!");
    } else {
        clearError(formName);
    }
});

// Real time email validation
formEmail.addEventListener("blur", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        showError(formEmail, "Please enter a valid email!");
    } else {
        clearError(formEmail);
    }
});

// Form submission
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameValue = formName.value;
    const emailValue = formEmail.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate before submitting
    if (nameValue.length < 2) {
        showError(formName, "Name must be at least 2 characters!");
        return;
    }

    if (!emailRegex.test(emailValue)) {
        showError(formEmail, "Please enter a valid email!");
        return;
    }

    // Success!
    const successMsg = document.createElement("p");
    successMsg.className = "success-msg";
    successMsg.textContent = "✅ Form submitted successfully!";
    contactForm.appendChild(successMsg);
    console.log("Form submitted!", { name: nameValue, email: emailValue });

    // Reset form after 2 seconds
    setTimeout(() => {
        contactForm.reset();
        successMsg.remove();
        nameInput.classList.remove("success");
        emailInput.classList.remove("success");
    }, 2000);
});