// Task 1 — Basic Function
// Create a function called welcomeUser.
// Requirements:
// Accept name
// Print:
// Welcome Naveen
// Example:
// welcomeUser("Naveen")

console.log("Basic Function :");


function welcomeUser(name){
    console.log(`welcome ${name}`);
}

welcomeUser("Virat");


// Basic Function :
// welcome Virat

console.log("--------------------------------------------------------------------");


// Task 2 — Parameter + Return
// Create a function squareNumber.
// Requirements:
// Accept one number
// Return square value
// Example:
// squareNumber(5)
// Output:
// 25

function squareNumber(num){
    return num * num;
}

console.log(`Square of number is : ${squareNumber(5)}`);

// Square of number is : 25

console.log("--------------------------------------------------------------------");


// Task 3 — Object Function

let employee = {
    name : "virat",
    salary : 50000
}

function employeeBonus(bonus){
    return employee.salary + bonus;
}

console.log(`Employee name : ${employee.name}, Salary : ${employee.salary}`);
console.log(`Employee salary after bonus : ${employeeBonus(5000)}`);


// Employee name : virat, Salary : 50000
// Employee salary after bonus : 55000

console.log("--------------------------------------------------------------------");


// Task 4 — Scope Checking

console.log("Scope Checking :");
console.log();


function checkScope(){
    if(true){
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";
    }
    console.log(varVariable); // Accessible
    //console.log(letVariable); // ReferenceError: letVariable is not defined
    //console.log(constVariable); // ReferenceError: constVariable is not defined
}
checkScope();

// Scope Checking :

// I am a var variable


console.log("--------------------------------------------------------------------");

// Task 5 — Arrow Function
// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }

console.log("Arrow Function :");

const add = (a,b) => {
    console.log(a+b);
}

add(5,10);

// Arrow Function :
// 15

console.log("--------------------------------------------------------------------");

// Task 6 — Callback Function
// Create:
// multiply
// calculator

console.log("Callback Function :");


function multiply(a,b){
    console.log(a*b);
    
}

function calculator(calback,a,b){
    calback(a,b);
}

calculator(multiply,5,10);

// Callback Function :
// 50

console.log("--------------------------------------------------------------------");

// Task 7 — Generator Function
// Create generator function offers.

console.log("Generator Function : ");
console.log();

function* offers(){
    yield "50% OFF";
    yield "Free Delivery";
    yield "cashback";
}

const offerGenerator = offers();
console.log(offerGenerator.next().value);
console.log(offerGenerator.next().value);
console.log(offerGenerator.next().value);

// for(let offer of offers()){
//     console.log(offer);
// }


// Generator Function : 

// 50% OFF
// Free Delivery
// cashback


console.log("--------------------------------------------------------------------");

//Task 8 — Default Parameter
// Create:
// student(name,course="JavaScript")

console.log("Default Parameter :");
console.log();


function student(name, course="JavaScript"){
    console.log(`Student Name : ${name}, Course : ${course}`);
}

student("Virat");
student("Dhoni");
student("Rohit", "Python");

// Default Parameter :

// Student Name : Virat, Course : JavaScript
// Student Name : Dhoni, Course : JavaScript
// Student Name : Rohit, Course : Python

console.log("--------------------------------------------------------------------");

// Task 9 — Currying
// Create currying function for multiplication.
console.log("Currying function for multiplication :");


function m1(num1){
    return function m2(num2){
        return function m3(num3){
            return num1*num2*num3;
        }
    }
}

console.log(m1(2)(3)(4)); 


// Currying function for multiplication :
// 24


console.log("--------------------------------------------------------------------");


// Task 10 — Spread Operator
// Merge these arrays:

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let mergedArray = [...arr1, ...arr2];

console.log("Merged Array : ", mergedArray);

// Merged Array :  [ 1, 2, 3, 4, 5, 6 ]

console.log("--------------------------------------------------------------------");


// Task 11 — Object Spread
// Merge two objects:
let obj1 = { name: "Virat", age: 34 };
let obj2 = { city: "Delhi", country: "India" };

let mergedObject = { ...obj1, ...obj2 };

console.log("Merged Object : ", mergedObject);

// Merged Object :  { name: 'Virat', age: 34, city: 'Delhi', country: 'India' }

console.log("--------------------------------------------------------------------");


// Create function:
// numbers(...num)
// Requirements:
// Print all numbers
// Print total sum


function numbers(...num){
    console.log("Numbers : ", num);
    let sum = 0;
    for(let n of num){
        sum = sum + n;
    }

    console.log(`Sum of numbers : ${sum}`);
}

numbers(1,2,3,4,5);

// Numbers :  [ 1, 2, 3, 4, 5 ]
// Sum of numbers : 15


console.log("--------------------------------------------------------------------");

// Mini Challenge 🔥
// Create one small Student Management System using:
// function
// callback
// object
// array
// spread operator
// rest operator
// Features:
// Add student
// Print students
// Calculate marks
// Add bonus marks

console.log("Student Management System :");
console.log();


let students = [];

function calculateMarks(...marks){
    let total = 0;
    for(let mark of marks){
        total = total + mark;
    }   
    return total;  
}

function addBonusMarks(bonus, ...marks){
    let total = calculateMarks(...marks);
    return total + bonus;
}

function createObject(name, rollNo,...marks){
    return student = {
        name : name,
        rollNo : rollNo,
        marks : marks,
        totalMarks : calculateMarks(...marks)
    }
}


function addStudent(calback, createObject,name, rollNo,...marks){

    let student = createObject(name, rollNo,...marks);
    students.push(student);
   // console.log(student);
    
}

function printStudents(){
    for(let student of students){
        console.log(`Name : ${student.name}, Roll No : ${student.rollNo}, Marks : ${student.marks}, Total Marks : ${student.totalMarks}`);
    }   
}


addStudent(calculateMarks, createObject,"Virat", 7, 85, 90, 95);
addStudent(calculateMarks, createObject,"Dhoni", 4, 80, 85, 90);
addStudent(calculateMarks, createObject,"Rohit", 45, 75, 80, 85);


printStudents();
console.log();


console.log(`Total marks of ${students[0].name} :`,calculateMarks(...students[0].marks));
console.log();


console.log(`Total marks after adding bonus marks : ${students[0].name} :`,addBonusMarks(5, ...students[0].marks));
console.log();

// Student Management System :

// Name : Virat, Roll No : 7, Marks : 85,90,95, Total Marks : 270
// Name : Dhoni, Roll No : 4, Marks : 80,85,90, Total Marks : 255
// Name : Rohit, Roll No : 45, Marks : 75,80,85, Total Marks : 240

// Total marks of Virat : 270

// Total marks after adding bonus marks : Virat : 275


console.log("--------------------------------------------------------------------");



