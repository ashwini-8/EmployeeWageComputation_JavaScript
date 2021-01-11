function EmployeeWageProgram() {
    console.log("Welcome to Employee Wage Computation Program Using JavaScript")
    let Present = 1
    const IS_FULL_TIME = 1
    const IS_PART_TIME = 2
    const EMP_RATE_PER_HOUR = 20
    const NUM_OF_WORKING_DAYS = 20
    const MAX_HRS_IN_MONTH = 100
    let empHrs = 0
    let totalWorkingDays = 0
    let totalEmpHrs = 0
    let empCheck = 0
    let  monthlyWage = 0
    
    while (totalWorkingDays < NUM_OF_WORKING_DAYS && totalEmpHrs < MAX_HRS_IN_MONTH )  {
        empCheck = Math.floor(Math.random() * 10) % 3
        switch(empCheck){
            case  IS_FULL_TIME:
                console.log("employee is full time \t " + "emp hours: ",empHrs)
                empHrs = 8
                break;
            case IS_PART_TIME:
                console.log("employee is part time  \t " + "emp hours: ", empHrs)
                empHrs = 4
                break;
            default:
                console.log("employee is absent \t " + "emp hours: ", empHrs)
            }
        empWageDay = empHrs * EMP_RATE_PER_HOUR 
        monthlyWage = monthlyWage + empWageDay
        totalEmpHrs = totalEmpHrs + empHrs - 4
        }
    console.log("employee Wage for a Month ", monthlyWage)
    console.log("employee hours for a Month ", totalEmpHrs)
}
EmployeeWageProgram();