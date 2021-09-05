var expenses = [4000, 5000, 6500, 5000, 2800, 3500];

console.log(expenses) // before adding interest

expenses.forEach(function(num, index) {
  if (num > 4000) {
    num = (num*1.02);
    expenses[index] =num;
  }})

console.log(expenses)