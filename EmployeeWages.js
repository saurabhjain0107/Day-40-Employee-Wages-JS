const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;
    }
}
function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
  }
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
  totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs +=empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days :"+ totalWorkingDays +" Total Hrs: " + 
            totalEmpHrs+ " Employee Wage: "+ empWage);
let totalEmpWage = 0;
// Calc total Wage using Array forEach or reduce method
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: "+ totalWorkingDays + " Total Hrs "+ totalEmpHrs +" Emp Wage "+ totalEmpWage);
function totalWages(totalWages, dailyWage){
    return totalWages + dailyWage;
}
console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages,0));
//Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+" "+dailyWage;
} 
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);
//Show Days when Full time wage of 160 were earned using filter function
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage filter when Full time Earned");
console.log(fullDayWageArr);
//Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First time full Wages Earned:"+ mapDayWithWageArr.find(findFulltimeWage));
//Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("All Element Full Time Wage:"+fullDayWageArr.every(isAllFulltimeWage));
//Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Check if any part Time Wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));
//Find the number of days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("Number Of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked,0));
