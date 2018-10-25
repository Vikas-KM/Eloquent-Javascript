/*
        NOTES in comment part

    JavaScript uses a fixed number of bits, 64 of them, to store a single number value.

    Special numbers
    There are three special values in JavaScript that are considered numbers but don’t behave 
    like normal numbers.

    The first two are Infinity and -Infinity, which represent the positive and negative infinities. 
    Infinity - 1 is still Infinity, and so on. 

    NaN stands for “not a number”, even though it is a value of the number type. You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero), Infinity - Infinity, or any number of other numeric operations that don’t yield a meaningful result.
*/



/*****************        TEST 01     *****************/

/*  When you write something inside ${} in a template literal, its result will be computed, converted      to a string, and included at that position. 
    Backtick-quoted strings, usually called template literals*/

console.log(`half of 100 is ${100 / 2}`);
//output -> half of 100 is 50
//REMEMBER its back quoted strings - wont work for single or double quotes


/*  There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”)
*/

console.log(NaN == NaN)
//output -> false


