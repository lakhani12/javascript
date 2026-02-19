# JavaScript Learning Guide

This project demonstrates fundamental JavaScript concepts including variables, scope, and hoisting.

## 📚 Topics Covered

### 1. **Variables (var, let, const)**
Learn the differences between three ways to declare variables in JavaScript:
- **var** - Function-scoped, can be re-declared and reassigned
- **let** - Block-scoped, cannot be re-declared but can be reassigned
- **const** - Block-scoped, cannot be re-declared or reassigned

### 2. **Variable Declaration & Initialization**
- **Declaration**: Creating a variable without a value
- **Initialization**: Assigning a value to the variable for the first time

### 3. **Variable Scope**
Understanding where variables are accessible:
- **Global Scope** - Accessible everywhere
- **Function Scope** - Only accessible inside the function
- **Block Scope** - Only accessible inside curly braces `{}`

### 4. **Temporal Dead Zone (TDZ)**
- `let` and `const` variables cannot be accessed before initialization
- Using them before declaration throws a `ReferenceError`
- `var` does not have TDZ - it returns `undefined`

### 5. **Hoisting**
JavaScript automatically moves declarations to the top of their scope:
- **var** - Hoisted as `undefined`
- **let** - Hoisted but not accessible (ReferenceError)
- **const** - Hoisted but not accessible (ReferenceError)

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Open the browser console (F12 → Console tab)
3. You'll see the output of all JavaScript examples

## 📝 Example Output

The script demonstrates:
- Variable declaration with different keywords
- Scope behavior with global, function, and block scopes
- Hoisting effects on different variable types
- Temporal dead zone errors

## 💡 Key Takeaways

✅ Use `const` by default  
✅ Use `let` when you need to reassign  
❌ Avoid `var` in modern JavaScript

---

**Learning Objective**: Understand how JavaScript handles variables and their scope at a deeper level.

<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p> Error: </p>
<p>Why :let variables cannot be used before they are declared. </p>
</div>


<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer :undefie </p>
<p>Why : var variables are hoisted and initialized with undefined</p>
</div>

<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer : 2 </p>
<p>Why : 
var is function-scoped, not block-scoped.
The { } block does not create a new scope for var, so the second x overwrites the first one.</p>
</div>

<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer :Inside: 20
           Outside: 10 </p>
<p>Why : let is block-scoped.
The a inside { } is a different variable from the a outside </p>
</div>

<div>

<h3>Example 5 :</h3>

<p>const person = {name: "demo"}; </p>

on console.log

<p>person.name= "user"; ✅</p>

<p>person = {} ; ❌ </p>

<p> Error:✅ person.name = "user" → Works

❌ person = {} → TypeError: Assignment to constant variable </p>

<p>Why : ✅ person.name = "user" → Works

❌ person = {} → TypeError: Assignment to constant variable</p>

</div>






# Data Types in JavaScript

JavaScript has two main categories of data types:

1. **Primitive Data Types**: These are the basic types of data that hold their value directly. When you assign a primitive data type to a variable, it copies the actual value. Examples include:
   - **Number**: Represents numeric values. For example, `let a = 12;`.
   - **String**: Represents text values, which can be defined using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``). For example, `let f = 'name';`.
   - **Boolean**: Represents true or false values.
   - **Null**: Represents an intentional absence of any value.
   - **Undefined**: Represents a variable that has been declared but not assigned a value.
   - **Symbol**: A unique and immutable data type.
   - **BigInt**: Represents integers with arbitrary precision.

2. **Non-Primitive Data Types**: These types are more complex and can hold collections of values or more complex entities. When you assign a non-primitive data type to a variable, it copies a reference to the object rather than the actual value. Examples include:
   - **Object**: A collection of key-value pairs. For example, `let obj = { key: 'value' };`.
   - **Array**: A special type of object used for storing ordered collections. For example, `let d = [1, 2, 3];`.

Understanding these data types is crucial for effective programming in JavaScript, as they determine how data is stored and manipulated in your applications.

<br>
<hr>
<br>
<h3>Example 1 :</h3>
<p>true + false </p>
</div>

================================================================================
GUJARATI SUMMARY (ગુજરાતી સારાંશ)
================================================================================

