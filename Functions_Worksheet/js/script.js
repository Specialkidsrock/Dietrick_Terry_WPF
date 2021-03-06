/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Worksheet
 */

//Calculate the circumference of a circle

// The circumference of a circle = 2 * (pie) * radius


var totalCirc = calcCircumference(3); //Establishes the result variable


function calcCircumference(radius){ // Function used to solve the equation
        var circumference = radius * Math.PI * 2; //Math.PI used to represent PI instead of typing the #

        return circumference; // Spits the result out to the result variable
}


console.log(" The circumference of the circle is " + totalCirc + ".");
//Prints the circumference to the console using the result variable


// Calculates how many bee stings are needed to kill an animal in a function

var totalStings = stingCalc(100); // Establishes the result variable

function stingCalc(weight){ // Creates the function inputting the argument into the parameter of the function
        var stingsToKill = 8.666666667 * (weight); // Calculates how many stings per pound are needed to kill an animal
        return stingsToKill; // Spits the result to the result variable declared outside the function
}

console.log("It takes " + parseInt(totalStings) + " bee stings to kill this animal.");
// Prints the result variable, with the function result stored, to the console.
// Parse Int operation parses the number in order to present a whole number instead of a long decimal.