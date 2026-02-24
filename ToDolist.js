// select
let inp = document.querySelector("input");
let addBtn = document.querySelector("#add_btn");
let ul = document.querySelector(".task-list");

// get tasks from localStorage OR create empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
    ul.innerHTML = ""; // clear list to prevent duplicates

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${task.text} <button class="Dbtn">Delete</button>`
        ul.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    let value = inp.value.trim();

    if (value === "") return; // prevent empty tasks

    tasks.push({ text: value });
    saveLocalStorage();
    showTasks();

    inp.value = ""; // clear input
});

// show tasks when page loads
showTasks();

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("Dbtn"))
    {
        let li = e.target.parentElement;
        let index = Array.from(ul.children).indexOf(li);
        tasks.splice(index,1);
        saveLocalStorage();
        showTasks();
        console.log(index)
        console.log(li)
    }
});
