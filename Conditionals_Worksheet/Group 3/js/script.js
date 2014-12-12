/*Terry Dietrick 11 Dec 2014
 SDI Section 04WDD
Movie Ticket Price
 */

//This calculates the movie ticket price based on age and movie time


 var ageAttendee = prompt("How old are you?",25); //prompts the user for their age
 var movieTime = prompt("What time is your movie?",3); //prompts the user for their desired movie time
 var movieTicket = 12; // assigns the defaul ticket price as $12.00


if(ageAttendee >=55 || ageAttendee <= 10) {
 console.log("The ticket price is $7.00");
// determines if the moviegoer falls in the discounted ticket price age group
}else if(movieTime >= 3 && movieTime <= 5){
 console.log("The ticket price is $7.00");
//determines if the moviegoer is buying a ticket for a discounted time line
}else{
 console.log("The ticket price is $" + movieTicket);
 //prints out the default ticket price if the moviegoer doesn't fall in any of the previous categories
}