// 1. Setting types

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// myString was assigned to be a string, therefore setting it to a number will give an error.
myString = "Fixed";

// 2. Setting the types for function parameters

function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// 9 needed to be a string in order to work, since name was assigned to be a string.
console.log(sayHello("9"));

// 3. Optional parameters

function fullName(firstName: string, lastName: string, middleName?: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// Adding a question mark in the parameter will make it optional.
console.log(fullName("Jimbo", "Jones"));

// 4. Interfaces and function parameters

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   // It said "belt" instead of "belts", so it gave an error.
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
console.log(graduate(jay));

// 5. Classes and function parameters

class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// I had to add new in front of the class instance and add the necessary parameters.
const shane = new Ninja("Shane", "Turing");
const turing = new Ninja("Alan", "Turing");
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));

// 6. Arrow functions

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
console.log(square(4));
// the parameters needed to be in parenthesis
var multiply = (x,y) => x * y;
// changed the fat arrow to be a full function instead
var math = function (x, y) {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

// 7. Arrow functions and 'this'

class Elephant {
   constructor(public age: number){}
   birthday = () => {
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// changed to a fat arrow
