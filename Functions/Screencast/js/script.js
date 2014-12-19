/*Terry Dietrick
18 Dec 2014
SDI Section 04WDD
Functions - Variable Scope
 */



var width = 5;


function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}

calcArea();
console.log(width);


