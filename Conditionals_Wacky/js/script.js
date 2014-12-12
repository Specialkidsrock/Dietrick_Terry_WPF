/*Terry Dietrick 11 Dec 2014
SDI Section 04WDD
Conditionals Wacky
 */

// This will calculate how many calories you can burn running and how feet per minute you are running!

var milesRan = prompt("Please enter your last run length in miles",3); //prompts the user for the miles they ran
var timeRan = prompt("How long did it take you to run, please enter in rounded up minutes",24); // prompts the user for the minutes they completed their run in, whole numbers
var caloriesperMile = 124; // average number of calories burned per mile

if(milesRan == "" || milesRan == 0){ // if the miles ran box has nothing, or a zero in it, it kicks it back
 milesRan = prompt("Please enter the miles you ran.",2); // prompts the user to enter a value larger then 0

}else if(timeRan == "" || timeRan == 0){ //if the time ran is blank or 0 it kicks it back
 timeRan = prompt("Please enter a valid number greater then 0 for time ran",1); //used for input validation to ensure there is no other values then numerical
}

var totalCalorieburn = caloriesperMile * milesRan; //total calorie burn calculation
var avgminperMile = timeRan / milesRan; //average minute per mile calculation

if(milesRan >= 0 && timeRan >= 10) {
 console.log("You burned " + totalCalorieburn + " calories on this run"); //displays the total calories burnt
 console.log("You ran an average of " + avgminperMile + " minutes per mile!"); // displays the average minutes per mile ran

}

