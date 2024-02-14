const marvelHeros = ["spiderman", "ironman"]

const dcHeros = ["batman", "superman"]

// const allHeros = marvelHeros.concat([dcHeros])
// console.log(allHeros);

const allNewheros = [...marvelHeros, ...dcHeros];  // using spread operator..
console.log(allNewheros);

const antoherArray = [2, 3, 4, 5, [6, 7, 8], 8, [7, 8, 9, 10, [2, 4, 5]]]
const real_array = antoherArray.flat(3)
console.log(real_array);

// convert into array
console.log(Array.isArray("kabi")); //Returns true if the argument is an array, or false otherwise.
console.log(Array.from("kabi"));  //Creates a new Array instance from an iterable or array-like object
console.log(Array.from({name: 'kabi'}));    //do not convert directly into array

// convert elements to array
let score1 = 2000
let score2 = 3000
let score3 = 4000
console.log(Array.of(score1, score2, score3));  //Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.




