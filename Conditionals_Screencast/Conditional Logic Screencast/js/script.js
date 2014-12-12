/*
Terry Dietrick 11 Dec 2014
Conditionals Screencasts
Conditional Logic - Logical Operators

 */


var budget = 300;
var iPhonePrice =  199.99;
var wonLottery = true;


// if the price of the phone is less than our budget and if our paycheck is over $300
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
