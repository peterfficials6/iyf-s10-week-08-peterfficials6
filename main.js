

let myName = "Peter";
console.log("My name is: " + myName);

let myAge = 23;
console.log("My age is: " + myAge);

let isStudent = true;
console.log("I am a student: " + isStudent);

let favoriteColors = ["red", "blue", "green"];
console.log("My favorite colors:", favoriteColors);

let today = new Date();
console.log("Today is:", today);


// Number Operations
let a = 10;
let b = 3;

console.log("Addition:", a + b);        
console.log("Subtraction:", a - b);     
console.log("Multiplication:", a * b);  
console.log("Division:", a / b);        
console.log("Remainder:", a % b);       
console.log("Power:", a ** b);        

// Increment / Decrement
let count = 0;
count++;
console.log("After count++:", count);  
count--;
console.log("After count--:", count);  

// String Operations
let firstName = "Peter";
let lastName = "Kamau";

// Joining strings together
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Template literals (the modern cleaner way)
let greeting = `Hello, ${firstName}!`;
console.log(greeting);

let message = `Your name has ${firstName.length} characters.`;
console.log(message);

// String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First letter:", firstName.charAt(0));
console.log("Includes Kamau?", fullName.includes("Kamau"));

// Comparison Operators
console.log("5 > 3:", 5 > 3);      
console.log("5 < 3:", 5 < 3);       
console.log("5 === 5:", 5 === 5);   
console.log("5 == '5':", 5 == "5"); 
console.log("5 !== 3:", 5 !== 3);   

// Logical Operators
console.log("true AND true:", true && true);   
console.log("true AND false:", true && false);
console.log("true OR false:", true || false);  
console.log("NOT true:", !true);                

// Age Calculator Challenge
myAge = 23; // change this to your age

// Your age in days
let ageInDays = myAge * 365;
console.log("My age in days:", ageInDays);

// Your age in hours
let ageInHours = ageInDays * 24;
console.log("My age in hours:", ageInHours);

// The year you'll turn 100
let currentYear = 2026;
let yearTurn100 = currentYear + (100 - myAge);
console.log("I will turn 100 in the year:", yearTurn100);

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Peter"));

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));

// 3. Arrow Function (short version)
const multiply = (a, b) => a * b;
console.log(multiply(5, 4));

// 4. Arrow Function (with body)
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};
console.log(divide(10, 2));
console.log(divide(10, 0));

function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10));

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(0));

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7));  

function getInitials(fullName) {
    let words = fullName.split(" ");
    let initials = words[0][0] + words[1][0];
    return initials.toUpperCase();
}
console.log(getInitials("John Doe")); 
console.log(getInitials("Peter Pan")); 

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); 
console.log(reverseString("Peter")); 

// Default Parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());                
console.log(greet("Peter"));         
console.log(greet("Bob", "Hi"));     

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(calculateTip(100));     
console.log(calculateTip(100, 20)); 
console.log(calculateTip(200)); 

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(getGrade(95)); 
console.log(getGrade(85)); 
console.log(getGrade(75)); 
console.log(getGrade(65)); 
console.log(getGrade(50)); 
console.log(getGrade(45)); 

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(0)); 
console.log(getDayName(3)); 
console.log(getDayName(5)); 
console.log(getDayName(7));

// 1. For Loop
console.log("--- For Loop ---");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. While Loop
console.log("--- While Loop ---");
count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// 3. For...of Loop (for arrays)
console.log("--- For...of Loop ---");
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

console.log("--- Numbers 1 to 100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("--- Even Numbers 1 to 50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("--- FizzBuzz ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("--- Triangle of Stars ---");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// Calculator Functions
function calcAdd(a, b) {
    return a + b;
}

function calcSubtract(a, b) {
    return a - b;
}

function calcMultiply(a, b) {
    return a * b;
}

function calcDivide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

function calcModulus(a, b) {
    return a % b;
}

function calcPower(a, b) {
    return a ** b;
}

// Main Calculate Function
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return calcAdd(num1, num2);
        case "-":
            return calcSubtract(num1, num2);
        case "*":
            return calcMultiply(num1, num2);
        case "/":
            return calcDivide(num1, num2);
        case "%":
            return calcModulus(num1, num2);
        case "**":
            return calcPower(num1, num2);
        default:
            return "Error: Invalid operator!";
    }
}

