// object vs array
// object -- when to show all data on one entitiy (ek j entitiy mate all data jota hoy) (ex.one user data)
// array --when you want to show  entity (ex.all  user )
// let user_data = [{name: "abc", email: "test@gamil.com"},{name:"def"},{name:"abc1"},{name:"ABC"}]


// create 
// variable = {}
// key : value --> key-value structur
let user = {
    name:"Test",
    email: "test@gmail.com",
    roll_no:70,
};

// access (dot vs square notation)
// variable_name.key_name;
user.name;
user.email;
// user.first-name;
// variable_name['key'];
// user['name']
// user[name]
let demo = "name"
user[demo] // -->convert into name (demo = 'name')--> output: Test

// nesting and deep access
const user1 ={
    name :"test",
    address:{
    city: "surat",
    pin:395006,
    locations: {
        let:65.65,
        lng:98.45,
    },
    },
    email: "test@gmail.com",
}; // -- nested object
user1.address.locations.let; // --> deep access
// user1.address.location.lng;

// object destructuring:
let {lat,lng} = user1.address.locations;
let {name, email, address} = user1;
let {city} = user1.address;
let {let: abc_lat} = user1.address.locations;
// destructurse and rename variable name

let demo1= {
    first_name:"Demo",
    last_name: "user",
    age: 54,
    email: "demo@user.com"
};

// looping (for-in loop)
// for (variable name in object_name){}
for(const key in demo) {
    // console.log(key);
    // obj.key --> not workin
    // console.log(demo[key]);
    console.log(key,".",demo[key]); //-- log whole object
}

// copyig objects:spred,object.assing,deep-clone
// spred
// let user_)data = {...demo};
let user_data = {gender:"Male",role:"user",...demo} // add key-value and copy object
// user case:State update
const user2 = {
name : "amit",
age: 30
};

const updateduser = {
...user2,
age:36
};

console.log(updateduser)

// object.assign -- copy and add key-value 
let user_data_assign =Object.assign({},demo); //-nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number:9106732452},demo); // - add and copy
// Use case: Defult settings + user settings merge
const defaultsettings = {
theme: "light",
language: "en"
};

const usersetting = {
 theme: "dark"
};

const finalsettings = Object.assign({}, defaultsettings, usersetting);

console.log(finalsettings);

// object.assign vs spred
// Object.assing() -- method -- ES5 Old version, less used
// spred -- Oprator -- state updated,most used in react application,clean coda

// deep clone
let tem_user1_clone = {...user1}
// user1_clone.address.city = "valsad" --> that will change  value of user1 too
// issue : When you clone & copy nested object useing spread or object.assing into new variable that copy all value bat nested objact pass only refrence not copy
// (jyare tame nested object (parent obj.) spred na upyog thi copy karo tyare  nested obj.(child obj.)reference pass karshe -- value copy tyhase nahi)
// how to clone that -- use deep clone 
// first convert your object to string
// JSON - javaScript Object Notation
// JSON.stringify(obj._name) -- convert object into string
// JSON.parse(stingify_Object) -- convert string to object
let clone_user1 = JSON.parse(JSON.stringify(user1))
// deep clone = completely new memory
// use case;
// real time use:
// API response handling
// avoid data mutatuion bugs

// object.key -- add all key into array formate
let key_arr = Object.keys(demo);
// use case:user profile from validaton
// ex.website per thi user from ma data add kare chhe ane te data backend pase object formate ma aave chhe
// const userprofile = {
//  name: "Rahul",
// email: "rahul@gamil.com",
// age: 25;
// };

// now cheack  how many field user fill up
const key = Object.key(userprofile);
console.log(key);
console.log(keys.length);

// object.entries -- add key and values into array formete
// give array of arrays
let  key_value_arr = Object.entries(demo);
// use case: Display user details dynamically (UI)
// ex.backend give you data into object formate
const user3 = {
    name: "Priya",
    city: "Ahmedabad",
    role: "admin"
};
// print key value both in profile page
Object.entries(user3).forEach(([key, value]) => {
    console.log('${key} : ${value}');
});
// Object.entries(user) ==> convert into Arrays
// froEach ==> Array loop


// optional Chaining ,Computed Properties
// user1.address.location.lag
user1?.address?.location?.lng; //-- ? Optional Chaining
// use case:
// Without optional chaining -> app crash
// Background data incomplete
// API response safety
const apiResponse = {
    user: {
        profile: {
            name: "Neha"
        }
    }
};
console.log(apiResponse.user?.profile?.name);
console.log(apiResponse.user?.address?.city);

// Computed Properties
let role = "admin";
let user4 = {
    name: "test",
    age: 26,
    email: "test@gmail.com",
    address:{
        city: "Surat"
    },
    [role]: "test"
}
// Use case: Dynamic object keys
const fieldName = "email";
const user5 = {
    name: "Ravi",
    [fieldName]: "ravi@gamil.com"
};
console.log(user5);