// Write a function factorialOfNum() with one argument and return result → factorial of that number
// Call this function with below arguments as shown below, Pls log the result with meaning message

function factorialOfNum(num) {
  if (
    num == undefined ||
    num == null ||
    typeof num == "string" ||
    isNaN(num) ||
    num < 0
  ) {
    return "Please enter valid number";
  } else if (typeof num == "number") {
    let fact = 1;
    for (let i = num; i >= 1; i--) {
      fact = fact * i;
    }
    return fact;
  }
}
console.log(`Factorial  : ${factorialOfNum(5)}`);
console.log(`Factorial  : ${factorialOfNum(3)}`);
console.log(`Factorial  : ${factorialOfNum(null)}`);
console.log(`Factorial  : ${factorialOfNum(8)}`);
console.log(`Factorial  : ${factorialOfNum(undefined)}`);
console.log(`Factorial  : ${factorialOfNum(9)}`);
console.log(`Factorial  : ${factorialOfNum(0)}`);
console.log(`------------------------------------------------------------------`);






