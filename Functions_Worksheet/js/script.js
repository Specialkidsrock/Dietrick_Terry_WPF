/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Worksheet
 */

//Calculate the circumference of a circle

// The circumference of a circle = 2 * (pie) * radius

var radius = prompt("Please enter the radius"); //Prompts the user for the radius

function calcCircumference(r){
        var circumference = r * 3.1419 * 2;
        return circumference;
        console.log("The circumference of the circle is " + circumference + ".");

}

