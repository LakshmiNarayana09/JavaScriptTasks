// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array

let presentStudents = ["Alice", "Bob", "Charlie"];
let absentStudents = ["David", "Eve", "Frank"];

presentStudents.push("Grace");

let allStudents= [...presentStudents, ...absentStudents];
allStudents.push("Heidi");


console.log(`Present Students : ${presentStudents}`);
console.log(`Absent Students : ${absentStudents}`);

console.log(`All Students : ${allStudents}`);


// Present Students : Alice,Bob,Charlie,Grace
// Absent Students : David,Eve,Frank
// All Students : Alice,Bob,Charlie,Grace,David,Eve,Frank,Heidi


console.log("-------------------------------------------------------------------------------------");

// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object

let mobileDetails = {
    brand: "Apple",
    model: "iPhone 13",
    price: 999
};  

let chargerDetails = {
    type: "Fast Charger",
    compatibility: "iPhone"
};

let cart = {
    ...mobileDetails,
    ...chargerDetails,
    deliveryDate: "2023-10-15"
};


for (let key in cart) {
    console.log(`${key} : ${cart[key]}`);
}


// brand : Apple
// model : iPhone 13
// price : 999
// type : Fast Charger
// compatibility : iPhone
// deliveryDate : 2023-10-15


console.log("-------------------------------------------------------------------------------------");


// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item

function orderFood(...foodItems) {
    console.log(`Total items ordered: ${foodItems.length}`);
    console.log(`First item: ${foodItems[0]}`);
    console.log(`Last item: ${foodItems[foodItems.length - 1]}`);
}

orderFood("Pizza", "Burger", "Pasta", "Salad", "Sushi");

// Total items ordered: 5
// First item: Pizza
// Last item: Sushi


console.log("-------------------------------------------------------------------------------------");

// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees


let employees = [
    { name: "Alice", department: "HR", salary: 50000 },
    { name: "Bob", department: "Engineering", salary: 60000 },
    { name: "Charlie", department: "Marketing", salary: 55000 },
    { name: "Diana", department: "Sales", salary: 52000 }
];

let highEarners = employees.filter((employee,employeeIndex,employeeArray) => employee.salary > 50000);
console.log("Employees with salary greater than 50000:");
highEarners.forEach(employee => console.log(employee.name));


// Employees with salary greater than 50000:
// Bob
// Charlie
// Diana


console.log("-------------------------------------------------------------------------------------");


// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total


let scores = [15, 92, 78, 50, 28, 34, 1, 35, 0, 12];

let totalScore = scores.reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);
console.log(`Total Score: ${totalScore}`);


//Total Score: 345


console.log("-------------------------------------------------------------------------------------");
