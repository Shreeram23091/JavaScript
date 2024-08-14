//Immediately invoked function expression(IIEF)

(function chai(){
    console.log(`DB CONNECTED`);
})();// here semicolon is used to terminate the function call

// global scope ko polution ya variable ko hatane ke liye humne IIFE ka use kiya
// ()() //first for function definition and second for execution


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('shreeram singh')