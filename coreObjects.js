//**accesing an array */
var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 


//**creating an array */
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";

//**length of array */
var courses = ["HTML", "CSS", "JS"];
document.write(courses.length); //Outputs 3

//**combining arrays */
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

//**associative arrays */
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]); //Outputs "46"

//**using math object */
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);