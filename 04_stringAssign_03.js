function squareOfWordLength(str1){
    var strLength= str1.length;
    lenSquare= strLength**2;
    return lenSquare;
}
result= squareOfWordLength("JavaScript");
console.log(`Square of Word Length-Javascript ${result}`);
result= squareOfWordLength("Google Chrome");
console.log(`Square of Word Length-Google Chrome ${result}`);
result= squareOfWordLength("Developer Smart");
console.log(`Square of Word Length-Developer Smart ${result}`);
console.log("----------------------step01---------------------------------")
// 2nd Question

var str= "I am Angular Developer";
function operatorOnString(){
    var strLength= str.length;
    var strWordLength= str.split(" ").length;
    var divisionResult= strLength/strWordLength;
    console.log(`Division of String length by String Word: ${divisionResult}`);
    var multiResult= strLength*strWordLength;
    console.log(`Multiplication of String length by String Word: ${multiResult}`);
}
operatorOnString()
console.log("----------------------step02---------------------------------")
