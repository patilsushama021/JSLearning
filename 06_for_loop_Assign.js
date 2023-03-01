// WAP to print numbers from 5 to 15 by incrementing 1
for (let index=5; index<16; index++){
    console.log(index);
}

// WAP to print numbers from 50 to 40 by decrementing by 1
for (let index=50; index>=40; index--){
    console.log(index);
}

// WAP to find first 15 odd numbers
for (let index=1; index<=30; index++){
    if(index % 2 != 0){
        console.log(index);
    }
}

// WAP to find first 10 even numbers
let start= 1;
let end= 20;
for(i=start; i<=end; i++){
    if(i % 2 === 0){
    console.log(i);
    }
}

// WAP to print table of 5 like 5 10 15 20 25 → ...... 50
// var i = 5;

function tableOf(i){
    for (let index= 1; index <= 10; index++){
        var result= i * index;
        console.log (`${i} x ${index} = ${result}`);
    }
}
console.log(tableOf(5));

// WAP to print table of 10 like 10 20 30 40 100
console.log(tableOf(10));

// WAP to print table of 10 in reverse order like → 100 90 80 70 ...... 10
function tableOf(i){
    for (let index= 10; index >= 1; index--){
        var result= i * index;
        console.log (`${i} x ${index} = ${result}`);
    }
}
console.log(tableOf(10));