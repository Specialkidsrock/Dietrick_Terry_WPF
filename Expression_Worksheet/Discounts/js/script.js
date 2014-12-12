/*Terry Dietrick 07 Dec 2014 Discounts

 */


var itemPrice = 100.24; // sample item price
var itemDescription = "Awesome Coolguy ninja Statue"; // item description
var taxSales = 1.07; //sales tax
var discountPercent = 10; //item discount percentage
var itemPricewithtax = (itemPrice * taxSales * .9); //item multiplied by sales tax and .9 representing 10% discount
var itemPricenotax = (itemPrice * .9); // item multiplied without tax and .9 representing 10% discount

console.log("Your " + itemDescription + " was originally $" + itemPrice + ", but after a " + discountPercent + "% discount, it is now $" + itemPricenotax + " without tax, and $" + itemPricewithtax + " with tax.");

