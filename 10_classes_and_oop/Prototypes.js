// let myName = "shreeram     ";
// let myChannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shreeram = function(){
    console.log(`shreeram is present is all object`);
}

 Array.prototype.heyshreeram = function(){
    console.log(`shreeram says hello`);
 }

// heroPower.shreeram()
// myHeros.shreeram()
// myHeros.heyshreeram()
// heroPower.heyshreeram()

// inheritance

const User = {
    name: "chai",
    email: "chai@123"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"shreeram".trueLength()
"iceTea".trueLength()

// jis ka matlab this --> jisne call kiya uske pass jao
