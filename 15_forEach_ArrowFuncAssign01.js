'use strict'
let arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -60];

arrayNumbers.forEach((value, index) => {
    console.log(`Element: ${value} <=> Index: ${index}`);
})
console.log(`*************************************************`);

let arrayOfPos = [];
arrayNumbers.forEach( element => {
    if(element >= 0){
        arrayOfPos.push(element);
    }
});
console.log(`Positive Numbers in Array: ${arrayOfPos}`);
console.log(`*************************************************`);

let arrayOfNegs = [];
arrayNumbers.forEach( element => {
    if(element < 0){
        arrayOfNegs.push(element);
    }
});
console.log(`Negative Numbers in Array: ${arrayOfNegs}`);
console.log(`*************************************************`);

let arrayOfEven = [];
arrayNumbers.forEach( element => {
    if(element % 2 === 0){
        arrayOfEven.push(element);
    }
});
console.log(`Even Numbers in Array: ${arrayOfEven}`);
console.log(`*************************************************`);

let sum = 0;
arrayNumbers.forEach(element => {
    sum += element;
});
console.log(`Sum of all elements from Array is ${sum}`);
console.log(`*************************************************`);

let evenIndex=[]
arrayNumbers.forEach((value, index) => {
    if(index % 2 === 0){
        evenIndex.push(value);
    }
});
console.log(`Even Indexed array value: ${evenIndex}`);
