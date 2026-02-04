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

// unshift

// splice - remove value into array -- specific position and specific number of values
// into () - first index (position), how many values you want to remove
let e = [50,60,30,40,10];
//e.splice(3,2);
// e.splice(3,0,52,100)
// use case -- select msg and remove multipal msg at on click

// slice - copy values from array -- specific position and specific number of values
// new  variable = array_name.slice (start )