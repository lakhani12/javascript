//data types:
// two type of data types:
// 1. primitive data types
// copy   --> real value 
let a = 12;
let b = a; 

// 2. non-primitive data types(reference data types) [], {},()
//copy -->give reference(address) of parent object
let d=[1,2,3];
let e = d;

//non-primitive data types//
//types: string, number, boolean, null, undefined, symbol, bigInt
//string:
//''-single quote
//""-double quote
//``-backtick
let f = 'name'; // single quote
f = "user name"; // double quote
f = `firstname`; // backtick

//number:
let g = 12; // integer
g = 12.45; // float
g = -45; // negative number

//boolean:
let h = true;
h = false;
//null:
//you give value a value
let i = null; // empty value

//undefined:
//you don't give value to variable
let j; // undefined

//symbol:
//unique  immutable value
 let u1 = Symbol('uid');
    let u2 = Symbol('uid');
    //check u1 and u2 are same or not
    let obj  = {uid:1,name:"test",email:"test@example.com"};
    let u3 ="uid";
    let u4 = Symbol("uid");
    //obj [u3] = "001";

    //bigInt:
    //cheack range of number,number max_safe_integer
    let number = 9007199254740991; // max_safe_integer
    number = number + 6;
    let num2 =  9007199254740991n; // bigInt
    num2+4n;

//non-primitive data types(reference data types) [], {},()
//<----non-primitive data types---->
let temp_array =["user1","user2","user3"]; // array
let temp_object = {name:"user",age:9,phone_number:9925235894}; // object
let profile = [
    {name:"user1",age:12,phone_number:9925235894},
    {name:"user2",age:15,phone_number:9925235890},
    {name:"user3",age:18,phone_number:9925235891}   
];
function name(params){}

//dynamic typing:
let u_name = "user name"; // string
u_name = 1234; // number
u_name = {}; // object

//typeof quirks
//typeof 12
//cheack type of variable use --->ex. typeof NaN, type of null,1+"1",1 == "1",1 === "1"
//why typeof NaN is number
// NaN is faild number opration that is why typeof NaN is number
//why typeof null is object
//bug in js that is why typeof null is object
//ex. "hello" - 5 ---> NaN
//type coeration
//"5" +  1 // +  --> value add and coerantion(mixed)
//"5" - 1  // -  --> only value subtracktion no coerantion

//truthy and falsy value
//0,falsy values: 0, "", null, undefined, NaN, document.all,--- false
//ex.  !!0 -- cheack values is truthy or falsy
//ex.if(null){} -- falsy
//ex.if(-1){} -- truthy
//all   --> true