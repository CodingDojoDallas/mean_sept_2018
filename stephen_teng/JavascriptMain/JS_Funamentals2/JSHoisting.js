//// Original Input
// console.log(hello);
// var hello = 'world';

var hello;
console.log(hello)
var hello = 'world';

//// Original Input
// var needle = 'haystack';
// test();
// function test(){
// 	    var needle = 'magnet';
// 	    console.log(needle);
// }
// ????
var needle = 'haystack';
{let needle = 'magnet';
console.log(needle);};
console.log(needle);

//// Original Input
// var brendan = 'super cool';
// function print(){
// 	    brendan = 'only okay';
// 	    console.log(brendan);
// }
// console.log(brendan);

var brendan = 'super cool';
//Function was never declared
console.log(brendan);

// //Original Input
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

var food = 'chicken';
console.log(food);
{
	food = 'half-chicken';
	console.log(food);
	let food = 'gone';
}

// //Original Input
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

var mean;
var food;
mean(); //Will not compile
console.log(food);
console.log(food);

// //Original Input
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

var genre;
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    var genre;
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// // Original Input
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

var dojo;
dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo;
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
learn();
console.log(dojo);

// //Original Input
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

console.log(makeDojo("Chicago", 65));

function makeDojo(name, students){
        const dojo = {}; // Error, co
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}; // Error, const can't be redefined
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}