const user  = {
    username: "Shreeram",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got userDetails from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Shreeram", 12, true)
const userTwo = new User("CHAI aur code", 11,false)
console.log(userOne.constructor);
// console.log(userTwo);

//1. jaise hi aap new key word used karenge sabse pahle ek empty empty object create hota hai jise instance bola jata hai

//2. constructor function call hota hai new keyword ke karan 
//constructor jitne bhi aapke argument hota hai usko pack karke aapko de deta hai

//3.  jo bhi argument warega likhe hai wo this key word ke under inject ho jat hai

//4. 4th steps me aapko mil jate hai function ke under

// search on google instace of