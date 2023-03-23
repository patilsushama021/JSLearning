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

let arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`------------------------TCS Employee-------------------------`);
arrayEmployees.filter( empDetail => empDetail.emp_company === "TCS")
.map(empDetail => console.log(`Company Name: ${empDetail.emp_company} Employee Name: ${empDetail.emp_name}`));

console.log(`------------------------Average Salary of Employee from Wipro-------------------------`);

let salary = arrayEmployees.filter(empDetail => empDetail.emp_company === "Wipro")
.map(empDetail => empDetail.emp_salary)
.reduce((runningTotal, value) => runningTotal+value);
console.log(`Total salary of employee from Wipro: ${salary}`);

let numEmployee = arrayEmployees.filter(empDetail => empDetail.emp_company === "Wipro").length;
console.log(`Total number of employee from Wipro: ${numEmployee}`);

averageSalary = Math.round(salary / numEmployee);
console.log(`Average salary of employee from Wipro company: ${averageSalary}`);

console.log(`------------------------Average Salary of Employee from Wipro and Infy-------------------------`);

let comSalary = arrayEmployees.filter( emp => emp.emp_company ==="Wipro" || emp.emp_company === "Infy")
.map(emp => emp.emp_salary)
.reduce((runningTotal, value) => runningTotal + value);
console.log(`Total salary of wipro and Infy Employee: ${comSalary}`);
let comNum = arrayEmployees.filter(emp => emp.emp_company === "Wipro" || emp.emp_company === "Infy").length;
console.log(`Total number of employees from wipro and Infy: ${comNum}`);
comAverageSalary = Math.round(comSalary / comNum);
console.log(`Average salary of employee from Wipro and Infy company: ${comAverageSalary}`);



