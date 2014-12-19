/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Worksheet
 */

//Calculate the circumference of a circle

// The circumference of a circle = 2 * (pie) * radius


var totalCirc = calcCircumference(3); //Establishes the result variable


function calcCircumference(radius){ // function used to solve the equation
        var circumference = radius * Math.PI * 2; //Math.PI used to represent PI instead of typing the #

        return circumference; // Spits the result out to the result variable
}


console.log(" The circumference of the circle is " + totalCirc + ".");
//prints the circumference to the console using the result variable


// Calculates how many bee stings are needed to kill an animal in a function

var totalStings = stingCalc(100); // Establishes the result variable

function stingCalc(weight){ // creates the function inputting the argument into the parameter of the function
        var stingerKiller = 8.666666667 * (weight); // calculates how many stings per pound are needed to kill an animal
        return stingerKiller; // Spits the result to the result variable declared outside the function
}

console.log("It takes " + totalStings + " bee stings to kill this animal.");
// Prints the result variable, with the function result stored, to the console.