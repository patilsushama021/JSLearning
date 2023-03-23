const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
let numGreater = arrayNumbers.filter(num => num > 50);
console.log(`Elements Greater than 50: ${numGreater}`);
console.log(`-----------------------------------------------------------`);

let evenArray = arrayNumbers.filter(num => num % 2 === 0);
console.log(`Even Numbers in Array: ${evenArray}`);
console.log(`-----------------------------------------------------------`);

let oddArray = arrayNumbers.filter( num => num % 2 !== 0);
console.log(`Odd Numbers in Array: ${oddArray}`);
console.log(`-----------------------------------------------------------`);

let fiveMultiple = arrayNumbers.filter(num => num % 5 == 0);
console.log(`Numbers which are Multiple of Five in Array: ${fiveMultiple} `);
console.log(`-----------------------------------------------------------`);

let numBetween = arrayNumbers.filter(num => 20 < num && num < 50);
console.log(`Numbers between 20 and 50 in Array: ${numBetween} `);

