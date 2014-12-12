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



    var howManycats = prompt("How many cats do you own?");
    var howmuchFood = prompt("How many times a day do you feed them?");
    var howoldCats = prompt("How old are your cat(s)?");

    var servingSize = 75; // 75 grams is the average feeding size for a regular cat daily
    var bagSize = 16; // The average cat food bag found online was 16 lbs.
    var bagCost = 18; // The average cost of a 16lb bag found online.

    var totalfoodBag = (bagSize * 453.592); // there are 16 ounces in 1 lb, and 28.3 grams in one ounce. This shows how many grams in one 16lb cat food bag.
    var totalCatfood = (servingSize * howManycats * howmuchFood); //calculates how much food in grams the cats eat daily

    var fatCat = (parseInt(totalCatfood) * (totalfoodBag / 453.592) * 365 ); //total cat food consumed in lbs per year
    var foodCost = (18); //average cost of a bag of cat food


    var catfoodarray = new Array();
    catfoodarray[0] = howManycats;
    catfoodarray[1] = howmuchFood;
    catfoodarray[2] = howoldCats;
    catfoodarray[3] = totalfoodBag;
    catfoodarray[4] = totalCatfood;
    catfoodarray[5] = bagCost;
    catfoodarray[6] = fatCat;
    catfoodarray[7] = foodCost;

    console.log("Your cats in a year would eat " + fatCat + "lbs of food in a year!");
    console.log("The cost of the food would be $" + (foodCost * fatCat) / 16 +" dollars a year!");

