/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Industry
 */

// calculates the amount of pictures you can store on an SD card


var sdCardSize = prompt("Enter your SD Card size in GB",2);
var pictureSize = prompt("How large is your average digital picture?");
var picture = prompt("How man pictures have you taken?",34);

var sdCard = function(pictures,pictureSize, mbtoGB) {
    mbtoGB = 1000;
    var totalspaceRequired = (pictures * pictureSize * mbtoGB);
    return totalspaceRequired;
}

var calcSpace = ;
console.log(calcSpace);