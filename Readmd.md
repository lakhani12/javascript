# Readmd.md — Solutions (Q1–Q20)

Q1. Shopping List – Price Increase
```js
const prices = [100, 200, 300];
const increased = prices.map(p => p + 20);
console.log(increased); // Output: [120, 220, 320]
```

Q2. Exam Marks – Passing Students
```js
const marks = [35, 60, 45, 20, 80];
const passing = marks.filter(m => m >= 40);
console.log(passing); // Output: [60, 45, 80]
```

Q3. Attendance Check
```js
const attendance = [80, 90, 70, 85];
const anyBelow75 = attendance.some(a => a < 75);
console.log(anyBelow75); // Output: true
```

Q4. Find First Discounted Item
```js
const pricesQ4 = [1200, 800, 450, 600];
const firstUnder500 = pricesQ4.find(p => p < 500);
console.log(firstUnder500); // Output: 450
```

Q5. Salary Calculation
```js
const salaries = [18000, 25000, 30000, 15000];
const payout = salaries
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((sum, s) => sum + s, 0);
console.log(payout); // Output: 25000+2000 + 30000+2000 = 27000 + 32000 = 59000
```

Q6. Product Quality Check
```js
const ratings = [4, 5, 4, 4];
const allGood = ratings.every(r => r >= 4);
console.log(allGood); // Output: true
```

Q7. Daily Expenses – Total
```js
const expensesQ7 = [200, 150, 300, 100];
const totalExpenses = expensesQ7.reduce((s, e) => s + e, 0);
console.log(totalExpenses); // Output: 750
```

Q8. Scores Update
```js
const scoresQ8 = [45, 60, 80, 30, 70];
const updated = scoresQ8
  .filter(s => s > 50)
  .map(s => s + 10);
console.log(updated); // Output: [70, 90, 80]
```

Q9. Array Destructuring – Top Scores
```js
const scoresQ9 = [95, 90, 85, 80];
const [top1, top2] = scoresQ9;
console.log(top1, top2); // Output: 95 90
```

Q10. Shopping Cart Merge
```js
const cart1 = [200, 400];
const cart2 = [300, 500];
const mergedCart = [...cart1, ...cart2];
console.log(mergedCart); // Output: [200, 400, 300, 500]
```

Q11. Expense Validation
```js
const expensesQ11 = [200, 450, 800, 1200];
const allBelow1000 = expensesQ11.every(e => e < 1000);
console.log(allBelow1000); // Output: false
```

Q12. Transaction Analysis
```js
const transactions = [500, -200, 1200, 300];
const firstAbove1000 = transactions.find(t => t > 1000);
const anyNegative = transactions.some(t => t < 0);
console.log(firstAbove1000); // Output: 1200
console.log(anyNegative); // Output: true
```

Q13. Student Result Summary
```js
const marksQ13 = [30, 45, 60, 25, 80];
const passingQ13 = marksQ13.filter(m => m >= 40);
const avgPassing = passingQ13.reduce((s, m) => s + m, 0) / passingQ13.length;
console.log(passingQ13); // Output: [45, 60, 80]
console.log(avgPassing); // Output: 61.666666666666664
```

Q14. Temperature Alert System
```js
const temps = [22, 30, 45, 28];
const anyAbove40 = temps.some(t => t > 40);
const allAbove20 = temps.every(t => t > 20);
console.log(anyAbove40); // Output: true
console.log(allAbove20); // Output: true
```

Q15. Spread + Reduce Combo
```js
const a = [1, 2, 3];
const b = [4, 5, 6];
const total = [...a, ...b].reduce((s, n) => s + n, 0);
console.log(total); // Output: 21
```

Q16. Bonus Eligibility
```js
const scoresQ16 = [60, 70, 80, 90];
const avgQ16 = scoresQ16.reduce((s, n) => s + n, 0) / scoresQ16.length;
const everyAboveAvg = scoresQ16.every(s => s > avgQ16);
console.log(avgQ16); // Output: 75
console.log(everyAboveAvg); // Output: false
```

Q17. First Valid Input
```js
const inputs = ['', '', 'name', 'email'];
const firstNonEmpty = inputs.find(i => i !== '');
console.log(firstNonEmpty); // Output: 'name'
```

Q18. Salary Spread
```js
const salariesQ18 = [20000, 30000, 40000];
const newSalaries = [...salariesQ18, 50000];
console.log(newSalaries); // Output: [20000, 30000, 40000, 50000]
```

Q19. Performance Check
```js
const performance = [55, 65, 45, 80];
const anyBelow50 = performance.some(p => p < 50);
const allAbove60 = performance.every(p => p > 60);
console.log(anyBelow50); // Output: true
console.log(allAbove60); // Output: false
```

Q20. Interview Finisher
```js
const x = [1, 2, 3];
const y = [4, 5, 6];
const totalQ20 = [...x, ...y]
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((s, n) => s + n, 0);
console.log(totalQ20); // Even numbers: [2,4,6] -> squares [4,16,36] -> sum = 56
```

---

File created: Readmd.md — contains runnable JS snippets and expected outputs.