// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";

// GIVEN
// console.log(hello);
// var hello = 'world';
//AFTER HOISTING
// var hello;
// console.log(hello);
// var hello = 'world';

// GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
//AFTER HOISTING
// var needle = 'haystack';
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle); // logs 'magnet'
// }
// test() // displays needle within the function

// GIVEN
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
// AFTER HOISTING
// var brendan = 'super cool';
// function print(){
//   var brendan;
// 	brendan = 'only okay';
// 	console.log(brendan); // logs for the function
// }
// console.log(brendan); // logs global variable

// GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// AFTER HOISTING
// var food = 'chicken';
// console.log(food); // logs 'chicken'
// function eat(){
//   var food;
// 	food = 'half-chicken';
// 	console.log(food); // logs 'half-chicken'
// 	var food = 'gone';
// }
// eat();

// GIVEN
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// AFTER HOISTING
// mean(); // error: mean is not a function
// console.log(food); // ReferenceError
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food); // ReferenceError

// GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
// AFTER HOISTING
// var genre;
// console.log(genre); // logs undefined
// genre = "disco";
// rewind();
// function rewind() {
//   var genre;
// 	genre = "rock";
// 	console.log(genre); // logs 'rock'
// 	genre = "r&b";
// 	console.log(genre); // logs 'r&b'
// }
// console.log(genre); // logs 'disco'

// GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
// AFTER HOISTING
// var dojo;
// dojo = "san jose";
// console.log(dojo); // logs 'san jose'
// learn(); // calls function learn
// function learn() {
//   var dojo;
// 	dojo = "seattle";
// 	console.log(dojo); // logs 'seattle'
// 	var dojo = "burbank";
// 	console.log(dojo); // logs 'burbank'
// }
// console.log(dojo); // logs 'san jose'

// GIVEN
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// AFTER HOISTING
// console.log(makeDojo("Chicago", 65)); // logs dojo object
// console.log(makeDojo("Berkeley", 0)); // logs TypeError
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
