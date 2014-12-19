/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Worksheet
 */

//Calculate the circumference of a circle

// The circumference of a circle = 2 * (pie) * radius


var totalCirc = calcCircumference(5);


function calcCircumference(radius){ // function used to solve the equation
        var circumference = radius * Math.PI * 2;
        return circumference;
        console.log("The circumference of the circle is " + circumference + ".");

}


console.log(" The circumference of the circle is " + totalCirc + ".");

calcCircumference(6);