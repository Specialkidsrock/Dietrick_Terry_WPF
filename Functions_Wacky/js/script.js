/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Wacky
 */

// calculates how many days left in the army, and how many days you have been in the army


var yearsIn = prompt("How many years have you been in the Army?", 10); //prompts the user for how many years they have been in the service
var yearsLeft = prompt("How many years do you think you have left before you decide to get out?", 2); // prompts the user for how long they have left
var dayOfYear = prompt("What day of the year is it? (1-365)",353); // prompts the user to enter the current numbered day of the year


if(yearsIn == 0 || yearsIn == ""){ //if statement used to ensure the user enters a value
    yearsIn = prompt("How many years have you been in the Army?", 10); // prompts the user for the value for the variable

}else if(yearsLeft == 0 || yearsLeft == ""){ // else if statement to ensure the user enters a value for the variable
    yearsLeft = prompt("How many years do you think you have left before you decide to get out?", 2); //prompts the user for the value

}else if(dayOfYear == 0 || dayOfYear == ""){// else if statement to ensure the user enters a value for the variable
    dayOfYear = prompt("What day of the year is it? (1-365)",353); // prompts the user to enter the current numbered day of the year

}

var daysInaYear = 365; // variable for days in the year
var hoursInaDay = 24; // variable for hours in a day
var daysLeft = yearsLeft * daysInaYear - dayOfYear; // calculates how many days left in the service the user has, minus the current days elapsed in the year
var daysIn = daysInaYear * yearsIn; // calculates the total amount of days the user has been in the service
var hoursSpentIn = hoursInaDay * daysIn; // calculates the total amount of hours the user has been in the service

console.log("You have spent " + hoursSpentIn + " hours of your life in the Army!"); // prints the result of how many hours the user has been in the service
console.log("You have " + daysLeft + " days left in the Army, or " + (daysLeft * hoursInaDay) + " hours left in the Army.");
// prints the days left in the service and the hours left in the service for the user

function depressing(longHours,daysToGo,longMinutes){ //a function that does the same calculation as above using 3 parameters
        terribleHuh = longHours * daysToGo * longMinutes; //variable terribleHuh calculates the total minutes left in the service
        return (terribleHuh); // spits the result to be stored in an invoking variable
}
var totalMinutesLeft = depressing(24,377,1440); //arguments to be invoked by the function

console.log("You will have " + totalMinutesLeft + " minutes left before you get out of the army or, " + (totalMinutesLeft / 60 / 24 ) + " hours left."); //prints the result of the function

