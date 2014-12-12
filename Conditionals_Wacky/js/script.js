/*Terry Dietrick 11 Dec 2014
SDI Section 04WDD
Conditionals Wacky
 */

// This will calculate how many calories you can burn running and how feet per minute you are running!

var milesRan = prompt("Please enter your last run length in miles",3);
var timeRan = prompt("How long did it take you to run, please enter in rounded up minutes",24);
var caloriesperMile = 124;
var totalCalorieburn = caloriesperMile * milesRan;
var avgminperMile = timeRan / milesRan;

if(milesRan != 0 && timeRan == ""){
 timeRan = prompt("Please enter a larger numerical value for how long it took you to run, unless you are Usain Bolt!!",20);
 milesRan = prompt("Please enter the miles you ran.",2);
}
if(milesRan >= 1 && timeRan >= 5) {
 console.log("You burned " + totalCalorieburn + " calories on this run");
 console.log("You ran an average of " + avgminperMile + " minutes per mile!");

}

