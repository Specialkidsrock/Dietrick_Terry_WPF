/*
Terry Dietrick
SDI Section 04WDD
09 December 2014
Expressions Wacky
 */


    var greetingText = "Welcome to the Fat Cat"; // first part of the greeting message
    var greetingFood = " food cost per year calculator"; // second part of the greeting message
    var concatStrings = greetingText + "" + greetingFood; //concatenates the greeting strings together

    alert(concatStrings); // pop up message to greet the user



    var howManycats = prompt("How many cats do you own?"); //prompts the user for the number of cats they own
    var howmuchFood = prompt("How many times a day do you feed them?"); // this prompts the user for the number of times they feed the cats per day
    var howoldCats = prompt("How old are your cat(s)?"); // this is to gather the age of the cat(s), only 1 entry is used.

    var servingSize = 110; // 110 grams is the average feeding size for a regular cat daily
    var bagSize = 16; // The average cat food bag found online was 16 lbs.
    var bagCost = 18; // The average cost of a 16lb bag found online.

    var totalfoodBag = (bagSize * 453.592); // there are 453.592 grams in 1 lb. This shows how many grams in one 16lb cat food bag.
    var totalCatfood = (servingSize * howManycats * howmuchFood); //calculates how much food in grams the cats eat daily

    var fatCat = ((totalfoodBag / totalCatfood) / 16 * 365  ); //total cat food consumed in lbs per year
    var foodCost = (18); //average cost of a bag of cat food


    var catfoodarray = new Array(); //created this array to store all the values of the integers declared
    catfoodarray[0] = howManycats;
    catfoodarray[1] = howmuchFood;
    catfoodarray[2] = howoldCats;
    catfoodarray[3] = totalfoodBag;
    catfoodarray[4] = totalCatfood;
    catfoodarray[5] = bagCost;
    catfoodarray[6] = fatCat;
    catfoodarray[7] = foodCost;

    console.log("Your cats in a year would eat " + parseInt(fatCat) + "lbs of food in a year!"); //message to the user in the console that calculated how much food in lbs their cat eats in a year.
    console.log("The cost of the food would be $" + parseInt((catfoodarray[7] * catfoodarray[6]) / 16)  + " a year!"); // this line calculates how much food in dollars their cats eat
    console.log("Your cat has eaten " + parseInt(catfoodarray[2] * catfoodarray[6]) + "lbs of food in their lifetime!"); // this calculates how much food the cat has eaten in lbs in their lifetime so far!

