// JavaScript Tasks – Type Casting & Flow Control
// Task 1 – Predict the Output
// Write the output and datatype for below:
console.log("Predict the Output:");

console.log("10" + 5)   //105
console.log(10 + true)  //11
console.log(false + null)   //0
console.log("Hello" + undefined)    //Helloundefined
console.log([1,2] + 5)  //1,25
console.log("--------------------------------------------------------------------------------------------------------------")


// Task 2 – Implicit Type Casting
// Create examples for:

console.log("Implicit Type Casting");

// 1.String + Number

console.log("Hi"+10);   //Hi10

// 2.Boolean + Number

console.log(true+5);    //6

// 3.Array + String

console.log([1, 2, 3]+"Hi");  //1,2,3Hi

// 4.Object + Number

console.log({key:9}+1); //[Object Object]1

//5.Null + Number

console.log(null + 5);  //5

// Print datatype using typeof.

console.log("Type is :"+typeof("Hi"+10));   //string
console.log("Type is :"+typeof(true+5));    //number
console.log("Type is :"+typeof([1, 2, 3]+"Hi"));    //string
console.log("Type is :"+typeof({key:9}+1)); //string
console.log("Type is :"+typeof(null + 5));  //number
console.log("--------------------------------------------------------------------------------------------------------------")

// Task 3 – Explicit Type Casting

console.log("Explicit Type Casting");

// Convert the following into Number:


// "500"
console.log("Before Type is :"+typeof("500"));//string 
console.log(Number("500")); //500
console.log("After Type is :"+typeof(Number("500"))); //number
console.log();

//true
console.log("Before Type is :"+typeof(true));//boolean
console.log(Number(true));  //1
console.log("After Type is :"+typeof(Number(true)));
console.log();


//false
console.log("Before Type is :"+typeof(fasle));//boolean
console.log(Number(false)); //0
console.log("After Type is :"+typeof(Number(false)));
console.log();


//null
console.log("Before Type is :"+typeof(null));//null
console.log(Number(null));  //0
console.log("After Type is :"+typeof(Number(null)));
console.log();

//string
console.log("Before Type is :"+typeof("abc"));//string
console.log(Number("abc")); //NaN
console.log("After Type is :"+typeof(Number("abc")));
console.log();

//array
console.log("Before Type is :"+typeof([100]));//object
console.log(Number([100])); //NaN or 100
console.log("After Type is :"+typeof(Number([100]))); 
console.log("--------------------------------------------------------------------------------------------------------------")


// Task 4 – Boolean Constructor
console.log("Boolean Constructor");

// Check whether below values are true or false using Boolean().

// 1. ""
console.log(Boolean(""));   //false

//2. "javascript"
console.log(Boolean("javascript"));  //true

//3. 0
console.log(Boolean(0));    //false

//4. 1
console.log(Boolean(1));    //true

//5. null
console.log(Boolean(null)); //false

//6. undefined
console.log(Boolean(undefined));    //false

//7. []
console.log(Boolean([]));   //true

//8. {}
console.log(Boolean({}));   //true
console.log("--------------------------------------------------------------------------------------------------------------")


//Task 5 – Student Pass or Fail
console.log("Student Pass or Fail:");

// Take one variable:
// let mark = 45
// Condition:
// Above 35 → Pass
// Below 35 → Fail
// Use if else.

let mark = 28;
if(mark > 35){
    console.log("Pass");
}
else{
    console.log("Fail");
}
console.log("--------------------------------------------------------------------------------------------------------------")


//Task 6 – Voting Eligibility
console.log("Voting Eligibility:");

//Create a variable:
//let age = 20
//Conditions:
// -> 18 and above → Eligible
// -> Otherwise → Not Eligible


let age = 15;
if(age >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}
console.log("--------------------------------------------------------------------------------------------------------------")


// Task 7 – Greatest Number
console.log("Greatest Number:");
// Find greatest among 3 numbers using if else if.
// Example:
// let a = 50
// let b = 80
// let c = 30

let a = 50;
let b = 80;
let c = 30;

if(a>b && a>c){
    console.log("The greatest number is : "+a);
}
else if(b>c){
    console.log("The greatest number is : "+b);
}
else{
    console.log("The greatest number is : "+c);
}

console.log("--------------------------------------------------------------------------------------------------------------")



// Task 8 – Traffic Light System
console.log("Traffic Light System:")
// Using switch statement:
// red → stop
// yellow → ready
// green → go

let trafficSignal = "red";

switch (trafficSignal) {
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
        console.log("Problem with traffic light....")
        break;
}

console.log("--------------------------------------------------------------------------------------------------------------")


// Task 9 – Login System
console.log("Login System");

// Create variables:
// let username = "admin"
// let password = "1234"
// Conditions:
// Both correct → Login Success
// Otherwise → Invalid Login
// Use nested if.


let username = "admin";
let password = "1234";

if(username == "admin"){
    if(password == "1234"){
        console.log("Login Success");
    }
    else{
        console.log("Invalid Login");
        
    }
}
else{
    console.log("Invalid Login");
    
}

console.log("--------------------------------------------------------------------------------------------------------------")


// Task 10 – Session Finder
console.log("Session Finder:");

// Take hour value:
// let hour = 14
// Conditions:
// 1–12 → Morning
// 13–15 → Afternoon
// 16–19 → Evening
// 20–24 → Night
// Use else if.

let hour = 14;

if(hour>=1 && hour<=12){
    console.log("Morning");
}
else if(hour>=13 && hour<=15){
    console.log("Afternoon");  
}
else if(hour>=16 && hour<=19){
    console.log("Evening");
}
else if(hour>=20 && hour<=24){
    console.log("Night");
}
else{
    console.log("Give time between 1 to 24");
}

console.log("--------------------------------------------------------------------------------------------------------------")

// Bonus Challenge 🔥
// Predict outputs without running:

console.log(true + true)    //2
console.log("5" - 2)    //3
console.log("5" + 2)    //52
console.log(null + 1)   //1
console.log(undefined + 1)  //NaN
console.log(Boolean(" "))   //true
console.log(Number(true))   //1