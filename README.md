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
