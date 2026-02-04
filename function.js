// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement

// type of functions:
// function name(params) {} --> function declaration
function abc() {}
// let fnc = function () {} --> function expression
let fnc = function () {};
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {};

function temp_cart(){
    console.log("Adding Product");
}
temp_cart()
temp_cart()
temp_cart()

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function ( args --> function call karti () ni andar lakheli(pass) kareli values)

function cartBtn(product) { // product -- parms
    console.log("Adding", product, "to Cart");
}
cartBtn("Dell Laptop");
cartBtn("Apple 16");
cartBtn("PS5");

function cartBtn_price(product, price){
    console.log("Adding", product, "to Cart with", price);
}
cartBtn_price("Dell Laptop", 50000);
cartBtn_price("Apple 16", 56000);
cartBtn_price("PS 5", 60000);

// exercise
function plus(num1,num2) {
    console.log("Number 1 is ",num1 ,"and Number 2 is ",num2);
    add=num1+num2;
    console.log("Addition is ", add);
}
plus(1,3);

// convert into function expression
let plus_expression = function (num1,num2) {
    console.log("Number 1 is ",num1 ,"and Number 2 is ",num2);
    add=num1+num2;
    console.log("Addition is ", add);
}
plus_expression(2,3);

// convert into arrow function
let plus_arrow = (num1,num2) =>{
    console.log("Number 1 is ",num1 ,"and Number 2 is ",num2);
    add=num1+num2;
    console.log("Addition is ", add);
}
plus_arrow(3,3);
//default, rest parameters in function
//defult
function def(v1,v2){
    console.log(v1,v2);
}

function buyNow(product,price=1000){ // price is default parameter
    console.log("Buying", product, "with price", price);
}
buyNow("Iphone", 70000);

function buyNow1(product, price = 1000, color = "black") {
    console.log("Buying", product, "with price", price, "and color", color);
}
buyNow1("Iphone", 70000, "white");

//rest -->jayre function ma ketlak unknown number of parameters pass karva hoy tyare rest parameter use kariye
function abcd(v1, v2, v3, v4, v5, v6, v7 ,v8 ,v9 ,v10 ){
    console.log(v1, v2, v3, v4, v5, v6, v7 ,v8 ,v9 ,v10 );
}

abcd(1,2,3,4,5,6,7,8,9,10);
function abcd1(v1, v2, v3, v4, numbers){ // rest parameter
    console.log(v1, v2, v3, v4, numbers);
}
abcd1(1,2,3,4, [5,6,7,8,9,10]); // passing array as argument

function abcd1(v1, v2, v3, v4, ...numbers){ // rest parameter
    console.log("rest", numbers);
}
abcd1(1,2,3,4, 5,6,7,8,9,10); // passing multiple arguments

abcd1(1,2,3,4); // passing less arguments
abcd1(1,2,3,4,5,6); // passing more arguments

function abcd2(alfabets){ // rest parameter
    console.log("rest", numbers);
}
//return statement
function temp_fnc(){
    if (10>9)return"true";
}
temp_fnc();
//first class functions;
//functions can be treated as values
//let fnc1 = function () {} --> function expression
//let fnc2 = () => {} --> arrow function
const cart5 = function (product,price) {
    console.log(`Adding ${product} to Cart with price ${price}`);
};
cart5("Dell Laptop", 50000);
const cart6 = (product, price) => {
    console.log(`Adding ${product} to Cart with price ${price}`);
};
cart6("Apple 16", 56000);
//functions can be passed as arguments to other functions
function fnc_2(params){
    params(); //args function
}
fnc_2(() => {
    console.log("sum of",1+2)
});//function agrs --> function

//function can be returned from other functions
function temp_fnc3(){
    return function fnc4(){
    console.log("function 4");
    // return functionn can be  return from anther function"
}
}
console.log(temp_fnc3()());

//higher ordr function(HOF)
// function that takes another function as an argument or function as a result (eva function je kare ek function athava acpect kare ek function parms ma)

