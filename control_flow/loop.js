const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(`number is: ${num}`);    
}

const greetings = "Hello_world!"

for (const greet of greetings) {
    // console.log(`greeting is: ${greet}`);    
}

//Map
// for of loop

const map = new Map()
map.set('NP', 'Nepal')
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')

for (const [key, value] of map) {
    // console.log(key, ':-', value);    
}

// for in loop
const myObject ={
    js: "javascrip",
    cpp: "c++",
    rb: "ruby",
}

for (const key in myObject) {
//    console.log(`${key} shortcut for: ${myObject[key]}`);
}

// for in loop in array
const programming = ["js", "c", "cpp", "java", "swift"]

for (const key in programming) {
    // console.log(key); -> it returns the array keys
    // console.log(programming[key]);-> it returns the array values
}

