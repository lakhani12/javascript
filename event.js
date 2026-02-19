// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listner - event nu reaction -- give reaction when click, dbclick, hover, typing

// Add Event Listner
// select --> event --> function --> what you change
// element.addEventListener("event_name", function() {})


//====================================================
// common Events : click, input, change, submit, mouseover, keyup
// click
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("cs-body");
    console.log(btn.textContent)
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});

let box = document.querySelector(".box");
let btn1= document.querySelector(".btn1");
let span = document.querySelector("span");

btn1.addEventListener("click", () => {
    box.classList.toggle("bg-red");
    if (span.textContent === "change Div color: red") {
        span.textContent = "change Div color: white";
    } else {
        span.textContent = "change Div color: red";
    }
});
// input.
// how to know which key is pressed
let inp = document.querySelector(".text");
inp.addEventListener("input", (dets) => {
    // console.log(dets);
    if(dets.data !== null ) 
    {
        console.log(dets.data);
        inp.style.left = "5000px";
    }
});

// change -- when you cahnge Elements this.state.
let sel = document.querySelector(".sell");
let device = document.querySelector(".device");
sel.addEventListener("change", (dets) => {
    console.log(dets.target.value);
    device.textContent = dets.target.value;
});

// change event => change div class border with color input

let box1 = document.querySelector(".box2")
let inp1 = document.querySelector(".bgcolor")
let inp2 = document.querySelector(".bcolor")

inp1.addEventListener("change",(dets)=>{
    box1.style.backgroundColor = dets.target.value;
});

inp2.addEventListener("change",(dets)=>{
    box1.style.borderColor = dets.target.value;
});

// submit event
let form = document.querySelector("form");
form.addEventListener("submit", (dets) => {
    document.body.style.backgroundColor = "red";
});

// MouseEvents : mouseover, mouseout, mouseenter, mouseleave, mousedown, mouseup
let box3 = document.querySelector(".box3");
box3.addEventListener("mouseover", () => {
    box3.style.width = "500px";
});
box3.addEventListener("mouseout", () => {
    box3.style.width = "200px";
}); 
// keyup event

let text2 = document.querySelector(".text2");
text2.addEventListener("keyup", (dets) => {
    document.body.style.backgroundColor = "pink";
});
    // console.log(dets.key);

    // ============================================================================================================================
    // event object:
    // sel.addEventListener("change", (dets) => {
    //     console.log(dets); => dets -- that called event Object
    // });

    // targat,type,preventDefaulr
    // targat --> that shows element
    // type --> that shows event type
    // preventDefault -->  use for html-from --> prevent from to referesh and clean details

    
   

    // Event Bubbling and Event Capturing
    // Event Bubbling => when you click on most inner element then event will be rise on outer element also
    // Event Capturing => when you click on outer element then event will be rise on most inner element also

    let outer = document.querySelector(".outer");
    let inner = document.querySelector(".inner");
    let most_inner = document.querySelector(".most_inner");

    // outer.addEventListener("click", (dets) => {
    //     console.log("outer Div clicked");
    //     document.body.style.backgroundColor = "red";
    // });
    // inner.addEventListener("click", (dets) => {
    //     console.log("inner Div clicked");
    //     document.body.style.backgroundColor = "green";
    // });
    // most_inner.addEventListener("click", (dets) => {
    //     console.log("most inner Div clicked");
    //     document.body.style.backgroundColor = "blue";
    // });

    // use case:make it to do list thing
    // when you click on text that show stikers using bubbuling
    // crete list that show shopping list using bubbling -- use css (text decoration ->line through) when you click on list item

    let ul = document.querySelector("ul");
    
    ul.addEventListener("click", (dets) => {
        let li = dets.target.style.textDecoration;
        if(li === "line-through") {
            li = "none";
        } else {
            li = "line-through";
        }
        dets.target.style.textDecoration = li;
        });

        // event capturing ==> reverse of bubbling event
        // when you raise event on your event flow (propogation) ==>can can run into two phase
        // 1. capturing phase => when you click on outer element then event will be rise on most inner element also
        // 2. bubbling phase => when you click on most inner element then event will be rise on outer element also

        // first --> first phase then second phase ==> but phase is default off , you have to open that setting
        // first phase => capturing phase
        // second phase => bubbling phase

        outer.addEventListener("click", (dets) => {
            console.log("outer Div clicked :skyblue");
            document.body.style.backgroundColor = "skyblue";
        }, true);
        inner.addEventListener("click", (dets) => {
            console.log("inner Div clicked :yellow");
            document.body.style.backgroundColor = "yellow";
        }, true);
        most_inner.addEventListener("click", (dets) => {
            console.log("most inner Div clicked :orange");
            document.body.style.backgroundColor = "orange";
        }, true);


        // phase 2 : child --> parent (most inner-inner-outer) => bubbling phase
        // true -- outer : phase 1 (true vali event run) : parent -->child-->parent(most inner --> inner)
        // true -- outer,inner :phase1(true vali event run) : parent -->child(outer(done)-->inner(done)-->most inner(done))-->parent(outer(done)-->inner(done)phase 2(true vali event run)-->most inner(done))-->parent(outer(done)-->inner(done)phase 2(true vali event run)--> parent(most_inner))

        // use case:
        // 1.secure layer 
        // 2.check when event bubble is fail

        // event and event listner
        //capture VS bubbling
        
        // live character conter
        let counter = document.querySelector("#counter");
        let count = document.querySelector(".count");

        counter.addEventListener("input", (dets) => {
            console.log(dets.target.value.length);
            console.log(counter.value.length);

            let limit = 10 - counter.value.length;

            if (limit < 0) {
                alert(`you have ${limit} characters left`);
                counter.disabled = true;
            } else {
                count.textContent = `you have ${-limit} characters over limit`;
            }
        });