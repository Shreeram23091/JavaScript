
function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("e");
    console.log("r");
    console.log("a");
    console.log("m");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: " ,result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shreeram"))

// console.log(loginUserMessage("shreeram"));

// console.log(loginUserMessage("shreeram"));


function calculateCartPrice(...num1){ //... num is rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "shreeram",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600]));