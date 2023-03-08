const arrayNumbers=[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
// find total elements available 
let lengthArrayNum= arrayNumbers.length;
console.log(`Total elements available: ${lengthArrayNum}`);
console.log(`***********************01**********************`);

// first & last element
let firstElement= arrayNumbers[0];
let lastElement= arrayNumbers[arrayNumbers.length-1];

console.log(`First element available: ${firstElement}`);
console.log(`Last element available: ${lastElement}`);
console.log(`***********************02**********************`);

// Third last element using length property
let third_Last_Element= arrayNumbers[arrayNumbers.length-3];
console.log(`Third Last element: ${third_Last_Element}`);
console.log(`***********************03**********************`);

// Find all the even numbers
let evenArray= [];
for(let i=0; i<arrayNumbers.length; i++){
    if(arrayNumbers[i] % 2 == 0){
        evenArray.push(arrayNumbers[i]);
    }
}
console.log(`Even numbers in Array: ${evenArray}`);
console.log(`***********************04**********************`);

// Find odd numbers
let oddArray= [];
for(let i=0; i<arrayNumbers.length; i++){
    if(arrayNumbers[i] % 2 !== 0){
        oddArray.push(arrayNumbers[i]);
    }
}
console.log(`Odd Numbers in Array: ${oddArray}`);
console.log(`***********************05**********************`);

// Find all even positioned elements and sum it
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    if(i % 2 == 0){
        sum= sum + arrayNumbers[i];
    }
}
console.log(`Sum of even positioned elements: ${sum}`);
console.log(`***********************06**********************`);

// find odd positioned elements and sum it
let oddSum = 0;
for(let i = 0; i < arrayNumbers.length; i++){
    if( i % 2 !== 0){
        oddSum = oddSum + arrayNumbers[i];
    }
}
console.log(`Sum of odd positioned elements: ${oddSum} `);
console.log(`***********************07**********************`);

// Sum of all elements
let sumAll=0;
for(let i = 0; i<arrayNumbers.length; i++){
    sumAll= sumAll + arrayNumbers[i];
}
console.log(`Sum of all elements from arrayNumbers: ${sumAll}`);
console.log(`***********************08**********************`);

// find numbers which are multiple of 5
let fiveMultiple=[];
for(let i = 0; i<arrayNumbers.length; i++){
    if(arrayNumbers[i] % 5 == 0){
        fiveMultiple.push(arrayNumbers[i]);
    }
}
console.log(`Numbers which are multiple of Five: ${fiveMultiple}`);
console.log(`***********************09**********************`);

// is number 115 available in arayNumbers
let num= arrayNumbers.includes(115);
console.log(`Is Number 115 available in arrayNumbers: ${num}`);
console.log(`***********************10**********************`);

// is number 23 available in arayNumbers
let number= arrayNumbers.includes(23);
console.log(`Is Number 23 available in arrayNumbers: ${number}`);
console.log(`***********************11**********************`);

// Insert numbers →55, 66 before index 3 and log array on console
arrayNumbers.splice(3, 0, 55, 66);
console.log(`Insert numbers →55, 66 before index 3: ${arrayNumbers}`);
console.log(`***********************12**********************`);


// Delete 3 elements starting from index 4 and log arrayNumbers on console
arrayNumbers.splice(4, 3);
console.log(`Delete 3 elements starting from index 4: ${arrayNumbers}`);
console.log(`***********************13**********************`);