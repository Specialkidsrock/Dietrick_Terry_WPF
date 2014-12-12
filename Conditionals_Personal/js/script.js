/*Terry Dietrick
11 Dec 2014
 SDI Section 04WDD
Conditionals Personal
 */

// Calculates your average mile per hour on your drive to work!

var milesWork = prompt("How many miles do you drive to work?",20); //prompts the user for their travel distance in miles to work
var timetoDrive = prompt("How long does it take to drive to work in minutes?",30); // prompts the user for the time it takes in minutes to drive that distance


if(milesWork == "" || milesWork == null){ // if mileswork variable is equal to blank or null values it prompts the user to re enter the value
 milesWork = prompt("Please enter a number value for miles you drove to work!");
}else if(timetoDrive == "" || timetoDrive == null){
 timetoDrive = prompt("Please enter a numerical value for the time it took you to drive to work in minutes!");
}

var avgMPH = parseInt(milesWork)/parseInt(timetoDrive) * 60;

console.log("You drove an average of " + parseInt(avgMPH) + " miles per hour on your way to work!");

