/*
        NOTES in comment part

    JavaScript uses a fixed number of bits, 64 of them, to store a single number value.

    Special numbers
    There are three special values in JavaScript that are considered numbers but don’t behave 
    like normal numbers.

    The first two are Infinity and -Infinity, which represent the positive and negative infinities. 
    Infinity - 1 is still Infinity, and so on. 

    NaN stands for “not a number”, even though it is a value of the number type. 
    You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero), 
    Infinity - Infinity, or any number of other numeric operations that don’t yield a 
    meaningful result.
*/



/*****************        TEST 01     *****************/

/*  When you write something inside ${} in a template literal, its result will be computed, 
    converted to a string, and included at that position. 
    Backtick-quoted strings, usually called template literals*/

console.log(`half of 100 is ${100 / 2}`);

//output -> half of 100 is 50
//REMEMBER its back quoted strings - wont work for single or double quotes


/*  There is only one value in JavaScript that is not equal to itself, and 
    that is NaN (“not a number”)
*/

console.log(NaN == NaN)
//output -> false

//AUTOMATIC TYPE CONVERSIONS

/*JavaScript will quietly convert that value to the type it needs, using a set of rules 
that often aren’t what you want or expect. This is called type coercion.

The null in the first expression becomes 0, and the "5" in the second expression 
becomes 5 (from string to number). Yet in the third expression, + tries string concatenation 
before numeric addition, so the 1 is converted to "1" (from number to string).

When something that doesn’t map to a number in an obvious way (such as "five" or undefined) 
is converted to a number, you get the value NaN. Further arithmetic operations on NaN keep 
producing NaN, so if you find yourself getting one of those in an unexpected place, 
look for accidental type conversions.*/

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4                      //This are interesting
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


/*However, when null or undefined occurs on either side of the operator, 
it produces true only if both sides are one of null or undefined.*/

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

//Expressions like 0 == false and "" == false are also true because of automatic type conversion.
//0, NaN, and the empty string ("") count as false, while all the other values count as true. 
//So 0 || -1 produces -1, and "" || "!?" yields "!?".