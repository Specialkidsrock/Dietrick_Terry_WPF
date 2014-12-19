/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Parameters and Arguments
 */



function dogYears(age = 4){ //parameters
    var age = 4;
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}

var age1 = 4;
dogYears(age1); //arguments
dogYears(6);
