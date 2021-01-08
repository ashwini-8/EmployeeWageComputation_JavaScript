function EmployeeWageProgram() {
    console.log("Welcome to Employee Wage Computation Program Using JavaScript")
    //UC1
    let Present = 1;
    //UC2
    const IS_FULL_TIME = 1;
    const EMP_RATE_PER_HOUR=20;
    let empHrs ;
    let empWage;
    let  empCheck = Math.floor(Math.random() * 10) % 3;
    //UC3
    if (empCheck==IS_FULL_TIME) {
        console.log("employee is full time present ")
        empHrs = 8
        empWage = empHrs * EMP_RATE_PER_HOUR
        console.log("employeeWage ",empWage)
    } else
    {   console.log("employee is part time present  ")
        empHrs = 4
        empWage = empHrs * EMP_RATE_PER_HOUR
        console.log("employeeWage ",empWage)
        }
     }
EmployeeWageProgram();