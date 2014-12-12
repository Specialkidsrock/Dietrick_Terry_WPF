/*Terry Dietrick 11 Dec 2014
 SDI Section 04WDD
Movie Ticket Price
 */




 var ageAttendee = prompt("How old are you?",25);
 var movieTime = prompt("What time is your movie?",3);
 var movieTicket = 12;


if(ageAttendee >=55 || ageAttendee <= 10) {
 console.log("The ticket price is $7.00");

}else if(movieTime >= 3 && movieTime <= 5){
 console.log("The ticket price is $7.00");

}else{
 console.log("The ticket price is $" + movieTicket);
}