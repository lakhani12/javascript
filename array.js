// Array -- hold multipal values ata sane time
// ["product_name",50000,'20%]
// ["a","b","Hello"]
// [2,4,5,6,7]

//create 
// define a variable  = [multipal values]
let arr = [1,2,3,4]
// let product_data = ["S25 ultra",180000,"20%","Mobile"]

// access
// position = [0 1 2 3 ] -->index
// access
// array_name[position(index)]
arr[0];

// modify
// array name [position] = new value 
arr[0]= 10;


// Array Methods:(variable_name.method_name())
// push,pop,shift,unshift,slice,reverse,sort
// push -->enter new value into array -- place it into last
arr.push(5);
//variable || function.method --> koi variable ke function in pachhacl dot (.) kari ne lakho to te method kevai
// user case -- enter new product into existing prodducts list

// pop --> remove last value into array
arr.pop()
// use case -- remove last product  you add into your list

// shift -- remove first value into array
arr.shift()
// use case -- remove old product automatic aftersometimes

// unshift --remove first value 
// splice - remove value into array -- specific position and specific number of values
// into () - first index (position), how many values you want to remove
let e = [50,60,30,40,10];
//e.splice(3,2);
// e.splice(3,0,52,100)
// use case -- select msg and remove multipal msg at on click

// slice - copy values from array -- specific position and specific number of values
// new  variable = array_name.slice (start index,and index)
// start include  -- include into copy
// end index --not include into copy 
let f = [100,50,25,0];
let new_f = f.slice(1,3);
// use case -- copy specific data and save it into new variable
// generate a  report based on date and generate a file or save the file into your local machine

// slice vs slice
// slice  --remove values into main array or maodify new array
// slice -- copy values from main array and create a new  array that hold the value that you can into

// reverce -- reverece value of array
let g = [25,26,84,65,24,15]
// g.reverce();
// use case -- show latest update first into your fronted

// short set  into acording order

let h =[50,55,10,20,56,80,64]
// h.sort();
// let h = [11,62,3,4,25];
// let sr = h.sort(function(a,b){
// return a-b;})//ascending order
// })

let arr1 = [10,2,5,20,30];
// arr1.sort(function (a,b){
    // return a -b;
// });
let temp_arr1 = arr1.sort((a,b) => a - b); // --use when array hold numeric values

// let arr2 = ["u","s","t","e","g","k"];

let arr3 = ["hello" ,"aero","right","Array","Object","variable"];

// // // Q1. push()
// // // You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
// // let tasks = ['Wake up', 'Brush teeth'];
// // tasks.push('Buy milk');
// // console.log(tasks)

// // // Q2. pop()
// // // Remove the last notification from the notifications array.
// // let notifications = ['Email', 'Message', 'Reminder'];
// // notifications.pop(); // removes 'Reminder'
// // console.log('Q2 notifications:', notifications);




// // Q3. shift()
// // A queue system removes the first customer. Remove the first customer.
// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift(); // removes 'Customer1'
// console.log('Q3 customers:', customers);




// // Q4. unshift()
// // A new song is added to the beginning of the playlist.
// let playlist = ['Song B', 'Song C'];
// playlist.unshift('Song A'); // add to beginning
// console.log('Q4 playlist:', playlist);




// // Q5. splice()
// // In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1, 1, 'John', 'Sara'); // remove 'Alex', add 'John' and 'Sara'
// console.log('Q5 students:', students);




// // Q6. splice()
// // From the menu, remove 2 items starting from index 1.
// let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// menu.splice(1, 2); // removes 'Pizza' and 'Pasta'
// console.log('Q6 menu:', menu);




// // Q7. slice()
// // Create a new array that contains only weekend days.
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let weekend = days.slice(5, 7); // ['Saturday', 'Sunday']
// console.log('Q7 weekend:', weekend);




// // Q8. reverse()
// // Reverse the order of levels in a game.
// let levels = ['Easy', 'Medium', 'Hard'];
// levels.reverse();
// console.log('Q8 levels:', levels);




// // Q9. sort()
// // Sort the scores in ascending order.
// let scores = [45, 12, 78, 34, 89];
// scores.sort((a, b) => a - b);
// console.log('Q9 scores:', scores);



// // Q10. sort() with numbers
// // Sort the prices from lowest to highest.
// let prices = [199, 49, 999, 299, 149];
// prices.sort((a, b) => a - b);
// console.log('Q10 prices:', prices);




