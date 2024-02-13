const name = "kabi chaudhary"
const repoCount = 2



console.log(`My name is ${name} && repo count is:${repoCount}`)

const userName = new String('@kabichaudhary')

console.log(userName.__proto__);

console.log(userName.length);
console.log(userName.charAt(6));
console.log(userName.indexOf('y'))

const newString = userName.substring(0, 7)
console.log(newString);

const newSlice = userName.slice(-8, 5)  //negetive values are accepted.
console.log(newSlice);

const newStringOne = "      kabi        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "kabi.com/kabi%20chaudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('kabi'));

console.log(userName.split('-'));