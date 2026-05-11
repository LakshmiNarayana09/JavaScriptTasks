//Section 1: Variables (1–8)
//1.What is the output?
var a = 10;
a = 15;
console.log(a); //15

//2.What happens here?
let b = 20;
//let b = 30;    // Error -> Redeclration is not possible

//3.What is the output?
const c = 50;
console.log(c); //50

//4.Identify error:
const x = 10;
//x = 20;       Error -> It can't accept Reuse or Reintialiazation 

//5.Output?
var p = 5;
var p = 10;
console.log(p);  //10


//6.Output?
let q = 25;
q = q + 10;
console.log(q); //35

//7.Output?
const r = 7;
console.log(r + 3);//10

//8.Fill correct keyword:
//___ a = 10;

var a = 10;

//--------------------------------------------------------------------------------------------------------------

//Section 2: Console Methods (9–12)
//9.Which method prints normal output?

console.log();

//10.Which method shows warning?

console.warn();

//11.Which method shows error?

console.error();

//12.What does this do?
console.clear();        // This will clear the console.

//--------------------------------------------------------------------------------------------------------------

//Section 3: Data Types (13–18)

//13.Output?
let a = "hello";
console.log(typeof a); //string

//14.Output?
let b = 100;
console.log(typeof b); //number

//15.Output?
let c = false;
console.log(typeof c); //boolean

//16.Output?
let d;
console.log(d);  //undefined

//17.What is type of null?
// when ever i call the varible it will return zero or nothing than it means 'Null'.
//If a variable is intentionally set to have no value, we use null.

//18.Convert string to number:
//"25"
var num = "25";
console.log(typeof(num));
num = Number(num);
console.log(typeof(num));

//--------------------------------------------------------------------------------------------------------------

//Section 4: Arrays (19–24)

//19.Create array of 3 fruits.

var fruits = ["Apple","Banana","Mango"];
console.log(fruits);

//20.Output?
let arr = ["a","b","c"];
console.log(arr[1]);        //b

//21.Output?
let arr = ["x","y","z"];
console.log(arr[arr.length-1]); //z

//22.How to get first element?
console.log(arr[0]);

//23.Output?
let arr = ["apple","banana"];
console.log(arr.length);       //2

//24.Add new element to array.

let arr = ["apple,banana"];
//arr.push("mango");
arr[arr.length] = "mango";
arr[arr.length] = "orange";

console.log(arr);

//--------------------------------------------------------------------------------------------------------------

// Section 5: Objects (25–28)

// 25.Create object with name & age.

let person = {
    name : ["virat","Rohit"],
    age : [34,36]
}

console.log(person);

//26.Output?
let obj = {name:"Naveen"};
console.log(obj.name);        //Naveen

//27.Output?
let obj2 = {
  fruits: ["apple","banana"]
};
console.log(obj2.fruits[1]); //banana

//28.How to access last element inside object array?
let person = {
    name : ["virat","Rohit"],
    age : [34,36]
}

console.log(person.name[0],person.age[0]);

//--------------------------------------------------------------------------------------------------------------

// Section 6: Arithmetic Operators (29–32)

//29.Output?
console.log(5 + 3); //8

//30.Output?
console.log(10 % 3); //1

//31.Output?
console.log(2 ** 3); //8

//32.Output?
console.log(10 / 2); //5

//--------------------------------------------------------------------------------------------------------------

//Section 7: Increment / Decrement (33–36)

//33.Output?
let a = 5;
a++;
console.log(a); //6

//34.Output?
let b = 5;
let c = b++;
console.log(b, c); //6 5

//35.Output?
let x = 5;
let y = ++x;
console.log(x, y); //6 6

//36.Output?
let m = 3;
let n = m--;
console.log(m, n);//2 3

//--------------------------------------------------------------------------------------------------------------

//Section 8: Comparison & Logical (37–39)

//37.Output?
console.log(5 == "5");  //true

//38.Output?
console.log(5 === "5");  //false

//39.Output?
console.log(true && false || true); //true

//--------------------------------------------------------------------------------------------------------------

//Section 9: Ternary (40)

//40.Output?
5 > 3 ? console.log("Yes") : console.log("No");//yes