આ ફાઇલમાં JavaScript માં વપરાતા વિવિધ પ્રકારના ઓપેરેટર્સ (ક્રિયાપ્રતીક) વિશે 
માહિતી આપવામાં આવી છે.

1. ARITHMETIC OPERATORS (અંકગણિત ક્રિયાપ્રતીક):
   - (+) : બે સંખ્યા ઉમેરો અથવા શબ્દો એક સાથે જોડો
   - (-) : બે સંખ્યા બાદ કરો
   - (*) : બે સંખ્યા ગુણો
   - (/) : બે સંખ્યા ભાગ કરો
   - (%) : શેષ શોધો (modulus)
   - (**) : ઘાત કરો (power)

2. COMPARISON OPERATORS (તુલના ક્રિયાપ્રતીક):
   - (==) : માત્ર કિંમત તુલના કરો
   - (===) : કિંમત અને પ્રકાર બંને તુલના કરો
   - (!=) : માત્ર કિંમત સમાન નહીં છે
   - (!==) : કિંમત અને પ્રકાર સમાન નહીં છે
   - (>, <, >=, <=) : વધુ, ઓછું, વધુ-બરાબર, ઓછું-બરાબર

3. LOGICAL OPERATORS (તાર્કિક ક્રિયાપ્રતીક):
   - (&&) : AND (બંને સત્ય હોય તો જ સત્ય)
   - (||) : OR (કોઇ પણ એક સત્ય હોય તો સત્ય)
   - (!) : NOT (વિરુદ્ધ પરિણામ આપો)

4. ASSIGNMENT OPERATORS (સોંપણી ક્રિયાપ્રતીક):
   - (=) : મૂલ્ય સોંપો
   - (+=, -=, *=, /=, %=) : ક્રિયા કર્યા બાદ સોંપો

5. UNARY OPERATORS (એક તત્વ સાથે કામ કરતા ક્રિયાપ્રતીક):
   - (+) : શબ્દને સંખ્યામાં બદલો
   - (-) : નકારાત્મક કરો
   - (++) : એક વધો
   - (--) : એક ઘટાડો
   - (typeof) : ડેટા પ્રકાર શોધો

6. TERNARY OPERATOR (ત્રણ તત્વ ક્રિયાપ્રતીક):
   - (? :) : જો-તો નહીં તર વાપરવાય છે

================================================================================

Javascript Operator
<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){

    console.log("Both are greater than 5");

}else{

    console.log("One or both are not greater than 5");

}</p>
<p>True</p>
<p>Why:Both conditions are true</p>
</div>
 
<div>

<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){

    console.log("Acess granted");

}else{

    console.log("Acess Denied");

}</p>
<p>Access granted</p>
<p>Why:At least one condition is true</p>
</div>
 
<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){

    console.log("Hot day");

}else{

    console.log("Pleasant day");

}</p>
<p> Hot day</p>

</div><p>Why:temp > 30 is true, !true becomes false</p>
 
<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){

    console.log("Truthy value");

}else{

    console.log("Falsy value");

}</p>
<p>Truthy value</p>
<p>Why:0 is a falsy value > </p>
</div>
 
<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Grade:C</p>
<p>Why: 78 >= 70 → true
So grade = "C"</p>


</div>
 
<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Status:Gold</p>
<p>Why: 120 >= 100 → Gold</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Access: Deny</p>
<p>Why:true && false = false</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>6</p>
<p>why: Value increases after execution</p>

</div>
 
<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>9</p>
<p>why: Value increases before execution</p>

</div>
 
<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>5 4</p>
<p>Why:c = 4 (old value)
b = 5 (incremented after)</p>
<p>why: c gets old value → 4
b becomes 5</p>

</div>
 
<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>5 5</p>
<p>why: b increases first
both become 5</p>


</div>
 
<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>10  9</p>
<p>why: Prints old value
Then decrements</p>

</div>
 
<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>12</p>
<p>Why:n++ → 5 (then n = 6)
++n → 7
5 + 7 = 12</p>
<p>why: n++ → 5 → n becomes 6
++n → 7
5 + 7 = 12</p>

</div>
 
