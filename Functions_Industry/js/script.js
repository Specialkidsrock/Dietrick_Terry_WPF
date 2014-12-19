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

totalPictures = gbtoMB / pictureSize - pictures;
spaceUsed = totalPictures / gbtoMB * 100;

console.log(" You could fit approximately " + parseInt(totalPictures) + " more pictures on this SD Card.");
console.log("Your current pictures use about " + parseInt(spaceUsed) + "% of the space available on this SD Card.");

var percentSpace = convertToFraction(.2);


function convertToFraction(fraction) {
    return (fraction * 100) + "%";
}

console.log(percentSpace);


var calcSpace = function(a, b, c) {
    var gbToMB = a * 1000;
    var totalspaceRequired = ((gbToMB / b) - c);
    return (totalspaceRequired);
}

console.log(parseInt(calcSpace(2,12,120)));

