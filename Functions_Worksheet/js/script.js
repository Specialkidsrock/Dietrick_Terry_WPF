/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Worksheet
 */

//Calculate the circumference of a circle

// The circumference of a circle = 2 * (pie) * radius


var totalCirc = calcCircumference(5);


function calcCircumference(radius){ // function used to solve the equation
        var circumference = radius * Math.PI * 2; //Math.PI used to represent PI instead of typing the #

        return circumference; // Spits the result out to the result variable
}


console.log(" The circumference of the circle is " + totalCirc + ".");

