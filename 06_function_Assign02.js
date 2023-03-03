// Write a function factorialofWordsCount() with one argument.
// 1. Call this function with below arguments as shown below, Pls log the result with meaning message
// 2. In this function count the total number of words available in the received argument string
// 3.
// Calculate the factorial → total word count and then result this as a result
// factorialofWordsCount("Revision is the mother of Success");
// factorialofWordsCount("We never fail, we always learn");
// factorialofWordsCount(null)
// factorialofWordsCount("")
// factorialofWordsCount("You Full name"); // Pls pass here you full name as a string

function factorialofWordsCount(str) {
  if (str == undefined || str == null) {
    return "Please enter valid input";
  } else {
    let words= str.split(" ");
    let wordsCount= words.length;
    let fact = 1;
    for (let i= wordsCount; i>=1; i--){
      fact = fact * i;
    }
    return fact;
  }
}

console.log(
  `Factorial of length of Word- Revision is the mother of Success: ${factorialofWordsCount(
    "Revision is the mother of Success"
  )}`
);
console.log(
  `Factorial of length of Word- We never fail, We always learn: ${factorialofWordsCount(
    "We never fail, We always learn"
  )}`
);
console.log(`Factorial of length of Word- null: ${factorialofWordsCount(null)}`);
console.log(`Factorial of length of Word : ${factorialofWordsCount("")}`);
console.log(
  `Factorial of length of Word- Sushama Patil: ${factorialofWordsCount("Sushama Patil")}`
);
console.log(`----------------------------------------------------------------------`);

// function factorialofWordsCount(str) {
//   if (str === undefined || str === null) {
//     return "Please enter valid input";
//   } else {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === " ") {
//         continue;
//       }
//       count = count + 1;
//     }
//     let fact = 1;
//     for (let j = count; j >= 1; j--) {
//       fact = fact * j;
//     }
//     return fact;
//   }
// }
// console.log(
//     `Factorial of length of Word: ${factorialofWordsCount("Sushama Patil")}`
//   );