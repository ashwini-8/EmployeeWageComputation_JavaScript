function EmployeeWageProgram() {
    console.log("Welcome to Employee Wage Computation Program Using JavaScript")
  
    //UC1
    let Present = 1;
    //UC2
    const IS_FULL_TIME = 1;
    const EMP_RATE_PER_HOUR=20;
    let empHrs = 8;
    let  empCheck = Math.floor(Math.random() * 10) % 2;
    
    if (empCheck == Present) {
        console.log("employee is present ")
        let empWage = empHrs * EMP_RATE_PER_HOUR
        console.log("employeeWage ",empWage);
    } else {
        console.log("employee is absent ");
    }
  }
EmployeeWageProgram();