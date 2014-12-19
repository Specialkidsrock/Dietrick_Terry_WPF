/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Industry
 */

// calculates the amount of pictures you can store on an SD card


var sdCardSize = prompt("Enter your SD Card size in GB",2); // Asks for user input on the size of their SD Card
var pictureSize = prompt("How large is your average digital picture?(In megabytes, MB)",12); // Asks for user input on their average picture size in MB
var pictures = prompt("How man pictures have you taken?",120); // Asks the user for how many pictures already on the SD Card

gbtoMB = sdCardSize * 1000; // Converts the SD Card size from MB to GB

totalPictures = gbtoMB / pictureSize - pictures; // Calculates how many more pictures total the user could fit on their SD Card
spaceUsed = totalPictures / gbtoMB * 100; // This calculates the percentage of used space on the SD Card currently

console.log(" You could fit approximately " + parseInt(totalPictures) + " more pictures on this SD Card."); // Displays to the user how many more pictures they can fit on their SD Car
console.log("Your current pictures use about " + parseInt(spaceUsed) + "% of the space available on this SD Card."); //Displays the current percentage of spaced used on the SD Card.

var percentSpace = convertToFraction(.02); //invoke for the function convertToFraction


function convertToFraction(fraction) {//anonymous function to convert a decimal to a fraction
    return (fraction * 100) + "%"; // Multiplies the decimal by 100 and adds the % symbol, then spits this out to the invoke call.
}

console.log(percentSpace); // Prints to the console the result of the anonymous function


var calcSpace = function(a, b, c) { //Defined a 3 parameter function to solve for the same problem as above
    var gbToMB = a * 1000; //Converts GB to MB
    var totalspaceRequired = ((gbToMB / b) - c); //Calculates how many more pictures total the user could fit on their SD Card
    return (totalspaceRequired); //Spits the value of totalSpaceRequired variable out to an invoke call
}

console.log(" You could fit " + parseInt(calcSpace(2,12,120)) + " more pictures!"); // Invokes the function for what value was calculated and parses the number for a whole integer.