// Tests
console.log("--- Calculator Tests ---");
console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("10 ** 2 =", calculate(10, "**", 2));
console.log("10 ? 5 =", calculate(10, "?", 5));

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);     
console.log(fruits[1]);      
console.log(fruits.length);  

// Modifying arrays
fruits.push("grape");       
console.log(fruits);      

fruits.unshift("mango");  
console.log(fruits);        

fruits.pop();            
console.log(fruits);     

fruits.shift();          
console.log(fruits);        

const nums = [1, 2, 3, 4, 5];

// forEach - do something with each element
console.log("--- forEach ---");
nums.forEach(num => console.log(num * 2));

// map - transform each element into a new array
console.log("--- map ---");
const doubled = nums.map(num => num * 2);
console.log(doubled);

// filter - keep only elements that pass the test
console.log("--- filter ---");
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);

// find - get the FIRST element that passes the test
console.log("--- find ---");
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven);

// reduce - combine all elements into one value
console.log("--- reduce ---");
const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum);

// includes - check if element exists
console.log("--- includes ---");
console.log(nums.includes(3));
console.log(nums.includes(9));

const myNumbers = [3, -2, 15, 8, -5, 12, 7, -1, 20];

// 1. Double all numbers
console.log("--- Doubled ---");
const doubledNums = myNumbers.map(num => num * 2);
console.log(doubledNums);

// 2. Filter out negative numbers
console.log("--- No Negatives ---");
const positiveOnly = myNumbers.filter(num => num > 0);
console.log(positiveOnly);

// 3. Find first number greater than 10
console.log("--- First > 10 ---");
const firstBig = myNumbers.find(num => num > 10);
console.log(firstBig);

// 4. Calculate product of all numbers
console.log("--- Product ---");
const product = myNumbers.reduce((total, num) => total * num, 1);
console.log(product);

// Creating an object
const person = {
    firstName: "peter",
    lastName: "kamau",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gsleeping"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties - two ways
console.log(person.firstName);       // Dot notation
console.log(person["lastName"]);     // Bracket notation
console.log(person.address.city);    // Nested object
console.log(person.hobbies[0]);      // Array inside object

// Modifying properties
person.age = 25;
console.log("Updated age:", person.age);

// Adding new property
person.email = "peterkamau@example.com";
console.log("Email:", person.email);

// Removing a property
delete person.isStudent;
console.log("isStudent:", person.isStudent); // undefined

const calculator = {
    // Regular function inside object
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log("Add:", calculator.add(5, 3));           // 8
console.log("Subtract:", calculator.subtract(5, 3)); // 2
console.log("Multiply:", calculator.multiply(5, 3)); // 15

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get all keys
console.log("--- Keys ---");
console.log(Object.keys(scores));    // ["math", "english", "science"]

// Get all values
console.log("--- Values ---");
console.log(Object.values(scores));  // [95, 88, 92]

// Get both keys and values together
console.log("--- Entries ---");
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ["science", 92]]

// Loop through object
console.log("--- Loop ---");
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

const students = [
    { name: "Peter", age: 22, grade: 85, major: "CS" },
    { name: "Pato", age: 20, grade: 72, major: "Math" },
    { name: "Grace", age: 23, grade: 90, major: "CS" },
    { name: "David", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log("Names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// 3. Find the student named "Charlie"
const grace = students.find(student => student.name === "Grace");
console.log("Grace:", grace);

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("Average Grade:", avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// 6. Sort by grade highest first
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Has Top Student:", hasTopStudent);

// 8. Check if all students are passing
const allPassing = students.every(student => student.grade >= 60);
console.log("All Passing:", allPassing);

const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
};

// Test Step 1
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("Students:", gradeTracker.students);
console.log("Find Alice:", gradeTracker.getStudent("Alice"));
console.log("Find Nobody:", gradeTracker.getStudent("Nobody"));