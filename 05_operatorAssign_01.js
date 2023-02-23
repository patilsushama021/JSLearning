function greaterNumber(num1, num2){
    var result= num1>num2 ?num1:num2;
    console.log(`Greatest number amongst ${num1} and ${num2} is ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log("------------------------step 01------------------------");

function isEvenOrOddNum(num){
    var result= num%2==0 ? true: false;
    return result;
}
console.log(`Whether 21 is Even or not? Ans:- ${isEvenOrOddNum(21)}`);

console.log("------------------------step 02------------------------");

function wordLength(str1){
    var result= str1.length%2==0 ?"Even":"Odd";
    return result;
}
console.log(` whether length of JavaScript Even or odd: ${wordLength("JavaScript")}`);
console.log(` whether length of developer Even or odd: ${wordLength("developer")}`);
console.log(` whether length of Google Even or odd: ${wordLength("Google")}`);
console.log("------------------------step 03------------------------");