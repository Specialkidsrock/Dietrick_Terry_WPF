/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Personal
 */

// Calculates the cost of gas and miles per tank of gas based off your miles per gallon


var cityVsHwy = prompt("Do you drive mostly in the City or on the Hwy?" + "<br>" + "Enter 1 for city, or 2 for hwy");
var gasPrice = 2.477; //nationwide average cost as reported by AAA





if(cityVsHwy = 1 && cityVsHwy != 2){

    var mpgCity = prompt("What is your estimated MPG");
    var tanksizeCity = prompt("What is your gas tank size");
    var totalCostCity = gasPrice * tanksizeCity;
    var totalGasCity = tanksizeCity * mpgCity;
    console.log("Your total cost to fill up your gas tank would be $" + totalCostCity + ".");
    console.log("You could travel approximately " + totalGasCity +" miles before you would run out of gas");
}else if(cityVsHwy = 2 || cityVsHwy != 1){
    var mpgHwy = prompt("What is your estimated MPG");
    var tanksizeHwy = prompt("What is your gas tank size");
    var totalCostHwy = gasPrice * tanksizeHwy;
    var totalGasHWy = tanksizeHwy * mpgHwy;
    console.log("Your total cost to fill up your gas tank would be $" + totalCostHwy + ".");
    console.log("You could travel approximately " + totalGasHWy + " miles before you ran out of gas.");
}

