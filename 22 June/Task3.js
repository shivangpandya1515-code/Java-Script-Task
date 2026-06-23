// 1. Display employee details.

let employee = {
    empId : 101,
    empName : "Shiva",
    department : "Web Development",
    salary : 30000,
    
    showDetails: function showDetails() {
        console.log("Employee ID: " + this.empId);
        console.log("Employee Name: " + this.empName);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.department);
    }
};

console.log(employee);

// 2. Increase salary by 10%.

// employee.salary = employee.salary * 0.10 + employee.salary;

// console.log(employee);

// 3. Add a property `experience`.

// employee.experience = "2 Years";

// console.log(employee);

// 4. Delete the `department` property.

// delete employee.department;

// console.log(employee);

// 5. Create a method `showDetails()` to display employee information.

employee.showDetails();