let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

    // event = submit
form.addEventListener("submit", (dets) => {
    dets.preventDefault(dets);
    console.log(inp);
    console.log(inp[0].value);
    console.log(inp[1].value);
    console.log(inp[2].value);
    console.log(inp[3].value);
    console.log(inp[4].value);
    console.log(inp[5].value);

    // create
    let card = document.createElement("div");
    let img_div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    let i = document.createElement("i");
    let b = document.createElement("b");
    let span = document.createElement("span");
    let br = document.createElement("br");

    console.log(card, img_div, img, h3, h5, b, i, span);
    // add style
    card .classList.add("card");
    img_div .classList.add("img-div");
    img .classList.add("img");
    h3 .classList.add("h3");
    h5 .classList.add("h5");
    i .classList.add("i");
    b .classList.add("b");
    span .classList.add("span");

    // add teg into html
    document.body.appendChild(card);

    // add child into parent tag
    card.appendChild(img_div);
    img_div.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(i);
    card.appendChild(br);
    card.appendChild(b);
    card.appendChild(span);
    console.log(card);

    // defult value
    if(inp[0].value == ""||inp[1].value == ""||inp[2].value == ""||inp[3].value == ""||inp[4].value == ""||inp[5].value == ""){
      img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1739178656567-068b26a4b979?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHx1c2VyfGVufDB8fDB8fHww");
    h3.textContent = "ex.yoda";
    h5.textContent = "ex.gamer";
    i.textContent = "ex.male";
    b.textContent = "ex. Email@gamil.com";
    span.textContent = "ex.+91 1234567890";

    }else{
    // add text content into tag
    img.setAttribute("src", inp[0].value);
    h3.textContent = inp[1].value;
    h5.textContent = inp[2].value;
    i.textContent = inp[3].value;
    b.textContent = inp[4].value;
    span.textContent = inp[5].value;
    }


    
    // input clear
    form.reset();
})
