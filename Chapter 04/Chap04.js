/*
Properties that contain functions are generally called 
methods of the value they belong to.

The push method adds values to the end of an array, 
and the pop method does the opposite, 
removing the last value in the array and returning it.
*/

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

/*
The push method adds values to the end of an array, 
and the pop method does the opposite, 
removing the last value in the array and returning it.
*/

//Reading a property that doesn’t exist will give you the value undefined.

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false

/*
  The delete operator cuts off a tentacle from such an octopus. 
  It is a unary operator that, when applied to an object property, 
  will remove the named property from the object. 
  This is not a common thing to do, but it is possible.
*/

let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


//To find out what properties an object has, you can use the Object.keys function. 
//You give it an object, and it returns an array of strings—the object’s property names.

console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

//There’s an Object.assign function that copies all properties from one object into another.

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

/*
though a const binding to an object can itself not be changed and will continue 
to point at the same object, the contents of that object might change.
*/

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};


// There is a simpler way to write such loops in modern JavaScript.

arr = [1,2,3,4,5,6];
for (let entry of arr) {
  console.log(entry);
}
//output-> 
1
2
3
4
5
6

/*
When a for loop looks like this, with the word of after a variable definition, 
it will loop over the elements of the value given after of. 
This works not only for arrays but also for strings and some other data structures.
*/

/*
We saw push and pop, which add and remove elements at the end of an array, 
earlier in this chapter. The corresponding methods 
for adding and removing things at the start of an array are called unshift and shift.
*/

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

/*
To search for a specific value, arrays provide an indexOf method. 
The method searches through the array from the start to the end 
and returns the index at which the requested value was found—or -1 
if it wasn’t found. To search from the end instead of the start, 
there’s a similar method called lastIndexOf.

Both indexOf and lastIndexOf take an optional second argument 
that indicates where to start searching.
*/

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

/*
Another fundamental array method is slice, 
which takes start and end indices and returns an array that 
has only the elements between them. The start index is inclusive, the end index exclusive.
When the end index is not given, slice will take all of the elements after the start index. 
You can also omit the start index to copy the entire array.
*/

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

/*
The concat method can be used to glue arrays together to create a new array, 
similar to what the + operator does for strings.
*/

/*
The trim method removes whitespace (spaces, newlines, tabs, and similar characters) 
from the start and end of a string.
*/

console.log("  okay \n ".trim());
// → okay


//padStart and takes the desired length and padding character as arguments.

console.log(String(6).padStart(3, "0"));
// → 006

//You can split a string on every occurrence of another string with split 
//and join it again with join.

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

//A string can be repeated with the repeat method, 
//which creates a new string containing multiple copies of the original string, glued together.

console.log("LA".repeat(3));
// → LALALA

// To write a function to accept any number of arguments, 
// you put three dots before the function’s last parameter, like this:

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
  console.log(max(4, 1, 9, -2));
  // → 9

// You can use a similar three-dot notation to call a function with an array of arguments.

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

/*
This “spreads” out the array into the function call, passing its elements as separate arguments.
It is possible to include an array like that along with other arguments, 
as in max(9, ...numbers, 2).

Square bracket array notation similarly allows the triple-dot operator to 
spread another array into the new array.
*/

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]