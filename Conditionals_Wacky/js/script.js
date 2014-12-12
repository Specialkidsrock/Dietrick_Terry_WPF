/*Terry Dietrick 11 Dec 2014
SDI Section 04WDD
Conditionals Wacky
 */

// This will calculate how many calories you can burn running and how feet per minute you are running!

var milesRan = prompt("Please enter your last run length in miles",3); //prompts the user for the miles they ran
var timeRan = prompt("How long did it take you to run, please enter in rounded up minutes",24); // prompts the user for the minutes they completed their run in, whole numbers
var caloriesperMile = 124; // average number of calories burned per mile
var totalCalorieburn = caloriesperMile * milesRan; //total calorie burn calculation
var avgminperMile = timeRan / milesRan; //average minute per mile calculation

if(milesRan != 0 && timeRan == ""){
 timeRan = prompt("Please enter a larger numerical value for how long it took you to run, unless you are Usain Bolt!!",20); //used for input validation
 milesRan = prompt("Please enter the miles you ran.",2);
}
if(milesRan == 0 || milesRan == null){
 milesRan = prompt("Please enter a valid number greater then 0",1); //used for input validation to ensure there is no other values then numerical
}else if(milesRan >= 1 && timeRan >= 5) {
 console.log("You burned " + totalCalorieburn + " calories on this run"); //displays the total calories burnt
 console.log("You ran an average of " + avgminperMile + " minutes per mile!"); // displays the average minutes per mile ran

}

