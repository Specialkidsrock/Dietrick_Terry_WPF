/*Terry Dietrick 11 Dec 2014
 SDI Section 04WDD
Conditionals Industry
 */

alert("Is your monitor 4K resolution? Enter the values ");
var horizontalPixelsvalue = prompt("Please enter your monitors vertical pixel value", 800);
var verticalPixelvalue = prompt("Please enter your monitors horizontal pixel value",1200);
var totalResolution = (horizontalPixelsvalue * verticalPixelvalue);
var uhdResolution = 8294400;
var yourDisplay;


if(horizontalPixelsvalue == "" || horizontalPixelsvalue == null){
 horizontalPixelsvalue = prompt("Please enter a numerical value for your horizontal pixels!!");

}else if(verticalPixelvalue == "" || verticalPixelvalue == null){
 verticalPixelvalue = prompt("Please enter a numerical value for your vertical pixel amount!");
}

yourDisplay = (totalResolution < uhdResolution) ? "Your monitor is not a 4K resolution monitor." : "Your monitor is a 4k resolution monitor!";
console.log(yourDisplay);
