/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Personal
 */

// Calculates the cost of gas and miles per tank of gas based off your miles per gallon


var cityHwy = prompt("Do you drive mostly in the City or on the Hwy?" + <Br>  + "Enter 1 for city, or 2 for hwy");
var gasPrice = 2.477; //nationwide average cost as reported by AAA

if(cityHwy = 1 && cityHwy != 2){
    var mpgCity = prompt("What is your estimated MPG");
    var tanksizeCity = prompt("What is your gas tank size");
    var totalCostCity = gasPrice * tanksizeCity;
    var totalGascity = tanksizeCity * mpgCity;


}else if(cityHwy = 2 || cityHwy != 1){
    var mpgHwy = prompt("What is your estimated MPG");
    var tanksizeHwy = prompt("What is your gas tank size");
    var totalCostHwy = gasPrice * tanksizeHwy
    var totalGasHWy = tanksizeHwy * mpgHwy;
    console.log(totalCostHwy)
}
console.log