// primitive

// types : String ,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id==anotherId);

// const bigNumber = 3456887983071n // n indicate BigInt



//Reference (Non primitive)

// Array , objects, Function

const heros = ["shaktiman", "naagraj" ,"doga"];
let myObj ={
    name: "ram",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj);

//++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(non-Primitive)
let myName = "ram"
let anotherName = myName;
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "ram@123"

console.log(userOne.email);
console.log(userTwo.email);
