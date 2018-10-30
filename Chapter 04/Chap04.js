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