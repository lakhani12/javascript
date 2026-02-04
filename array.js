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

// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
console.log(tasks)





// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop(); // removes 'Reminder'
console.log('Q2 notifications:', notifications);




// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift(); // removes 'Customer1'
console.log('Q3 customers:', customers);




// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A'); // add to beginning
console.log('Q4 playlist:', playlist);




// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara'); // remove 'Alex', add 'John' and 'Sara'
console.log('Q5 students:', students);




// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2); // removes 'Pizza' and 'Pasta'
console.log('Q6 menu:', menu);




// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5, 7); // ['Saturday', 'Sunday']
console.log('Q7 weekend:', weekend);




// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log('Q8 levels:', levels);




// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log('Q9 scores:', scores);



// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log('Q10 prices:', prices);




// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3); // ['Laptop','Phone','Tablet']
console.log('Q11 firstThree:', firstThree);




// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange'); // removes 'Blue', adds 'Purple' and 'Orange'
console.log('Q12 colors:', colors);


// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log('Q13 steps:', steps);


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log('Q14 names:', names);




// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception'); // add
movies.shift(); // remove first ('Avatar')
movies.sort(); // sort alphabetically
console.log('Q15 movies:', movies);

// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
let removedNums = nums1.splice(1, 2); // returns the removed elements [2,3]
console.log('Q16 removedNums:', removedNums);




// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3); // result is [20,30], nums2 remains unchanged
console.log('Q17 result:', result);
console.log('Q17 original nums2:', nums2);


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse(); // reverse mutates the original array and returns the same reference
console.log('Q19 letters:', letters);
console.log('Q19 reversedLetters (same ref):', reversedLetters);


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr21 = ['x', 'y', 'z'];
let spliceReturn = arr21.splice(1, 0, 'new'); // inserts 'new' at index 1, returns []
console.log('Q21 arr after insert:', arr21);
console.log('Q21 splice return value:', spliceReturn);



// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1); // returns [300, 400]
console.log('Q23 sliced:', sliced);




// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array -> use splice()
// b) Keep the original array unchanged -> use slice()
console.log('Q24 answer a: splice (mutates), b: slice (non-mutating)');




// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift()); // final array becomes [2,3,1]
console.log('Q25 arr2 final:', arr2);