// DOM -- Document Object Model
// All Website  code --> Dom
// Website output --> dom
// Dom -- HTML body

// DOM Tree Structure:
// NOde --> Element (ex. h1, h2 , p ,b , i),text (ex.lorem),commentt


// DOM Manipulation - changes body
// select element from html
// change text
// change css 
// change attributes 
// event listeners

// select element
// getelementById
let a = document.getElementById("abc")
console.log(a);

// getelementByClassName
let b = document.getElementsByClassName("abc")
console.log(b);

// getelementByTagName
let c = document.getElementsByTagName("h1")
console.log(c);

// querySelector --> only select first (tag class) in html
let d = document.querySelector(".abc")
console.log(d);

// querySelectorall --> selectall
let e = document.querySelectorAll("h1")
console.log(e)

// chage text
// innertext
d.innerText="Change Text With JS";

// outertext -- not use in DOM
// d.outerText = "<h1>change Text With OuterText</h1>";

// innerHTML
d.innerHTML = "<i>Change Text Style With JS</i>";

// outer HTML 
// d.outerHTML = "<i>Change Text stye with JS </i>";

// textConnect -- use for chgange text
d.textContent = " Change text with TextContent";

// outer vs inner
// innerText -- show text between tag -- ignore teg
// outerText -- show text betwen teg -- remove teg

// innerHTML -- show text between too teg -- not teg.
// outerliner -- show texxt with teg

// -----------------------------------------------------------------------------------------------------------------
// Attribute Manipulatin
// getAttribute , SetAttribute, removeAttribute
let link = document.querySelector('a')
console.dir(link)
console.log("get Attribute", link.href)// -- give value of href attribute

// link.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVtEgkdhyflmiLRUB2MVDl5hiSWHrHuu0MHg9e09WO_5HaP1vR4mHZ9_ZonjGve-Ba8Wu_N1m-BcGFCEWXA4jRYF0sR_pGrpryqgH8Kpf&s=10//"
//  element.setAttribute("attribute_name","change")
link.setAttribute("href", "www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // give value of href attribute

// // // element.removeAttribute("name")
link.removeAttribute("href")

// ----------------------------------------------------------------------------------------------------------------------------.
// Dynamic DOM maipulation
// createElemnt , appendChid, removeChild,prepend

// create Element
let box = document.createElement("div")
box.textContent = "This is Div Tag create using Js"
console.log(box)

//  // append / prepend -- add element info HTML
// apped -- add element info last
// document.body.append(box)
// prepend -- add element into first
document.body.prepend(box);

// remove
// d.remove();


// appendChild
let outer_box = document.createElement("div");
outer_box.classList.add("outer");
document.body.append("outer");

let inner_box = document.createElement("div");
inner_box.classList.add("inner");
outer_box.appendChild(inner_box);

// append vs appendchild
// remove vs removechild

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Style Updates via .style and classList (add,remove,toggle)
console.dir(d);
d.style.backgroundColor = "green";
d.style.color = "white";
d.style.padding = "20px";

// classList 
let card = document.querySelector(".card");
//console.dir(card)
card.classList.add("card-style")

// remove.
card.classList.remove("card")

// toggle -- class --> available --> remove it
//           class --> not available -->add it
card.classList.toggle("card")


