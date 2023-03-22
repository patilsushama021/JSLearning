class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arryOfEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


arryOfEmployee.forEach(( empDetail ) => {
    if(empDetail.emp_company === "TCS"){
        console.log( `Employee Name: ${empDetail.emp_name} and Company Name: ${empDetail.emp_company}`);

    } 
});
console.log(`**************************************************************`);

console.log(`Name of Employees whose salary is greater or equal to Rs.50000`);
arryOfEmployee.forEach(empDetail =>{
    if(empDetail.emp_salary >= 50000){
        console.log(`Name: ${empDetail.emp_name}, Id: ${empDetail.emp_id}, 
        Department: ${empDetail.emp_dept}, Salary: ${empDetail.emp_salary}
        Company:${empDetail.emp_company}`);
    }
});
console.log(`**************************************************************`);

let sum = 0;
arryOfEmployee.forEach(empDetail => {
    sum += empDetail.emp_salary;
});
console.log(`Sum of all employees salary: ${sum}`);
console.log(`**************************************************************`);

let count = 0;
arryOfEmployee.forEach(empDetail => count += 1);
let averageSalary = Math.round(sum/count);
console.log(`Average Salary is ${averageSalary}`);
console.log(`**************************************************************`);

arryOfEmployee.forEach(empDetail =>{
    if((empDetail.emp_salary >= 75000 && empDetail.emp_dept ==="IT") || 
     (empDetail.emp_salary >= 75000 && empDetail.emp_dept === "HR")) {
        console.log(`Name: ${empDetail.emp_name}, Id: ${empDetail.emp_id}, 
        Department: ${empDetail.emp_dept}, Salary: ${empDetail.emp_salary}
        Company:${empDetail.emp_company}`);
    }
});