// // Q11. slice() vs splice()
// // From the array, create a new array of the first 3 items WITHOUT changing the original array.
// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let firstThree = products.slice(0, 3); // ['Laptop','Phone','Tablet']
// console.log('Q11 firstThree:', firstThree);




// // Q12. splice() complex
// // In the array below:
// // 1. Remove 'Blue'
// // 2. Add 'Purple' and 'Orange' at the same position
// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// colors.splice(2, 1, 'Purple', 'Orange'); // removes 'Blue', adds 'Purple' and 'Orange'
// console.log('Q12 colors:', colors);


// // Q13. reverse() + push()
// // Reverse the array and then add 'Final Step' at the end.
// let steps1 = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step');
// console.log('Q13 steps:', steps);


// // Q14. sort() strings
// // Sort names alphabetically, ignoring case sensitivity.
// let names = ['alice', 'Bob', 'charlie', 'David'];
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log('Q14 names:', names);




// // Q15. Combination Question
// // You are managing a movie watchlist:
// // 1. Add 'Inception'
// // 2. Remove the first movie
// // 3. Sort the list alphabetically
// let movies = ['Avatar', 'Titanic', 'Gladiator'];
// movies.push('Inception'); // add
// movies.shift(); // remove first ('Avatar')
// movies.sort(); // sort alphabetically
// console.log('Q15 movies:', movies);

// // Q16. splice() return value
// // What does the splice method return in this case?
// let nums1 = [1, 2, 3, 4];
// let removedNums = nums1.splice(1, 2); // returns the removed elements [2,3]
// console.log('Q16 removedNums:', removedNums);




// // Q17. slice() immutability check
// // After executing slice, does the original array change?
// let nums2 = [10, 20, 30, 40];
// let result = nums2.slice(1, 3); // result is [20,30], nums2 remains unchanged
// console.log('Q17 result:', result);
// console.log('Q17 original nums2:', nums2);


// // Q19. reverse() mutation
// // After reversing, what happens to the original array reference?
// let letters = ['a', 'b', 'c'];
// let reversedLetters = letters.reverse(); // reverse mutates the original array and returns the same reference
// console.log('Q19 letters:', letters);
// console.log('Q19 reversedLetters (same ref):', reversedLetters);


// // Q21. splice() edge case
// // What happens if deleteCount is 0?
// let arr21 = ['x', 'y', 'z'];
// let spliceReturn = arr21.splice(1, 0, 'new'); // inserts 'new' at index 1, returns []
// console.log('Q21 arr after insert:', arr21);
// console.log('Q21 splice return value:', spliceReturn);



// // Q23. slice() negative index
// // What elements are returned?
// let values = [100, 200, 300, 400, 500];
// let sliced = values.slice(-3, -1); // returns [300, 400]
// console.log('Q23 sliced:', sliced);




// // Q24. splice() vs slice() decision
// // Which method would you use if you want to:
// // a) Update the original array -> use splice()
// // b) Keep the original array unchanged -> use slice()
// console.log('Q24 answer a: splice (mutates), b: slice (non-mutating)');




// // Q25. Chained methods (brain teaser)
// // What is the final value of arr?
// let arr2 = [1, 2, 3];
// arr2.push(arr2.shift()); // final array becomes [2,3,1]
// console.log('Q25 arr2 final:', arr2);

// for Each loop
// for each -- Array ni darek value mate loop chalse
let i = [10,30,40,68];

i.forEach((val) => {
    let new_val = val + 10;
    console.log(new_val);
});

i.forEach((val) => {
    let new_val = val - 10;
    console.log(new_val);
});


// importent into array
// now al methods are used in real world projects
// all methods are working with function
// manipulation data using array methods and function


// .mep() method:
// .mep tyare j use karvanu ke jyare new array create karva no che
// first map create a black array -- only for understanding
let data = [10,20,30,40,50,15];
// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
    if (val > 15) {
        return val;
    }
});
// use case -- data ma thi specific data array ma store karvo hoy 
// ex.product ma thi specific category na product new array ma store karva hoy 
// if you want to show only electronics product on your homepage



const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}
const newSteps = steps.map(doubleSteps);
console.log(newSteps)

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds)

const prices = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);

console.log(finalPrices)


const marks = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);

console.log(getGrade)

let marks1 = [10,5,20,25,15]
let finel_marks1


