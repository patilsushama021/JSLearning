// 1st question
function voteEligibility(age) {
    if(age <= 0 || age == undefined || age == null || age>120){
        console.log(`Hey pal please enter valid age value`);
    }
    if (age<120 && age >= 18) {
        console.log(`Hey pal, you are ${age} so you are eligible for voting`);     
    } 
    if (age>0 && age<18) {
        console.log(`Hey pal, you are ${age} so you are not eligible for voting`);
    } 
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(undefined);
voteEligibility(null);
console.log(`***********************step01*********************************`);

// 2nd question
function gradeCalculation(marks) {
    if (marks < 0 || marks > 100 || marks == undefined || marks == null || typeof (marks) == "string" || marks == NaN) {
        console.log(`please enter the valid marks`);
    }
    if (100 > marks && marks >= 90) {
        console.log(`Funtastic marks: ${marks}, Your grade is A+`);
    }
    if (90 > marks && marks >= 75) {
        console.log(`Excellent Marks: ${marks}, Your grade is A`);
    }
    if (75 > marks && marks >= 50) {
        console.log(`Good marks: ${marks}, Your grade is B`);
    }
    if (50 > marks && marks >= 35) {
        console.log(`Marks is ${marks}, Your grade is C, need improvement`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("eighty");
gradeCalculation(NaN);
gradeCalculation(null);