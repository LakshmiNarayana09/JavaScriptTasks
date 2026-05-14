// Task 1 — Student Registration Form
// Create a program using:
// prompt()
// variables (let, const)
// console.log()
// Requirements:
// Ask student name
// Ask department
// Ask age
// Print all details using template string

let name = prompt("Please enter your name:");
let department = prompt("Please enter your department:");
let age = prompt("Please enter your age:");

console.log(`Welcome ${name}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);


// Output:
// Welcome Virat
// Department: IT
// Age: 24


console.log("--------------------------------------------------------------------------------");


// Task 2 — ATM Withdrawal System
// Use:
// if else
// comparison operators
// logical operators
// Requirements:
// User balance = 10000
// Ask withdrawal amount
// If amount <= balance → "Transaction Successful"
// Else → "Insufficient Balance"
// Bonus:
// Minimum withdrawal = 100


let balance = 10000;
let withdrawalAmount = prompt("Please enter the amount you wish to withdraw:"); 
withdrawalAmount = parseFloat(withdrawalAmount); // Convert input to a number

if (withdrawalAmount < 100) {
    console.log("Minimum withdrawal amount is 100.");
} else if (withdrawalAmount > balance) {
    console.log("Insufficient Balance.");
} else {
    console.log("Transaction Successful."); 
}



console.log("--------------------------------------------------------------------------------");


// Task 3 — Swiggy Discount Checker
// Use:
// ternary operator
// Requirements:
// If order amount > 499
// Show:
// "Free Delivery Available"
// Else:
// "Delivery Charges Applied"


let orderAmount = prompt("Please enter the order amount:");
orderAmount = parseFloat(orderAmount); // Convert input to a number
console.log(orderAmount>499?"Free Delivery Available":"Delivery Charges Applied");


console.log("--------------------------------------------------------------------------------");


// Task 4 — Instagram Login System
// Use:
// nested if
// Requirements:
// Correct username = "admin"
// Correct password = "1234"
// Conditions:
// If username correct → ask password
// If password correct → Login Success
// Else → Wrong Password
// Else → Invalid Username


let userName = prompt("Please enter your name:");
userName = userName.toLowerCase(); 
if(userName === "admin"){
    let password = prompt("Please enter your password:");
    if(password === "1234"){
        console.log("Login Successful");
    } else {
        console.log("Incorrect Password");
    }
}
else{
    console.log("Invalid Username");
}


console.log("--------------------------------------------------------------------------------");


// Task 5 — Traffic Signal System
// Use:
// switch statement
// Requirements:
// Input:
// red / yellow / green
// Output:
// STOP
// READY
// GO


let signal = prompt("Please enter the traffic signal color (red, yellow, green):");
signal = signal.toLowerCase();

switch(signal){
    case "red":
        console.log("Stop");    
        break;
    case "yellow":
        console.log("Ready");       
        break;
    case "green":
        console.log("Go");  
        break;
    default:
        console.log("Invalid Signal Color");
}   



console.log("--------------------------------------------------------------------------------");


// Task 6 — Employee Salary Calculator
// Use:
// function
// parameters
// return
// Requirements:
// Create function salaryCalculation
// Basic salary + bonus
// Return total salary
// Example:
// salaryCalculation(25000,5000)
// Output:
// 30000


let salary = prompt("Please enter your salary:");
let bonus = prompt("Please enter your bonus:");
salary = parseFloat(salary);
bonus = parseFloat(bonus);

function salaryCalculation(salary,bonus){
    return salary + bonus;
}

console.log(`Total salary is: ${salaryCalculation(salary, bonus)}`);


console.log("--------------------------------------------------------------------------------");


// Task 7 — E-Commerce Cart Total
// Use:
// Array
// for loop
// Requirements:
// Store product prices inside array:
// [100,200,300,400]
// Find:
// Total price
// Average price



let storeProductsPrices = [100, 200, 300, 400, 500];
let totalPrice = 0;
let noOfProducts = storeProductsPrices.length;
for(let i=0; i<storeProductsPrices.length; i++){
    totalPrice += storeProductsPrices[i];
}
console.log(`Total price of all products is: ${totalPrice}`);
console.log(`The Average Price Of All Products is: ${totalPrice/noOfProducts} `);


// Output:
// Total price of all products is: 1500
// The Average Price Of All Products is: 300 


console.log("--------------------------------------------------------------------------------");


// Task 8 — WhatsApp Contact Book
// Use:
// Object
// for in loop
// Requirements:
// Store:
// name
// phone
// status
// Print all details dynamically.


let object1 = {
    name: "John",
    phone: "1234567890",
    status: "active"
}

let object2 = {
    name: "Virat",
    phone: "1234567220",
    status: "active"
}

for(let key in object1){
    console.log(`${key}: ${object1[key]}`);
}   

console.log();

for(let key in object2){
    console.log(`${key}: ${object2[key]}`);
}


// Output:
// name: John
// phone: 1234567890
// status: active

// name: Virat
// phone: 1234567220
// status: active


console.log("--------------------------------------------------------------------------------");


// Task 9 — Movie Ticket Booking
// Use:
// function
// callback function
// Requirements:
// Create:
// bookTicket()
// payment()
// After booking complete,
// callback payment function automatically.



function bookTicket(payment){
    payment;
    console.log("Booking Completed...");  
}

function payment(){
    console.log("Payment successful");
}

bookTicket(payment());


// Output:
// Payment successful
// Booking Completed...


console.log("--------------------------------------------------------------------------------");



function* generatorFunction() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let orderStatus = generatorFunction();
console.log(orderStatus.next().value);
console.log(orderStatus.next().value);
console.log(orderStatus.next().value);
console.log(orderStatus.next().value);  

// for(let order of generatorFunction()){
//     console.log(order);
// }  

// Output:
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered

console.log("--------------------------------------------------------------------------------");
