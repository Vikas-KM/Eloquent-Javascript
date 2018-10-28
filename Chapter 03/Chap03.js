/*
Functions that don’ t have a return statement at all, 
return undefined.

function declaration doesn’t require a semicolon after the function.
but function expression require.
*/

//function declaration
function squares(x) {
  return x * x;
} //HERE

squares();

//function expression
const makeNoise = function() {
  console.log("Pling!");
}; //HERE

makeNoise();

/*
 ARROW FUNCTIONS

There’ s a third notation for functions, which looks very different from the others.
Instead of the function keyword, it uses an arrow( => ) 
made up of an equal sign and a greater - than character
(not to be confused with the greater - than - or - equal operator, which is written >= ).
*/

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

/*
The arrow comes after the list of parameters and is followed by the
function’ s body.It expresses something like“ this input(the parameters) 
produces this result(the body)”.

When there is only one parameter name, 
you can omit the parentheses around the parameter list. 
If the body is a single expression, rather than a block in braces, 
that expression will be returned from the function. 
So, these two definitions of square do the same thing:
*/

const square1 = x => {
  return x * x;
};
const square2 = x => x * x;

/*
When an arrow function has no parameters at all, 
its parameter list is just an empty set of parentheses.
*/

const horn = () => {
  console.log("Toot");
};

/*
We defined square with only one parameter. 
Yet when we call it with three, the language doesn’t complain. 
It ignores the extra arguments and computes the square of the first one.
*/

function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog"));

/*
JavaScript is extremely broad-minded about the number of arguments 
you pass to a function
If you pass too many, the extra ones are ignored. 
If you pass too few, the missing parameters get assigned the value undefined.
*/

/*
This feature—being able to reference a specific instance of a local binding 
in an enclosing scope—is called closure. 
A function that references bindings from local scopes around it is called a closure.
*/

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
//output  → 1
console.log(wrap2());
//output  → 2

function multiplier(factor) {
  return number => number * factor;
  //confused? think this as
  // return (number){ number*factor};
}

let twice = multiplier(2);
console.log(twice(5));
//output  → 10

/*
  A function that calls itself is called recursive. 
  In typical JavaScript implementations, 
  it’s about three times slower than the looping version. 
  Running through a simple loop is generally cheaper 
  than calling a function multiple times.
  */

/*
                            Exercises
 Minimum
 The previous chapter introduced the standard function 
 Math.min that returns its smallest argument. 
 We can build something like that now. 
 Write a function min that takes two arguments and returns their minimum.
*/

// Your code here.
function min(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(min(0, 10));
//output → 0
console.log(min(0, -10));
//output → -10

/*
Recursion
We’ve seen that % (the remainder operator) can be used to test 
whether a number is even or odd by using % 2 to see 
whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) 
and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. 
Why? Can you think of a way to fix this?
*/

// Your code here.
function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    num *= -1;
    return isEven(num);
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


/*
Bean counting
You can get the Nth character, or letter, from a string by 
writing "string"[N]. The returned value will be a string 
containing only one character (for example, "b"). 
The first character has position 0, 
which causes the last one to be found at position string.length - 1.
In other words, a two-character string has length 2, 
and its characters have positions 0 and 1.

Write a function countBs that takes a string as its 
only argument and returns a number that indicates 
how many uppercase “B” characters there are in the string.

Next, write a function called countChar that 
behaves like countBs, except it takes a second 
argument that indicates the character that is to be 
counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/

// Your code here.
function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}

function countChar(str, charVal) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charVal) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
//output → 2
console.log(countChar("kakkerlak", "k"));
//output → 4