/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Worksheet
 */

//Calculate the circumference of a circle

// The circumference of a circle = 2 * (pie) * radius


var totalCirc = calcCircumference(5);


function calcCircumference(radius){
        var circumference = radius * 3.1419 * 2;
        return circumference;
        console.log("The circumference of the circle is " + circumference + ".");

}


