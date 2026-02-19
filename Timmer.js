// SetTimeout, clearTimeout

// SetTimeout --> run only one time
// timeout -- in ms
setTimeout(()=>{
    console.log("Hello");
}, 2000);

// setInterval, clearInterval
// setInterval --> run into loop(infinite times)
let timmer = setInterval(()=>{
    console.log("Hi, Set Interval");
}, 2000);

// clear Interval
// clearInterval(timmer);

let count = 0;
let counter = setInterval(()=>{
    count++;
    if(count <= 10){
        console.log(count);
    } else {
        console.log("Stop Timmer")
        clearInterval(counter);
    }
},100);

//  popup windows
let button = document.querySelector("button");
let card = document.querySelector(".card")

let popup = setTimeout(() => {
    card.style.display= "block";
}, 2000);

button.addEventListener("click", ()=>{
    card.style.display = "none";
})

// real use : delayed UI actions , auto-refresh

// downloading
let dCount = 0;
let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let h2 = document.querySelector("h2");

let download = setInterval(() =>{
    if (dCount <= 99){
        dCount++;
        bar.style.width = dCount + "%";
        percent.textContent = dCount + "%";
        console.log(dCount);
    } else {
        h2.textContent = "Download complete";
        console.log("Download complete");
        clearInterval(download);
    }
},10);
// setTimeout vs setInteraval