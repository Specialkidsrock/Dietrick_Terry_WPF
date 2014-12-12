/*Terry Dietrick 11 Dec 2014
 SDI Section 04WDD
Conditionals Industry
 */

//This will calculate the resolution of your monitor and check to see if it meets 4k resolution standards

alert("Is your monitor 4K resolution? Enter the values "); //informs the user what the calculator does
var horizontalPixelsvalue = prompt("Please enter your monitors vertical pixel value", 600); // prompts the user for horizontal pixel values
var verticalPixelvalue = prompt("Please enter your monitors horizontal pixel value", 800); //prompts the user for vertical pixel values
var totalResolution = (horizontalPixelsvalue * verticalPixelvalue); //calculates the total resolution
var uhdResolution = 8294400; //the minimum resolution required to be considered 4k resolution
var yourDisplay; // will be used to display if the user's monitor is 4k resolution or not.


if(horizontalPixelsvalue == "" || horizontalPixelsvalue == null){ //this line is used for input validation
 horizontalPixelsvalue = prompt("Please enter a numerical value for your horizontal pixels!!");
 // prompts the user for a correct numerical value for pixels

}else if(verticalPixelvalue == "" || verticalPixelvalue == null){ // used for input validation
 verticalPixelvalue = prompt("Please enter a numerical value for your vertical pixel amount!");
 // prompts the user for a correct numerical value for pixels
}

yourDisplay = (totalResolution < uhdResolution) ? "Your monitor is not a 4K resolution monitor." : "Your monitor is a 4k resolution monitor!";
// ternary that compares the totalresolution to the uhdresolution value to determine if your monitor is 4k or not

console.log(yourDisplay); //prints the result of the above operation
