/**
 * 3 Ways of creating functions
 * function declaration
 * function expression
 * the arrow syntax
 * Parameters vs arguments
 * Return statement
 */

/* 1. Function declarations*/
//Step 1: Declare function and define it
/* function greeting() {
	//body
	console.log("Hello David!");
}
//Step 2: Use the function.
greeting();

2. Function expression

const greeting2 = function () {
	console.log("Hola David!");
};

greeting2();

 3. Arrow function
const greeting3 = () => {
	console.log("Olyotya David!");
};

greeting3();
*/

// Paremeters are used to specify the variables that will pass values to the function.

function greeting(name) {
	console.log(`Hello ${name}`);
}
//Arguments are passed to the function
//They depend on the definition of the function itself
// greeting("David");

function greeting2(message, name) {
	console.log(`${message} ${name}`);
}

// greeting2("Hola", "Wampamba");

const greeting3 = (name) => {
	console.log("Are you there " + name + "?");
};

// greeting3("David");

/* Required and optional parameters*/

const greet = (name = "Rachel", message) => {
	console.log(`${message} ${name} `);
};

// greet("Hello");

// Return keyword: It returns a value from the function to the calling code and stops the execution of the code in the function. That's the code after the return code is not evaluated or output.

const add = (a, b) => {
	return a + b;

	console.log(`${a} + ${b}`);
};

const sum = add(30, 10);
console.log(sum); //40
const sum2 = add(20, 10);
console.log(sum2); //30

console.log(add(15, 5) + add(5, 7)); //32
