let d = 20;
function abc(){
    console.log(d);
}
function def(){
    let d = 25;
    abc();
}
def();
// console.log ans:

function parent() {
    let a = 12;
    return function () {
        console.log(a);
    };
};

let fnc1 = parent();
fnc1();


// counter
function counter() {
    let a = 0;
    return function () {
        a++;
        console.log(a)
    };
}
let fnc = counter();
fnc();
fnc();
fnc();
fnc();

let fnc2 = counter();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2(); // 5 

// create toaster
function createToaster(configs){
    let toast = document.querySelector(".toast");

    return function(data){
        let toaster = document.createElement("div");

        toaster.className = `${configs.theme === "dark" ? "bg-gray text-black" : "bg-white text-black border border-red-950"} px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none shadow-lg  `;
        toaster.textContent = data;

        if(configs.positionY !== "top" || configs.positionX !== "left"){
            toast.className += `${configs.positionY === " left " ?  " left-10 " : " right-10 " } ${configs.positionx === "top" ? " top-10 " : "bottom-10 " }`
        }

        toast.appendChild(toaster);

        setTimeout(()=>{
            toast.removeChild(toaster);
        }, 2000);
    };
}

let toast = createToaster({
    positionX: "right",
    positionY: "bootom",
    theme: "dark",
    duration: 3, // 3 sec 
});
toast("Welcome Admin");
setTimeout(() => {
   toast("You Have Two New Notifications");
},2000);
setTimeout(() => {
    toast("Managers Login At 5.12pm");
},3000)  
setTimeout(()=>{
toast("New Application Raised by Appliciant");
},4000)
  

 