//functon abcd(val){val();}
//-->abcd(function(){comnsole.log("hello")})
//function abcd(val){} --> higher order function

//function abcd(){return functon(){} } abcd()()--> higher order

//pure vs impure function
//purefunction --> function j same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)
let temp_a = 20;//state
function temp_change(){
    return "hello";
} // -->pure function
console.log(temp_change());

console.log("value of tem_a before change:",temp_a);

//impure function --> functon je same input par different output aapse athva bahar na state na modify kare (impure function bahar na state na modify kare)
function temp_change1(){
    temp_a++;
}
temp_change1();
console.log("value of temp_a after change",temp_a);

temp_change1();
console.log("value of temp_a after change",temp_a);

temp_change1();
console.log("value of temp_a after change",temp_a);

temp_change1();
console.log("value of temp_a after change",temp_a);

//closure function 
//function je potana function na variable ne access kari shake (return thava valo function use karshe parent function na koi variable (function  within function))
function outer(){
    let outer_var = 50;//parent function variable
    function inner(){
        outer_var--;
        console.log(outer_var);//child function console log
    }
    return inner();
}
console.log(outer())

function outer1(){
    let outer_var = 50;//parent function variable
    function inner(){
        outer_var+=2;outer_var++;
         
        console.log(outer_var);//child function console log
    }
    return inner();
}
console.log(outer1())

//lexical scope --> nested function can access variables declared in their scope
function outer2(){}
    let temp_outer ="outer function variable";
    function inner1(){
        let temp_inner = "inner function variable";
    console.log(temp_outer);
    function most_inner(){
        console.log("most_innre function output",temp_outer);
        console.log("most_inner function output",temp_inner);
         function most_dipper(){
    }
    most_inner();
    function most_dipper(){
       
    }
}
inner1();
}
outer2();

//IIFE - immediately invoked functon expression
(function (){})();//function j declare karta j call thy jaye
(function temp_IIFE() {
    console.log("IIFE function")
})();

//hoisting in function
// temp_abc();
// function temp_abc(){
//     console.log("hosited function")
// }
// temp_fns();
// let temp_fns = () => {
//     console.log("hosited function")
// } 

//exersise

// //EX1 What's the difference between function declaration and function expression in terms of hoisting?</p>

// greet();
// function greet(){
//   console.log("Hello");
// }

// const greet1 = function() {
//   console.log("Hello");
// };greet1();

// Why:Declarations are loaded into memory during compilation. Expressions depend on variable assignment, which happens at runtime.

// Example 2:

// bc2();
// function bc2(){
//     console.log("Hello!");
// }
// 
// Example 3:
// function add(a, b){
//   return a + b;
// }
// // const add = (a, b) => a + b;

// EX 4:
// function welcome(name){
//   console.log("Welcome " + name);
// }

// welcome("user");
// Why:Parameters are variables listed in the function definition
// Arguments are actual values passed when calling the function


// Example 5

// function temp (a, b, c){
//   console.log(a,b,c);
// }

// temp(1, 2);

// ANS:1 2 undefined
// Why:Missing arguments default to undefined in JavaScript.

// Example 6
// function temp_user(name = "Guest"){
//   console.log("Hello " + name);
// }

// temp_user();
// ANS:HELLO GUEST
// Why:If no argument is passed, the default parameter "Guest" is used

// Example 7
// What is ... operator (Rest Parameter)?
// function number(...numbers){
//   console.log(numbers);
// }

// number(1, 2, 3, 4, 5);
// ans:[1, 2, 3, 4, 5]

// why:...numbers collects all arguments into an array

// Used when you don’t know how many arguments will be passed

// Example 8
// Rest parameters – find errors
// First version (ERROR)
// for(let i = 0; i <= scores.length; i++){
//   total += scores[i];
// }

// ans : console.
// why:Loop runs one extra time
// scores[scores.length] is undefined
// Adding undefined → NaN

