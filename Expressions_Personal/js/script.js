/*
Terry Dietrick
SDI Section 04WDD
09 December 2014
Expressions Personal
 */

//This will be used to estimate how many gallons of E85 I would need in a single racing season, and how much I would spend on that E85 fuel.

var greetingText = "Welcome, "; //First phrase of welcome message
var greetingCalculator = "this is an E85 race fuel calculator"; //Second phrase of welcome message
var concatString = greetingText + " " + greetingCalculator; //Combines the welcome messages for proper display
alert(concatString); //Displays welcome message

var horsePower = prompt("How much horsepower is that sled layin' down?",600); //descriptive purposes only
var racesAttending = prompt("How many races during this season will you attend?",10); //prompts the user for the amount of races they will attend
var dynoTuningsessions = prompt("How many dyno tuning sessions will be needed to dial in your car?",2); // prompts the user for how many dyno tuning sessions they will use

var e85 = 2.64; // Current E85 fuel price per gallon average for USA pulled from e85prices.com
var carFuelTankSize = (14/2); //Fuel tank size on the car, only filled to 7 gallons for race events to reduce weight;

var totalGallons = ((carFuelTankSize * racesAttending) + (dynoTuningsessions * carFuelTankSize)); // Approximation on fuel for the race season in gallons
var totalGasSpent = (e85 * totalGallons); //Total gas spent on the season

var totalsArray = new Array(); // creates a new array
totalsArray [0] = parseInt(totalGallons); // Ensures only whole numbers are stored in this array element.
totalsArray [1] = totalGasSpent;// Stores the information in the totalgasspent variable
totalsArray [2] = ("Your awesome " + horsePower + "HP rocket uses " + totalsArray[0] + " gallons of E85 and it costs $" + totalsArray[1] + "!"); //Stores the totals in a message format inside this array element.

console.log(totalsArray[2]); //Displays the last element of the array in the console