// filter
// filter tyare use karvu ke jyare ek new array crrate karvo chhe with coundition
// in return true/false.
// if true --> add into new array 
// if else (false  -- > not add into new array )
let Laptops_price = [50000,20000,15000,30000,60000];

let expensive_leptops = leptops_price.filter.filter((price) => {
    if (price > 30000) return true;
});

// je value 30000 thi vadhare hoy te new array ma add thase and biji value ne array ma add nathi kare

// use case -- date ma thi spesific data new array ma store karva hoy tyara base on condition
// ex.product ma thi specific price na product new array ma store karva na hoy 
// if you want to show only expencive product on your homepage 
// if you want to fillter product based on price

let product_type = ["mobile", "teblet", "leptop", "mouse" ,"keybord"]
let filter_product_typefilte = product_type.filter((type) => {
    if(type ==="teblet" || type ==="mobile") return true;
});

console.log(filter_product_type)

// reduce
// reduce tyare j use karvu ke jare ek single value calculet karvi hoy from array

let totel_price = total_price.reduse((accumulator ,val) => {
    return accuulator + val;

 },0);
//  innitial value of accumulator
// 0 + 10 =>10
// 10 + 68 => 78
// 78 + 45 => 123

console.log("final price :",finel_price)

// accumulator --> je value fundtion ma return thase te accumulator ma store thase --> accumulator name change kari shako cho
//  val -->array ni dark value

// use case -- data ma thi ek single value calculate karvi hoy 
// ex. product ma  thi totel price calculate karvi hoy 


// find
// find tyare j use karvanu ka jytar array mathi ek value find karvi hoy base on condition
// find return kare che array no element --> call back no retuen value nathi
// neve returns what you return inside it
// return the array element it self -- not return array 
// find () stops at the first match
// if dose not countinue looping

let product = ["laptop","mobile","tablet", "desktop","smartwatch"];
let find_product = product.find((item) => {
    if (item === "desktop") {
        return true;
    } else if (item === "tablet"){
        return true;
    }else{
        return false;
    }
});

// use case -- data ma thi ek value find karvi hoy based on coundition
// ex.producat ma thi specifice product find karvo hoy base on name

// find vs filter
// real-life scenario: shopping mail security
// you are a security guard at a shoping mall
// cheack the list of visitors
let people = ["john", "sara", "mike","anna", "david", "sara"];
// find  -->you are looking for the first person names "sara" in the list and stop searching (pehli var j male, bas e j and Anagal cheack j  na kare)
let person = people.find((name) => name === "sara");
console.log("find",person);

// filter --> you want to find all visitors named "sara" in the list (all data cheack kare and list  na end sudhi cheack kare)

let allsara = people.filter((name) => name === "sara");
console.log("find", allsara);

// example 2: book bus for travel

// some 
// cheack kare chhe ke array ma koi pan  ek item codition satisfy kare chhe ke nathi
// condition true ave tyare stop kare
//  some() vs find() -->some() can't return you value its return true or false, find() return value of array
// give ans in true and false

let marks2 =[10,20,35,90];
let any = marks2.some((val) => {
    if (val > 85) return 12;
    // if(val < 85) return "need improvement";
});
console.log(any)
// use case  -- cheack if  some product are out of stock in cart 


// every 
// cheack  kare chhe ke array ma baddha j item condition satisfy kare che k nay
// true -- bathi item condition match kare
// false -- ek pan fail thy to 
let def =[20,30,5,35];
let num = def.every(function(val){
    return val < 40;
})
// use case --> check all student is pass or not

// some(), find(), filter(),every()
// let products = ["tablet", "mobile", "laptop","mobile"]
// method --> condition -->output
// .some() -->item === "mobile" -->true
// .find() -->item === "mobile" -->"mobile"
// .filter() -->item === "mobile" -->["mobile","mobile"]
// .every() -->item === "mobile" -->false

// Destructuring oprator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
// let j = arr4[0]; --> 1
// let k = arr4[2]; --> 3
let [ j, , k] = arr4; // --> destructuring
// let [, , n] == arr;
console.log(k);
let user_data = ["test", "test@gmail.com", "Male", "Surat"]
// name, email, gender, city
// console.log("name", name)



// spread operator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; / - just give reference not copy value(when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spread --> into Array and Object --- copy
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];
let mix_arr = [...temp_arr, ...temp_arr2];