// Example 9
// Fix using Early Return

// Original

// function checkAge(age){
//   if(age < 18){
//     console.log("Too Young");
//   } else {
//     console.log("Access Granted");
//   }
// }


// // Using Early Return

// function checkAge(age){
//   if(age < 18){
//     console.log("Too Young");
//     return;
//   }
//   console.log("Access Granted");
// }


// // Why:Makes code cleaner
// // Avoids unnecessary else
// // Improves readability


// Example 9
// Fix using Early Return

// Original

// function checkAge(age){
//   if(age < 18){
//     console.log("Too Young");
//   } else {
//     console.log("Access Granted");
//   }
// }


// // Using Early Return

// function checkAge(age){
//   if(age < 18){
//     console.log("Too Young");
//     return;
//   }
//   console.log("Access Granted");
// }

// // Why:
// // Makes code cleaner
// // Avoids unnecessary else
// // Improves readability

// // Example 10
// function f(){ 
//   return;
// }


// // Ans: undefined
// // Why:A return without a value always returns undefined in JavaScript0  P

// Example 11
// What does “functions are first-class citizens” mean?

// Ans:
// In JavaScript, functions are treated like normal values.

// Why:
// Because functions can be:

// Assigned to variables

// Passed as arguments

// Returned from other functions

// Stored in arrays/objects

// Example 12
// let a = function(){
//   console.log("Hello");
// }
// a();


// Ans:  "Hello"
// Why:Functions can be stored in variables (function expression).
// Calling a() executes the function stored in a.

// Example 13
// function abcd(val){
//   val();
// }

// abcd(function(){
//   console.log("Hello");
// });
// ANS:HELLO
// Why:A function is passed as an argument
// Inside abcd, val() executes that function

// Example 14
// What is a Higher-Order Function?

// Ans:
// A higher-order function is a function that:

// Takes another function as an argument OR

// Returns a function

// Why:
// Because functions are first-class citizens.

// Examples:

// map(), filter(), reduce(), forEach()

// Example 16
// Pure or Impure Function?
let total = 5;

function num(num3){
  total += num3;
}

num(3);


// Ans: ❌ Impure Function

// Why:

// It depends on external variable (total)

// It modifies outside state

// Same input does not guarantee same output

// Example 18
// What is Closure? When is it created?

// Ans:
// A closure is when a function remembers variables from its outer scope, even after the outer function has finished execution.

// When created:
// At the moment a function is defined, not executed.

// Example:

// function outer(){
//   let x = 10;
//   return function inner(){
//     console.log(x);
//   }
// }
// Example 19
// Predict the output
// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter();
// counter();


// Output:

// 1
// 2


// Err: ❌ No error

// Why:

// count is preserved via closure

// Each call updates the same count variable
// Example 20
// Convert to IIFE

// Original

// function init(){
//     console.log("Initialized");
// }


// IIFE Version

// (function(){
//   console.log("Initialized");
// })();


// Why:

// Runs immediately

// Avoids polluting global scope

// Example 21
// Use of IIFE + Real-World Use Case
// let fun = (function(){
//     let score = 0;
//     return {
//         getScore: function(){
//             console.log(score);
//         },
//         setScore: function(val){
//             score = val;
//         }
//     }
// })();


// Ans:

// Used to create private variables

// Implements data encapsulation

// Why (Real-world use):

// Hiding internal data (like counters, configs)

// Module pattern before ES6 modules


// Example 22
// temp_var();

// var temp_var = function(){
//     console.log("Hello");
// }


// Ans: Error → temp_var is not a function

// Why:

// var temp_var is hoisted as undefined

// Function expression is not hoisted

// Calling undefined() throws an error

//  Example 23
// temp_var();

// function temp_var(){
//     console.log("Hello");
// }


// Ans: "Hello"
// Err: No error

// Why:

// Function declarations are fully hoisted

// Function is available before execution