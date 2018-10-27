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
const makeNoise = function () {
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

const square1 = (x) => { return x * x; };
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

function square(x) { return x * x; }
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