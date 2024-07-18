let score = undefined//we can put "ram",null "33","33abc" for analyse

// console.log(typeof score); //undefined
// console.log(typeof(score));//undefined

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);//number
// console.log(valueInNumber); //NaN

//"33" => 33
// "33abc" =>NaN
//true =>1; false => 0

let isLoggedIn = "ram"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);//true

// 1 =>true; 0 =>false
//"" =>false 
//"ram" =>true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);//33
// console.log(typeof stringNumber);//string

//******************************** Operation ****************

let val = 3
let negvalue = -val
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2)
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3)


let str1 = "hello"
let str2 = "ram"
let str3=str1+str2
// console.log(str3);

// console.log("1"+2)//12
// console.log("1")//1
// console.log(1 + "2" +2 + 2)//1222
// console.log(1 + 2 + "2");//32
// console.log((3+4)*5%3);//2


// console.log(+true);//1
// console.log(true+);//error
// console.log(+"ram");//NaN

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
