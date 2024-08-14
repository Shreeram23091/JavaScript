const name = "ram"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} ans my repoCount is ${repoCount} `);

const gameName = new String('shreeram-srk-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); object like {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));


const newString = gameName.substring(0, 4)
// console.log(newString); 

const anotherString = gameName.slice(-7,4)
// console.log(anotherString);// "" in slice method end index must ber greater than start here start =16-7->9 and end =4 so empty output

const newStringone = "   shreeram  "
// console.log(newStringone);
// console.log(newStringone.trim());// remove space back and for both

const url = "https://shreeram.com/shreeram%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('ram'));

console.log(gameName.split('-'));
console.log();



