/*Terry Dietrick 07 Dec 2014 Average Shopping Bill

 */

 var shoppingArray = new Array(); // establishes the array
 shoppingArray[0] = 127; // week 1 total spent on groceries
 shoppingArray[1] = 85; // week 2 total spent on groceries
 shoppingArray[2] = 178; // week 3 total spent on groceries
 shoppingArray[3] = 114; // week 4 total spent on groceries
 shoppingArray[4] = 156; // week 4 total spent on groceries

 var totalSpent = (shoppingArray[0] + shoppingArray[1] + shoppingArray[2] + shoppingArray[3] + shoppingArray[4]);
 // var total spent is equal to each element in the array addded up
 var weeklyAverage = (totalSpent / 5); // divides the total by 5, or the number of weeks to get the average

 console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + weeklyAverage + " per week.");
 // prints the total spent over 5 weeks and the average spent each week.


