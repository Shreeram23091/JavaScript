const score = 400

const balance = new Number(100)
// console.log(balance);//[Number: 100]

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(1));//up to one decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1234567
// console.log(hundreds.toLocaleString('en-US')); //for US standard 
// console.log(hundreds.toLocaleString('en-IN'));// for india



//+++++++++++++++++++maths+++++++++++++++++


// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,3,4));
// console.log(Math.max(2,5,6));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log((Math.random() * (max-min+1) )+10)
