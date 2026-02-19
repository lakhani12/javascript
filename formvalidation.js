// Reading valuses

let form = document.getElementById("form");
let ee = document.querySelector("#ee");
let email = document.querySelector(".email");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email_regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // user Name

    let test_and = email_regex.test(email.value);
    console.log(test_and);

    if ( !test_and) {
        ee.textContent = "Please enter a valid email address.";
        ee.style.color = "red";
        e.preventDefault();
    } else {
        ee.textContent = "Email is valid.";
        ee.style.color = "green";
    }
})


// value vs text content
// value -->get the value of an input field
// textContent --> HTML tag set value and get value (like a div or span)
