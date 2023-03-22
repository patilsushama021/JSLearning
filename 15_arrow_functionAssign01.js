let arrowFunc = () => {
    console.log(`Good Morning, Today is Monday`);
};
arrowFunc();

console.log(`-------------------------------------------------`);

let multi = (num1, num2, num3) => {
    console.log(`Multiplication of values to be passed 
    ${num1}, ${num2}, ${num3} ===> ${num1 * num2 * num3}`);
};
multi(5, 5, 2);
console.log(`-------------------------------------------------`);
let multiplication = (num1, num2, num3 = 1) => {
    console.log(`Multiplication of values to be passed
    ${num1}, ${num2}, ${num3}  ===> ${num1 * num2 * num3}`);
};
multiplication(10, 4);
console.log(`-------------------------------------------------`);

let add = (num1, num2, num3, num4, num5) => {
    console.log(`Addition of values to be passed 
    ${num1}, ${num2}, ${num3}, ${num4}, ${num5} ===> ${num1 + num2 + num3 + num4 + num5}`);
};
add (100, 100, 200, 349, 756);
console.log(`-------------------------------------------------`);
add( "I am ", "learning ", "ES6 ", "features ", "in depth ")
