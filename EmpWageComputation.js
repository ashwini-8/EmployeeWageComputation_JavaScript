function EmployeeWageProgram() {
    console.log("Welcome to Employee Wage Computation Program Using JavaScript")
    //UC1
    let Present = 1;
    //UC2
    const IS_FULL_TIME = 1;
    const IS_PART_TIME = 2;
    const EMP_RATE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    let empHrs = 0;
    let empWage;
    let empCheck;
   
    //UC3
    for(let i = 0 ; i < NUM_OF_WORKING_DAYS; i++ ){
         empCheck = Math.floor(Math.random() * 10) % 3;
    
        switch(empCheck){
            //UC4
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