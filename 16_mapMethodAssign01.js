/* const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
For the given array Perform the below operations as
1. Add 10 into each element and log new array result on console
2. Square the each array element and log on console
3. Add the index value into its corresponding each array element and log new array result on console */

arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const sumTen = arrayNumbers.map(i => i+10 );
console.log(`Adding 10 in each element: ${sumTen}`);
console.log(`*********************************************`);

const square = arrayNumbers.map( i => i**2 );
console.log(`Square of each element: ${square}`);
console.log(`*********************************************`);

let indexAddition = arrayNumbers.map( (element, index) => {
    return (element + index) });
console.log(`Addition of index value into its corresponding element: ${indexAddition}`);

