// Step 2: Write a normal function → lastWordCharsCount() with one arg and must return count which is the total 
//characters available in the last word. call this lastWordCharsCount() by passing above strings as a value. Don't forget to log the string and return value value on console.

var result= function lastWordCharsCount(str){
    lastWord="";
    for(let index=str.length-1; index >= 0; index--){
        var char = str.charAt(index);
        if(char == " "){
            break;
        }
        lastWord= lastWord + char;
    }
    return lastWord.length;
}
console.log(`Total Characters in last word of "JavaScript is the language Of Internet" : ${result("JavaScript is the language Of Internet")}`)
console.log(`Total Characters in last word "I am Angular Developer": ${result("I am Angular Developer")}`)
console.log(`Total Characters in last word "Hard work and commitment is the key of success": ${result("Hard work and commitment is the key of success")}`)
console.log(`-------------------------------------------------------------------------------------------------------`);

// Step 1: Write a function expression to count the total number vowels, Make sure to return the vowels count from 
// this Function expression and then log given string and vowels count Call the above FE for the below given string.
var result= function vowelCount(str){
    var count=0;
    for(let index=0; index < str.length; index++){
        if (str.charAt(index).toUpperCase() == "A" || str.charAt(index).toUpperCase ()== "E" || str.charAt(index).toUpperCase ()== "I" ||
        str.charAt(index).toUpperCase() == "O" || str.charAt(index).toUpperCase()== "U"){
            count+=1;
        }
        
    }
    return count;
    
}
console.log(`Total Vowel count in "JavaScript is the language Of Internet" : ${result("JavaScript is the language Of Internet")}`)
console.log(`Total Vowel count in  "I am Angular Developer": ${result("I am Angular Developer")}`)
console.log(`Total Vowel count in  "Hard work and commitment is the key of success": ${result("Hard work and commitment is the key of success")}`)
