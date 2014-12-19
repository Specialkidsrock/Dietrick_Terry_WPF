/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Wacky
 */

// calculates how many days left in the army, and how many days you have been in the army


var yearsIn = prompt("How many years have you been in the Army?", 10);
var yearsLeft = prompt("How many years do you think you have left before you decide to get out?", 2);
var dayOfYear = prompt("What day of the year is it? (1-365)",353);
var daysInaYear = 365;
var hoursInaDay = 24;
var daysLeft = yearsLeft * daysInaYear - dayOfYear;
var daysIn = daysInaYear * yearsIn;
var hoursSpentIn = hoursInaDay * daysIn;





console.log("You have spent " + hoursSpentIn + " hours of your life in the Army!");
console.log("You have " + daysLeft + " days left in the Army, or " + (daysLeft * hoursInaDay) + " hours left in the Army.");

function depressing(longHours,daysToGo,longMinutes){
        terribleHuh = longHours * daysToGo * longMinutes;
        return (terribleHuh);
}
var x = depressing(24,377,3600);

console.log(x);