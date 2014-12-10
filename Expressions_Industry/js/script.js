/*
Terry Dietrick
SDI Section 04WDD
Expressions Industry
09 Decemeber 2014
 */

// This will be a simple ohm's law calculator that I would use in my job as an electrician in the army.

var greetingText = "Welcome to my "; //First phrase of welcome message
var greetingCalculator = "Ohm's Law calculator, it's kind of a big deal. "; // Second phrase of welcome message
var concatString = greetingText + "" + greetingCalculator; // concatenates the two welcome strings together.
alert(concatString); //alert to pop up and welcome the user

var currentInput = prompt("Please enter the current value ",1); // prompts user for measured current (AMPS)
var voltsInput = prompt(" Please enter the voltage value ",1); // prompts user for voltage measured.
alert("Your wattage would be " + voltsInput * currentInput + " watts."); // shows quick calculation of wattage for the user.
var wattsInput = prompt("Please input the wattage value calculated previously.",1); // prompts the user for the watts, or power calculated in the previous step.


var resistanceCalc = (voltsInput / currentInput); // Calculates resistance (ohms) using inputted values
var powerCalc = (voltsInput * currentInput); // Calculates power in watts
var currentCalc = (wattsInput / voltsInput); // Calculates the current to compare with the inputted current
var voltageCalc = Math.sqrt(powerCalc * resistanceCalc); // Calculates the voltage by using the square root of the calculated current


var electricalArray = new Array(); // establishes the array used to store the electrical values both inputted and calculated
electricalArray[0] = currentInput; // stores the current value the user inputted
electricalArray[1] = voltsInput; // stores the voltage value the user inputted
electricalArray[2] = parseInt(resistanceCalc); // stores and parses the resistance calculation and stores it in this array element
electricalArray[3] = parseInt(powerCalc); // stores and parses the power calculation and stores it in this array element
electricalArray[4] = parseInt(currentCalc); //stores the calculated current
electricalArray[5] = parseInt(voltageCalc); // parses the stored voltage calculation
electricalArray[6] = wattsInput; // stores the wattage value input by the user

console.log("Your inputted voltage of " + voltsInput + " volts and inputted current value of " + currentInput +" amps, will result in " + resistanceCalc + " ohms and " + powerCalc + " watts" ); // Displays calculated results.
console.log("The calculated current and voltage of " + electricalArray[4] + " amps and " + electricalArray[5] + " volts, show that the formula works! "); // Displays calculated values of current and volts to show the user the math works!