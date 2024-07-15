const name = "ram"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} ans my repoCount is ${repoCount} `);

const gameName = new String('shreeram-srk-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));


const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-7,4)
// console.log(anotherString);

const newStringone = "   shreeram  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://shreeram.com/shreeram%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('ram'));

console.log(gameName.split('-'));
console.log();



