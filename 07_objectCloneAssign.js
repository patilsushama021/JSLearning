const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const clonedArray = arrayNums;
clonedArray.push(55, 66);
console.log((`Original Array: ${arrayNums}`));
console.log(`Cloned Array: ${clonedArray}`);
const uniqueArrayNums = [...arrayNums]; 
// console.log(uniqueArray);
uniqueArrayNums.push(10, 25);
console.log("After deep cloning");
console.log((`Original Array: ${uniqueArrayNums}`));
console.log(`Cloned Array: ${clonedArray}`);
console.log(`-----------------------------------------------`);

arrayEven = [2, 30, 14, 8];
const concatArray = uniqueArrayNums.concat(arrayEven);
console.log(`After Concatination: ${concatArray}`);
console.log(`-----------------------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,0000 INR",
        aug_month: "50,0000 INR",
        jun_month: "65,0000 INR"
    },
    address:{
        locality:{
            colony: "Om Vridavan Society",
            street: "Kanch Pokali, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"  
    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"]
}
console.log(`Address:- Locality: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, 
        City: ${employee_info.address.city}, State: ${employee_info.address.state},Country: ${employee_info.address.country} `);
console.log(`mobiles: ${employee_info.mobiles}`);
        console.log(`-----------------------------------------------`);
const clonedEmployeeInfo = JSON.parse(JSON.stringify(employee_info));
 employee_info.salary.july_month = "80,000 INR";
 employee_info.address.country = "United Kingdom";
 console.log(`Original Object: Salary: ${clonedEmployeeInfo.salary.july_month},
    Country: ${clonedEmployeeInfo.address.country}`);

 console.log(`Cloned Object: Salary: ${employee_info.salary.july_month},
    Country: ${employee_info.address.country}`);

