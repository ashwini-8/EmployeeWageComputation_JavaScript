function EmployeeWageProgram() {
    console.log("Welcome to Employee Wage Computation Program Using JavaScript")
    let Present = 1;
    const IS_FULL_TIME = 1;
    const IS_PART_TIME = 2;
    const EMP_RATE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 100;
    let empHrs = 0;
    let empWage = 0;
    let totalWorkingDays = 0;
    let totalEmpHrs = 0;
    let empCheck = 0;
    
    while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS ){
        totalWorkingDays++; 
        empCheck = Math.floor(Math.random() * 10) % 3;
    
        switch(empCheck){
            case  IS_FULL_TIME:
                console.log("employee is full time ")
                empHrs = 8
                empWageDay = empHrs * EMP_RATE_PER_HOUR 
                console.log("employee Wage for a day ",empWageDay)
                break;
            case IS_PART_TIME:
                console.log("employee is part time ")
                empHrs = 4
                empWageDay = empHrs * EMP_RATE_PER_HOUR 
                console.log("employee Wage for a day ",empWageDay)
                break;
            default:
                console.log("employee is absent ")
                empWageDay = empHrs * EMP_RATE_PER_HOUR
                console.log("employee Wage for a day ",empWageDay)
        }
    }
}
EmployeeWageProgram();