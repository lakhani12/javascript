// Q1
const prices1 = [50, 120, 300, 80, 200];
const totalCost = prices1
  .filter(p => p > 100) 
  .map(p => p * 1.05)
  .reduce((s, p) => s + p, 0);

  console.log(prices1)
// Output: 651
// Why: [120,300,200] → tax added → [126,315,210] → sum = 651



// Q2
const minutes = [10, 25, 40, 15, 60];
const calories = minutes
  .filter(m => m >= 20)
  .map(m => m * 4)
  .reduce((s, c) => s + c, 0);
  console.log(calories)

// Output: 500
// Why: [25,40,60] → calories [100,160,240] → total = 500



// Q3
const marks = [35, 55, 80, 20, 45];
const totalMarks = marks
  .filter(m => m >= 40)
  .reduce((s, m) => s + m, 0);
// Output: 180
// Why: [55,80,45] → sum = 180



// Q4
const transactions = [500, -200, 1000, -300, 700];
const credits = transactions
  .filter(t => t > 0)
  .reduce((s, t) => s + t, 0);
// Output: 2200
// Why: [500,1000,700] → sum = 2200



// Q5
const prices2 = [800, 1500, 3000, 600, 1200];
const discountedBill = prices2
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((s, p) => s + p, 0);
// Output: 4845
// Why: [1500,3000,1200] → discount [1275,2550,1020] → total = 4845



// Q6
const hours1 = [5, 7, 8, 6, 9];
const points = hours1
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((s, p) => s + p, 0);
// Output: 240
// Why: [7,8,9] → points [70,80,90] → total = 240



// Q7
const distances = [3, 6, 10, 4, 8];
const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((s, d) => s + d, 0);
// Output: 27
// Why: [6,10,8] → bonus [7,11,9] → total = 27



// Q8
const salaries = [18000, 25000, 30000, 15000];
const payout = salaries
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((t, s) => t + s, 0);
// Output: 59000
// Why: [25000,30000] → bonus [27000,32000] → total = 59000



// Q9
const hours2 = [0.5, 1.5, 2, 0.75, 3];
const studyMinutes = hours2
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((s, h) => s + h, 0);
// Output: 390
// Why: [1.5,2,3] → minutes [90,120,180] → total = 390



// Q10
const units = [80, 120, 200, 90, 150];
const bill = units
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((s, u) => s + u, 0);
// Output: 2820
// Why: [120,200,150] → cost [720,1200,900] → total = 2820



// Q11
const scores1 = [30, 50, 90, 20, 70];
const powerScore = scores1
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((s, v) => s + v, 0);
// Output: 420
// Why: [50,90,70] → doubled [100,180,140] → total = 420



// Q12
const rides = [5, 12, 20, 8, 15];
const totalFare = rides
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((s, r) => s + r, 0);
// Output: 197
// Why: [12,20,15] → add 50 → [62,70,65] → total = 197



// Q13
const hours3 = [4, 6, 8, 5, 9];
const productive = hours3
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((s, h) => s + h, 0);
// Output: 1380
// Why: [6,8,9] → minutes [360,480,540] → total = 1380



// Q14
const purchases = [300, 800, 1200, 400];
const coins = purchases
  .filter(p => p > 500)
  .map(() => 10)
  .reduce((s, c) => s + c, 0);
// Output: 20
// Why: [800,1200] → each gives 10 coins → 20 total



// Q15
const liters = [3, 6, 10, 4, 8];
const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((s, l) => s + l, 0);
// Output: 2520
// Why: [6,10,8] → cost [630,1050,840] → total = 2520



// Q16
const numbers1 = [1, 2, 3, 4, 5];
const cubes = numbers1
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((s, n) => s + n, 0);
// Output: 153
// Why: [1,3,5] → cubes [1,27,125] → total = 153



// Q17
const scores2 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((s, v) => s + v, 0) / scores2.length;
const bonusTotal = scores2
  .filter(s => s > avg)
  .map(s => s + 5)
  .reduce((s, v) => s + v, 0);
// Output: 100
// Why: avg=30 → [40,50] → +5 → [45,55] → total = 100



// Q18
const plans = [199, 399, 599, 299];
const finalBill = plans
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((s, p) => s + p, 0);
// Output: 1177.64
// Why: [399,599] → tax [470.82,706.82] → total = 1177.64



// Q19
const scores3 = [45, 60, 70, 30, 80];
const achievement = scores3
  .filter(s => s >= 60)
  .map(s => s * s)
  .reduce((s, v) => s + v, 0);
// Output: 14900
// Why: [60,70,80] → squares [3600,4900,6400] → total = 14900



// Q20
const numbers2 = [3, 6, 9, 10, 12];
const sum = numbers2
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((s, v) => s + v, 0);
// Output: 300
// Why: [3,6,9,12] → ×10 → [30,60,90,120] → total = 300



// ========================================
// .find() AND .some() METHODS
// ========================================

// Q1: .find() – First even number
// Real life: Find first available even seat number
const seats = [3, 5, 8, 10, 7];
const firstEvenSeat = seats.find(seat => seat % 2 === 0);
console.log(firstEvenSeat); // Output: 8



// Q2: .some() – Any even number?
// Real life: Check if any VIP seat exists
const seats2 = [3, 5, 7, 9];
const hasEvenSeat = seats2.some(seat => seat % 2 === 0);
console.log(hasEvenSeat); // Output: false



// Q3: .find() – First passing mark
// Real life: Find first student who passed
const marks1= [25, 35, 40, 60];
const firstPass = marks1.find(mark => mark >= 40);
console.log(firstPass); // Output: 40



// Q4: .some() – Any failed student?
// Real life: Check if re-test is needed
const marks2 = [60, 70, 55, 30];
const hasFail = marks2.some(mark => mark < 40);
console.log(hasFail); // Output: true



// Q5: .find() – First affordable product
// Real life: Shopping app price filter
const prices = [1500, 1200, 800, 2000];
const affordable = prices.find(price => price <= 1000);
console.log(affordable); // Output: 800



// Q6: .some() – Any discount item?
// Real life: Show discount banner
const prices3 = [500, 800, 1200, 300];
const hasDiscountItem = prices3.some(price => price < 500);
console.log(hasDiscountItem); // Output: true



// Q7: .find() – First long word
// Real life: Auto-suggestion keyword
const words = ['hi', 'hello', 'javascript', 'ok'];
const longWord = words.find(word => word.length > 5);
console.log(longWord); // Output: 'javascript'



// Q8: .some() – Any empty input?
// Real life: Form validation
const inputs = ['name', 'email', '', 'password'];
const hasEmpty = inputs.some(input => input === '');
console.log(hasEmpty); // Output: true




// Q9: .find() – First high transaction
// Real life: Fraud detection
const transactions1 = [200, 500, 1200, 3000, 400];
const highTransaction = transactions1.find(amount => amount > 1000);
console.log(highTransaction); // Output: 1200



// Q10: .some() – System alert check ⭐
// Real life: Check if any value exceeds limit
const temperatures = [30, 32, 35, 42, 36];
const isOverheated = temperatures.some(temp => temp > 40);
console.log(isOverheated); // Output: true