// Object Oriented Javascript
// OOPS
// dar vakhat blueprint banavo ke object kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava nava objects banvani sakiye chhiye tene j kevaay chhe Object Oriented Programming

// blueprint(object kevo dekhase, object ma su method) --> based on blueprint create objects

// blueprint -- contructor
// function based contructor --> Contructor Function --> function Name always start with Capital letter
function CreatePencil(name, price, color) {
  // blue print
  this.name = name;
  this.price = price;
  this.color = color;

  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.appendChild(h1);
  };

  this.erase = function () {
    document.querySelectorAll("h1").forEach((text) => {
      if (text.style.color === this.color) {
        text.remove();
      }
    });
  };

  console.log(this);
}

let p1 = new CreatePencil("pencil1", 5, "black");
let p2 = new CreatePencil("pencil2", 10, "red");
let p3 = new CreatePencil("pencil3", 15, "green");
let p4 = new CreatePencil("pencil4", 20, "blue");
let p5 = new CreatePencil("pencil5", 50, "purple");

// jo construction function koi field tena prototype ma add attech kari de to te field badha object ma available thase

CreatePencil.prototype.shape = "rounded";

// what is prototype: prototype is a property of function which is used to add new field to all the object created by that function

// Class in JavaSctipt
// class is a syntatical sugar over construction function, class ma apde constructor function no upyog kariye chhiye

// why use class: class is more readable and easier to understand than construction function

class CreatePen {
  constructor(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    // what is constructor: constructor is a special method which is called when an object is created, it is used to initialize the object
    // why use constructor: constructor is used to intialize the object, it is called automatically when an object is created, it is used to set the initial values of the object
    console.log(this);
  }
}

let pen1 = new CreatePen("Pen1", 5, "blue", "cello");

// extends --> super
// create a new class that hold old class value and also have some new values
// copy old class and add new value

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.role = "user";

    // read profile
    this.profile = function () {
       console.log(this);
    //    console.log({

    //    })
    //    return "user Profile Fetched"      
    //   console.log("email", this.email);
    };
    // create post
    this.post = function (title, link) {
      let caption = document.createElement("p");
      caption.textContent = title;
      caption.className = "text-2xl text-teal-950";
      let img = document.createElement("img");
      img.setAttribute("src", link);
      img.className = "w -[200px] h-auto rounded-full shadow-lg";

      document.body.appendChild(caption);
      document.body.appendChild(img);
    };
    // write

    console.log(this);
  }
}

let u1 = new User("test", "test@gmail.com", 25);
let u2 = new User("Demo", "Demo@gmail.com", 20);

class Admin extends User {
  constructor(name, email, age) {
    super(name, email, age); // je class extends kariye tenu contrucoter aetle super -- user nu constructor --> super
    this.role = "admin";
    console.log(this);

    // show all user's name
    this.showUsers = function (users) {
      return users;
    };
  }
}

let admin = new Admin("admin", "admin@test.com", 25);
console.log("Admin can See All Data");
admin.showUsers({user1: u1.profile(), user2:u2.profile()});

// prototype inheritance vs classical inheritance
// class inheritance -- create a classes and extends their classes 
 
// prototype inheritance --> object to object 
// eek object chhe tene tame all props / methodes ne inherit kari chho ke nava object me

let SoftDrink ={
    color: "blue",
    price:50,
    buy:function(company){
        console.log(
            " == This Your Bill == : \n",
            "color : " + this.price,
            "\n Company Name : " + company,
        );
    },
};

let BlueBerry = Object.create(SoftDrink);
console.log(BlueBerry);