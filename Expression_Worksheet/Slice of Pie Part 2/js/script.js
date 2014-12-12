/*
Terry Dietrick 07 Dec 2014 Slice of Pie pt. 2
*/

 var peopleAttending = prompt("How many people are at the party?",0); // prompts the user for number of people at the party
 var pizzasOrdered = prompt("How many pizza's were ordered?",0); //prompts the user for the number of pizzas ordered
 var pizzaSlices = 8; //Establishes that there are 8 slices per pizz
 var slicesEachperson = (pizzasOrdered * pizzaSlices % peopleAttending);
 //The number of pizzas ordered multiplied by the slices in each pizza and then uses the modulo function to display the remainder of the division process.

 console.log("Sparky got " + slicesEachperson + " slices at the party"); //Prints the remainder or slices that sparky gets




