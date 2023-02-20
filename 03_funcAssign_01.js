function product(){
    var prod= 6 * 5;
    console.log("Product of 6 & 5 is",prod);
}
product();

function sum(){
    var sum= 6 + 5;
    console.log("Sum of 6 & 5 is",sum);
}
sum();
console.log('************','step-01','****************');
// 2nd question
function personalDetails(firstName, lastName, collegeName){
    var fName= firstName;
    var lName= lastName;
    var clgName= collegeName;
    console.log("Full Name:",fName,lName);
    console.log("College Name:", clgName);
}
personalDetails("Sushama", "Patil", "RIT Islampur");
console.log('************','step-02','****************');

// 3rd question
function swapValuesDude(val1, val2){
    console.log("before swap:", val1, val2);
    var temp= val1;
    val1= val2;
    val2= temp;
    console.log("after swap:", val1, val2);
}
swapValuesDude("Virat", "Anushka");

swapValuesDude(1000, 2000);
console.log('************','step-03','****************');

// 4th question
function addThreeValues(num1, num2, num3){
    var sum= num1+num2+num3;
    return sum;
}
result= addThreeValues(10.23, 600, 40);
console.log("Addition of Three Values:",result);

result=addThreeValues("Hello ","Good ","Morning ");
console.log("Addition of Three Values:",result);
console.log('************','step-04','****************');
