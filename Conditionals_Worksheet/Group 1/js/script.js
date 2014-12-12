/*Terry Dietrick 11 Dec 2014
 SDI Section 04WDD
 Last Chance for Gas
 */


//This determines if you can make it across the desert with your current fuel


   var gasEfficiency = 20; //This is your miles per gallon your car gets
   var gaugeReading = 75; //this is your gas gauge reading
   var gastankSize = 14; //this is your gas tank size in gallons


if(gastankSize * .95 * gasEfficiency >= 200) { // If your gastank size muliplied by your mpg is greater than or equal to 200 you can make it!
 console.log("Yes you can make it without stopping for gas!");
}else{
   console.log("No you only have " + gastankSize *.75 + " gallons of gas in your tank, you better get gas now!");
}