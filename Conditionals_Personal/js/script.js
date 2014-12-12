/*Terry Dietrick
11 Dec 2014
 SDI Section 04WDD
Conditionals Personal
 */

// Calculates your average mile per hour on your drive to work!

var milesWork = prompt("How many miles do you drive to work?",20);
var timetoDrive = prompt("How long does it take to drive to work in minutes?",30);


if(milesWork == "" || milesWork == null){
 milesWork = prompt("Please enter a number value for miles you drove to work!");
}else if(timetoDrive == "" || timetoDrive == null){
 timetoDrive = prompt("Please enter a numerical value for the time it took you to drive to work in minutes!");
}

var avgMPH = parseInt(milesWork)/parseInt(timetoDrive) * 60;

console.log("You drove an average of " + parseInt(avgMPH) + " miles per hour on your way to work!");

