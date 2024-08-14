//singletone
//object.create

//object leterals

const mySym = Symbol("key1")

const JsUser = {
    name: "ram",
    "full name": "shreeram singh",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hello@gamil.com",
    idLoggedIn: false,
    lastLoggingDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "ram@chatgpt.com"
// Object.freeze(JsUser)//Object.freeze(JsUser) makes `JsUser` immutable. Attempts to change its properties, add new properties, or delete properties will have no effect
// JsUser.email = "ramki@123"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");

}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser)



