// Looping Statements
// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop.
console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("--------------------------------------------------------------------------------")

// 2. Odd Numbers
// Print all odd numbers from 1 to 50.
console.log("Odd numbers from 1 to 50:");
for(let i=1;i<=50;i++){
    if(i%2!==0){
       console.log(i);
    }
}

console.log("--------------------------------------------------------------------------------")


//3. Multiplication Table
//Print the multiplication table of 7.

console.log("Multiplication Table of 7:");
for(let i=1;i<=10;i++){
    console.log("7 x " + i + " = "+ (7*i));
}
console.log("--------------------------------------------------------------------------------")

//4. Reverse Counting
//Using while loop, print numbers from 20 to 1.
console.log("print numbers from 20 to 1");
let num = 20;
while(num>0){
    console.log(num);
    num--;
}

console.log("--------------------------------------------------------------------------------")

//5. Sum of Numbers
//Find the total sum of numbers from 1 to 100.
let sum = 0;
for(let i=1;i<=100;i++){
    sum = sum + i;
}
console.log("The total sum of numbers from 1 to 100 is : ",sum); //5050


console.log("--------------------------------------------------------------------------------")

//6. Array Loop
//Loop through this array and print all values.
console.log("Print all values of an array :");

let fruits = ["apple","banana","orange","grapes"];

for(let fruit of fruits){
    console.log(fruit);
}

// Print all values of an array :
// apple
// banana
// orange
// grapes

console.log("--------------------------------------------------------------------------------")

//7. Count Even Numbers
//Count how many even numbers are present between 1 to 50.

console.log("Even numbers are present between 1 to 50 is :");

let count = 0;
for(let i=1;i<=50;i++){
    if(i%2==0){
        count++;
    }
}
console.log(count);//25

console.log("--------------------------------------------------------------------------------")

//8. Star Pattern
//Print this pattern using loops:
let col = 5;
let row = 5;
let pattern = "";
for(let i=1;i<=col;i++){
    pattern = "";
    for(let j=1;j<=i;j++){
        //process.stdout.write("*");
        pattern = pattern + "*";
    }
   
    console.log(pattern);
}


console.log("--------------------------------------------------------------------------------")


// Functions
// 9. Simple Function
// Create a function named welcome() that prints:
// Welcome to JavaScript

console.log("Simple Function :");
function welcome(){
    console.log("Welcome to JavaScript");
}

welcome();//Welcome to JavaScript

console.log("--------------------------------------------------------------------------------")

// 10. Function with Parameter
// Create a function that accepts a name and prints:
// Hello Naveen

console.log("Function with Parameter :");
function greet(name){
    console.log("Hello " + name);
}

greet("Naveen"); //Hello Naveen

console.log("--------------------------------------------------------------------------------") 

// 11. Add Two Numbers
// Create a function that takes 2 numbers and returns the addition.

console.log("Add Two Numbers :");
function add(num1, num2){
    return num1+num2;
}

console.log("The addition of 5 and 10 is : ", add(5,10)); //The addition of 5 and 10 is :  15

console.log("--------------------------------------------------------------------------------")


//12. Salary Bonus
// Create a function that adds bonus to employee salary.
// Example:
// salary = 50000
// bonus = 5000
// Output:
// 55000
console.log("Salary Bonus :");
function addBonus(salary, bonus){
    return salary + bonus;
}
console.log("The total salary with bonus is : ", addBonus(50000, 5000)); //55000

console.log("--------------------------------------------------------------------------------")

// 13. Object Loop
// Print all keys and values using for in.

let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
}

for(let data in student){
    console.log(data + " : " + student[data]);
}

// name : Rahul
// course : JavaScript
// marks : 95

console.log("--------------------------------------------------------------------------------")


//Create a function to find the largest number between two values.

function findLargest(num1, num2){
    if(num1 === num2){
        return "Both numbers are equal.";
    }
    else if(num1 > num2){
        return num1 + " is the largest number.";
    }
    else{
        return num2 + " is the largest number.";
    }
}

console.log(findLargest(10,50));    //50 is the largest number.

console.log("--------------------------------------------------------------------------------")

// 15. Mini Employee Task
// Create an employee object and print:
// Employee Name
// Department
// Salary
// Salary after bonus
// Using:
// object
// function
// parameter
// console.log()

let employee = {
    Name : "Rahul",
    Department : "IT",
    salary : 50000,
    addBonus : function(bonus){
        return this.salary + bonus;
    }
}

console.log("Employee Name : ", employee.Name); //Employee Name :  Rahul
console.log("Department : ", employee.Department); //Department :  IT
console.log("Salary : ", employee.salary); //Salary :  50000
console.log("Salary after bonus : ", employee.addBonus(5000));  //Salary after bonus :  55000


console.log("--------------------------------------------------------------------------------")
