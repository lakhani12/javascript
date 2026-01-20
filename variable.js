
//variable  -- temp data store (ex.flipkart,amazon taht save your date buying purpuse)

//var,let and const -- line by line comparison
// var(ES5)
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
b = 24; // never use
//let
let temp = "abc";
//const
const temp_const = "Hello World!!";

//diclerations and initialization
var d; //dicleration
d = 45; // diclare and initialization for first time
//var add value into window object
//var is function scoped
//var can be re-declared and reassigned
var name  = "user name";
let name1 = "user name";

//re-declaration reassignment
var tamp = 12;
tamp = 45; // re-declaration
var tamp ="number"; // reassignment

//scope(glogal , function, block).
var e = 23; // global scope
console.log("global scope",+e);
{
    var e = 25; // block scope
    console.log("block scope",+e);
}
function abc(){
    var e = 30; // function scope
    console.log("function scope",+e);
}
abc();
console.log("global scope",+e);

//scope(glogal , function, block).
let f = 23; // global scope
console.log("global scope",+e);
{
    let f = 25; // block scope
    console.log("block scope",+e);
}
function abc(){
    let f = 30; // function scope
    console.log("function scope",+e);
}
abc();
console.log("global scope",+e);

//temporial dead zone -- let and const
//TDZ not allow to access variable before initialization
console.log(tamp_b); // error.
var tamp_b = 12; // on var  there is no TDZ
//console.log(g); // error..
console.log(j);
let j = 45; 

//hoisting important 
// hoisting  --> when your create variable into js that braek into two part first part is declare part taht go to up of the code and second part is initialization part that stay in same place
// 1. declaration  2. initialization
// var -- hoisting is possible
// let and const -- hoisting is not possible

var tamp_d = 12; 
//var temp_d; --> undefined; --> that go to up
//tamp_d = 12; --> that go to down (means stuck into line no 71)
//if you use colsole.log before initialization it give undefined;
let temp_d_let = 45;
// let variable not use before initialization it give reference error
//if you use colsole.log before initialization it give reference error
//hoisting impact on var, let and const
/*
var -->hoist --> undefined
let -->hoist --> error
const -->hoist --> error
*/