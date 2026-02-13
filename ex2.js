// Q1. Shopping App – Discounted Total
const prices1 = [200, 800, 1200, 450, 700];
const total1 = prices1
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);

console.log("Q1 Output:", total1);
// Filter → [800,1200,700]
// Discount → [720,1080,630]
// Total → 2430



// Q2. Fitness App – Total Active Minutes
const minutes = [20, 45, 60, 15, 90];
const totalCalories = minutes
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);

console.log("Q2 Output:", totalCalories);
// Filter → [45,60,90]
// Calories → [225,300,450]
// Total → 975



// Q3. Exam System – Average of Passed Marks
const marks = [35, 72, 88, 40, 25, 90];
const passed = marks.filter(mark => mark >= 40);
const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

console.log("Q3 Output:", average);
// Passed → [72,88,40,90]
// Sum = 290 → Average = 72.5



// Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);

console.log("Q4 Output:", totalPayout);
// Filter → [800,1000,600]
// Bonus → [900,1100,700]
// Total → 2700



// Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];
const totalPoints1 = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);

console.log("Q5 Output:", totalPoints1);
// Filter → [50,75,100]
// Points → [100,150,200]
// Total → 450



// Q6. Bank Transactions – Final Balance
const transactions = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);

console.log("Q6 Output:", creditedAmount);
// Credits → [1000,2000,1500]
// Interest → [1020,2040,1530]
// Total → 4590



// Q7. Game App – Final Score
const scores = [30, 60, 90, 45, 80];
const finalScore = scores
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);

console.log("Q7 Output:", finalScore);
// Filter → [60,90,80]
// Bonus → [70,100,90]
// Total → 260



// Q8. E-commerce – Total Taxed Amount
const prices2 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices2
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);

console.log("Q8 Output:", finalAmount);
// Filter → [1200,3000,1500]
// Tax → [1416,3540,1770]
// Total → 6726



// Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];
const totalPoints2 = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);

console.log("Q9 Output:", totalPoints2);
// Filter → [8,9,10]
// Points → [80,90,100]
// Total → 270



// Q10. Interview Brain Teaser
const numbers = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);

console.log("Q10 Output:", sumOfSquares);
// Even → [2,4,6]
// Squares → [4,16,36]
// Total → 56