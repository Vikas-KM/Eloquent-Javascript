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

// Math.random. This is a function that returns a new pseudorandom number between 
// zero (inclusive) and one (exclusive) every time you call it.

console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335

//use Math.round() Math.abs() Math.floor() Math.ceil() like method

/*
Exercises

The sum of a range

The introduction of this book alluded to the following as a nice way 
to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array
containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and 
returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, 
corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that 
range(5, 2, -1) produces [5, 4, 3, 2].
*/

// Your code here.
let range = function (start, end, step) {
  let arr = [];

  // if ((step == undefined) && (start < end)) {
  //   step = 1;
  // }
  // else if ((step == undefined) && (start > end)) {
  //   step = -1;
  // }

  //Modification of the above code with ternary
  if(step == undefined)
    step = start > end ? -1 : 1;

  if (start < end) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55