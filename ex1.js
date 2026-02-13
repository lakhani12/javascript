//  Total money in wallet
// Real life:** Add all cash amounts js

const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
console.log(totalMoney)



// ### 2. Total steps walked in a week
// **Real life:** Fitness tracker
// js
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);

console.log(weeklySteps)



// 3. Find total cart price
// Real life:** Shopping bill
// js

const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);



// ### 4. Find maximum score
// **Real life:** Highest exam mark
// ```js
const marks1 = [45, 88, 67, 92];
const highest = marks1.reduce((max, mark) => {
  return mark > max ? mark : max;
},
 marks[0]);



// ### 5. Count total characters
// **Real life:** Text length calculation
// ```js
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);




// ### 6. Combine words into a sentence
// **Real life:** Message builder
// ```js
const words1 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);



// ### 7. Count passed students
// **Real life:** Result summary
// ```js
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
// ```

// ---

// ### 8. Calculate final balance
// **Real life:** Bank account calculation
// ```js
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// ```
// ---

// ---

// ### 10. Build comma-separated string
// **Real life:** Display values in UI
// ```js
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
// ```
// ---