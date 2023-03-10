const professor = {
  name: "Mr. Sunil Patil",
  age: 45,
  department: "Civil Engineering",
  subject: "SOM",
  empId: 123456,
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
    SSC: "science",
    HSC: "Computer Science",
  },
  certificate: [
    "Hacker ranker",
    " Certificate in IFE course",
    "Certificate in Adv Programming",
  ],
  show: function () {
    return `${this.degrees.SSC}, ${this.degrees.HSC}, ${this.degrees.engineering} and ${this.degrees.PHD}.`;
  },
};
console.log(professor);
console.log(`*************Concating degrees********************`);
console.log(`Teacher degrees are ${professor.show()}`);

console.log(`*******************Adding new property************`);
professor.totalExperience = "14 years";
console.log(`Total Experience of professor: ${professor.totalExperience}`);

console.log(`*******************Modifying  Any Existing property************`);
professor.department ="Computer Science";
console.log(`After modifying property of department: ${professor.department}`);

console.log(`*******************Adding new element in value************`);
professor.certificate.push("Oracle Certified")

console.log(`*******************Last element of array************`);
console.log(`Last element of certicate : ${professor.certificate[professor.certificate.length-1]}`);

