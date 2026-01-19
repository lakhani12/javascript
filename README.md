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

 



 