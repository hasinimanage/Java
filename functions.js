//**user defind functions
function myFunction() {
    alert("Calling a Function!");
  }
  
  myFunction();
  //Alerts "Calling a Function!"



  // **callinf functions
  function myFunction() {
    alert("Alert box!");
 }
 
 myFunction();
 //"Alert box!"
 
 // some other code
 
 myFunction();
 //"Alert box!"


 //** using parameters
 function sayHello(name) {
    alert("Hi, " + name);
 }
 
 sayHello("David");
 //Alerts "Hi, David"


 //** using multiple parameters
 function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
  }
  
  sayHello("John", 20)
  //Outputs "John is 20 years old."


  //The return statement
  function addNumbers(a, b) {
    var c = a+b;
    return c;
 }
 document.write( addNumbers(40, 2) );
 //Outputs 42