<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){

result ++likes;

}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>101</p>
<p>why: ++likes or likes++ is valid
result ++likes is invalid syntax</p>


</div>
 
<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   

console.log("Matched");

}else{

    console.log("Not Matched"); 

}</p>
<p>Matched</p>
<p>Why:Comparison happens before decrement</p>
</div>

---

# DOM Questions and Tasks

## 1. What is the DOM? How does it represent HTML?
DOM (Document Object Model) is a programming interface for web pages.  
It represents HTML as a tree of objects (nodes), so JavaScript can read and modify structure, content, and styles.

## 2. Types of nodes in the DOM tree
- Document node
- Element node
- Text node
- Attribute node
- Comment node

## 3. Element node vs Text node
- Element node: HTML tags like `<div>`, `<p>`, `<span>`.
- Text node: actual text inside elements, like `"Hello"`.

## 4. Identify nodes in `<div>Hello<span>World</span></div>`
- Element node: `<div>`
- Text node inside div: `"Hello"`
- Element node inside div: `<span>`
- Text node inside span: `"World"`

## 5. `getElementById` vs `querySelector`
- `getElementById("id")`: only by id, returns one element or `null`, very fast.
- `querySelector("selector")`: uses CSS selector, returns first match or `null`.

## 6. What does `getElementsByClassName` return? Is it an array?
It returns an `HTMLCollection` (live collection), not a real array.

## 7. Select all buttons with class `buy-now`
```js
const buttons = document.querySelectorAll("button.buy-now");
```

## 8. T1: Change heading text by ID
```js
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to JS DOM";
```

## 9. T2: Select all `<li>` and print text
```js
const list = document.querySelectorAll("li");

list.forEach((val) => {
  console.log(val.textContent);
});

for (let i = 0; i < list.length; i++) {
  console.log(list[i].textContent);
}
```

## 10. `innerText` vs `textContent` vs `innerHTML`
- `innerText`: visible text only (respects CSS/display).
- `textContent`: all text content (faster, ignores styling visibility).
- `innerHTML`: HTML markup + text inside element.

## 11. When use `textContent` instead of `innerHTML`?
Use `textContent` when setting plain text (safer, avoids HTML injection/XSS, better performance).

## 12. T3: Replace paragraph content with bold text
```js
const p = document.querySelector("p");
p.innerHTML = "<b>Updated</b> by JavaScript";
```

## 13. Get image `src` using JavaScript
```js
const img = document.querySelector("img");
console.log(img.src);
```

## 14. What does `setAttribute()` do?
It adds a new attribute or updates an existing attribute on an element.

## 15. Add a `title` attribute dynamically
```js
const box = document.querySelector("div");
box.setAttribute("title", "This is a dynamic title");
```

## 16. Remove `disabled` from a button
```js
const btn = document.querySelector("button");
btn.removeAttribute("disabled");
```

## 17. What does `createElement()` do? What is returned?
It creates a new DOM element node in memory.  
It returns the created element object.

## 18. `appendChild()` vs `prepend()`
- `appendChild(node)`: adds node at end of parent (node only).
- `prepend(...)`: adds at beginning (can take nodes or strings).

## 19. Can you remove an element using `removeChild()`?
Yes. You call it on the parent:
```js
parent.removeChild(child);
```

## 20. Create `<li>New Task</li>` and add to end of `<ul>`
```js
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "New Task";
ul.appendChild(li);
```

## 21. Create image and add at top of a div
```js
const div = document.querySelector("div");
const img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
img.alt = "Placeholder";
div.prepend(img);
```

## 22. Delete first item in a list
```js
const firstItem = document.querySelector("ul li:first-child");
if (firstItem) firstItem.remove();
```

## 23. Change background color of an element
```js
const el = document.querySelector(".box");
el.style.backgroundColor = "lightblue";
```

## 24. `.classList.add()` vs `.classList.toggle()`
- `add("x")`: always adds class `x`.
- `toggle("x")`: adds `x` if missing, removes `x` if present.

## 25. Add `highlight` class to every even item
```js
const li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach((elem) => {
  elem.classList.add("highlight");
});
```

## 26. Set font size of all `<p>` to `18px`
```js
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  p.style.fontSize = "18px";
});
```
