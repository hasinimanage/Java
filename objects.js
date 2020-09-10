//**simple object */
var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
   };


//**Creatinf an object */
var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); // Outputs 42
document.write(p2.name); // Outputs "Amy"


//**onject initializing */
var John = {
    name: "John",
    age: 25
  };
  var James = {
    name: "James",
    age: 21
  };

  document.write(John.age); //Outputs 25


//**adding methods */

function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
      this.name = name;
    }
  }
  
  var p = new person("David", 21);
  p.changeName("John");  //Now p.name equals to "John"

//** methods */
function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
  }
  
  var p = new person("A", 22);
  document.write(p.yearOfBirth())  // Outputs 1994