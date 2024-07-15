//Immediately invoked function expression(IIEF)

(function chai(){
    console.log(`DB CONNECTED`);
})();// here semicolon is used to termnate the function call

// global scope ko polution ya variableko hatane ke liye humne IIFE ka use kiya
// ()() //first for function definition and second for execution


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('shreeram')