/*Terry Dietrick 11 Dec 2014
 SDI Section 04WDD
 Grade in Percent
 */

//This calculates your letter grade by your inputted percentage!

var percentGrade = prompt("Please enter your grade percentage",85); // Asks the user for their grade percentage


if(percentGrade >=95){
 //this is an A + grade
 console.log("You have a " + percentGrade + "% which means you have earned A+ in the class!");

}else if(percentGrade >= 90 && percentGrade <= 94 ){
 console.log("You have a " + percentGrade + "% which means you have earned A in the class!");
//this is an A grade
}else if(percentGrade >= 85 && percentGrade <= 89 ){
 console.log("You have a " + percentGrade + "% which means you have earned B+ in the class!");
//this is an B + grade
}else if(percentGrade >= 80 && percentGrade <=84){
 console.log("You have a " + percentGrade + "% which means you have earned B in the class!");
//this is an B grade
}else if(percentGrade >= 76 && percentGrade <= 79){
 console.log("You have a " + percentGrade + "% which means you have earned C+ in the class!");
//this is an C + grade
}else if(percentGrade >= 73 && percentGrade <= 75){
 console.log("You have a " + percentGrade + "% which means you have earned C in the class!");
//this is an C grade
}else if(percentGrade >= 70 && percentGrade <= 72){
 console.log("You have a " + percentGrade + "% which means you have earned D in the class!");
//this is an D grade
}else if(percentGrade <= 69){
 console.log("You have a " + percentGrade + "% which means you have earned a failing grade in the class!");
}
