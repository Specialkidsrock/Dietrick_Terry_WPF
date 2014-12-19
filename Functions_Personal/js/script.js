/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Personal
 */

// Calculates the cost of gas and miles per tank of gas based off your miles per gallon


var cityVsHwy = prompt("Do you drive mostly in the City or on the Hwy?" + " " + "Enter 1 for city, or 2 for hwy"); //prompts the user for their driving habit
var gasPrice = 2.477; //nationwide average cost as reported by AAA
var totalCompare; // stores the conditional result

while (cityVsHwy <= 0 || cityVsHwy == "" || cityVsHwy > 2) { //ensures the user inputs a valid value
    cityVsHwy = prompt("Do you drive mostly in the City or on the Hwy?" + " " + "Enter 1 for city, or 2 for hwy",1); //prompts the user for their driving habit

}

if(cityVsHwy = 1 && cityVsHwy != 2){ //compares the number input into the variable to see if it fits this criteria

    var mpgCity = prompt("What is your estimated MPG",15);// prompts the user to enter their estimated mpg in town
    var tanksizeCity = prompt("What is your gas tank size",15); // prompts the user to enter their gas tank size
    var fillupMonthly = prompt("How many times do you fill up a month?",3);//prompts the user to enter how many times a month they fill up
    var totalCostCity = gasPrice * tanksizeCity; // how much it costs to fill up the users vehicle
    var totalGasCity = tanksizeCity * mpgCity; // how many miles they could travel on a full tank
    var totalgasMonthly = tanksizeCity * mpgCity * fillupMonthly; // calculates the total cost of gas monthly
    console.log("Your total cost to fill up your gas tank would be $" + totalCostCity + ".");
    console.log("You could travel approximately " + totalGasCity +" miles before you would run out of gas"); //informs the user how many miles until they need a refill
    console.log("It will cost you $" + totalgasMonthly + " each month in gas with that many fill ups"); //displays the cost of monthly fill ups equation
}else if(cityVsHwy = 2 || cityVsHwy != 1){ // compares the number input into this critera to see if it matches
    var mpgHwy = prompt("What is your estimated MPG",25); // asks the user for their estimated mpg
    var tanksizeHwy = prompt("What is your gas tank size",20); //asks the user for their gas tank size
    var milesMonthly = prompt("How many miles a month do you drive?",600);// prompts the user for the miles each month they drive
    var totalCostHwy = gasPrice * tanksizeHwy; // calculates the gas price by the tank size for an idea of how much a fill up costs
    var totalGasHWy = tanksizeHwy * mpgHwy; // calculates the cost of filling the user's vehicle
    var totalFillups = ((milesMonthly / totalGasHWy) * totalCostHwy); //calculates how many times a month they would need to fill up and how much it would be
    console.log("Your total cost to fill up your gas tank would be $" + totalCostHwy + "."); //displays the cost to fill the user's tank of gas
    console.log("You could travel approximately " + totalGasHWy + " miles before your next fill up"); //displays the miles before they would need to fill up their tank again assuming a full tank of gas
    console.log("It will cost you $" + parseInt(totalFillups) + " each month with your current vehicle to drive " + milesMonthly + " miles"); // displays the monthly costs of gas
}
function totalGasPerMonthCity(tanksizecarCity, mpgcarCity, fillupMonthlycity){ // 3 parameter function to check if my math above is correct
        totalGasCost = tanksizecarCity * mpgcarCity * fillupMonthlycity; // calculates the total gas cost per month in the city driving condition
        return (totalGasCost); //Spits out the variable value
}
var compareFunction = totalGasPerMonthCity(15,15,3); //stores the function calculation

if(compareFunction == totalgasMonthly) { // If statement to compare the function to the math calculated above
    console.log("The math is correct, the function calculates $" + compareFunction + " and the if statement above calculates $" + totalgasMonthly + "."); // If the values are the same it prints this message to the user
}else if (compareFunction != totalgasMonthly) { // else if condition if the two from the if statement do not match
(console.log("Check your math!")); //prints this to the console to inform the user to check their math
    }



totalCompare = (mpgHwy < 25 || mpgCity < 20) ? "Time to invest in a more efficient vehicle" : "Stick to the highways!"; //ternary that compares their vehicle mpg and the resulting message
console.log(totalCompare);//displays the result of the ternary