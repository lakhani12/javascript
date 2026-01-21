
//operators
// Arithmetic , comparison, logical, assignment, bitwise, ternary,unary
// Arithmetic operators:
// + , - , * , / , **, %
//+  --> add and concatenayion
//ex.1+2, "user"+"name"
//-
//ex. 2 - 1
// /,*
//ex. 2 * 3 , 4 / 2
// %(moduleus) --> (sheshfal) remainder
//ex. 5 % 2 = 1
//ex. 10 % 3 = 1
// **(squre)( exponentiation)
//ex. 2 ** 3 = 8

// Comparison operators:(ans : true,false).
// == , === , != , !== , > , < , >= , <=
// == (value compare only) 
//ex.12 == 13,12 == "12"(don't check type , only value compare no strict comparison)
//  ===(value and type both compare)
//ex. 12 === "12"(check type also strict comparison)
// != (not equal only value compare)
//ex. 12 != "13"(reverse of == not strict comparison)
// !== (not equal value and type both compare)
//ex. 12 !== "12"(reverse of === strict comparison)
//>=
//ex. 12 >= 13
//<=
//ex. 12 <= 13
//<
//ex. 12 < 113, 12 < 9 ,22 < 22
//>
//ex. 12 > 13 , 22 > 9 ,22 > 22


// >

//Assignment operators:
// = 
//give a value , value assignment operator
//ex. let a = 12;
// +=
//ex. a+=2; (add value  into old value and save it into a)
// -=
//ex. a-=3; (subtract value  from old value and save it into a)
// *=
//ex. a*=2; (multiply value  into old value and save it into a)
// /=
//ex. a/=2; (divide value  from old value and save it into a)
// %=
//ex. a %= 2; (modulus value  from old value and save it into a)

// Logical operators:(ans : true,false).
//&& (AND)
//ex. true && true --> true 12<13 && 14<15 --> true
//false && true --> false 12<13 && 14<15 --> false
// true && false -->false
// false && false -->false

// || (OR)
//ex. true || true --> true
// false || true --> true
// true || false -->true
// false || false -->false

// ! (NOT)
//ex. !true --> false
// !false --> true
// !12 --> false --> !!12 --> true

//unary operator:
// + - ! typeof ++ --
// + 
// convert string to number
//ex. +"12" --> 12
//+"name" --> NaN
// "5" + 5 --> "55"
//+"5" + 5 --> 10
// -
//ex.  -5
//!
//ex. !12 --> false
// typeof
// EX.typeof "name" --> "string"
//++
//ex. let a = 12
// a++ --> 13//post ex. a++ + a =>25
// ++a --> 13//pre ex. ++a + a =>27
// --
//ex. let a = 12
// a--
//a++

//ternary operator:
// ? :
// condition  ? true thase to print  thase : false thase to print these
// let a = 12>13 ? console.log("true") : console.log("false");

//typeof null --> object
//typeof [] --> object,let a =[]; a instanceof Array --> true 
//intenceof --> check type of reference data type // dont use typeof for reference data type
//typeof NaN --> number
//typeof --> primative data type check karva mate use thay che
//intenceof --> reference data type check karva mate use thay che