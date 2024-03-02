const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(`number is: ${num}`);    
}

const greetings = "Hello_world!"

for (const greet of greetings) {
    // console.log(`greeting is: ${greet}`);    
}

//Map

const map = new Map()
map.set('NP', 'Nepal')
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')

for (const [key, value] of map) {
    console.log(key, ':-', value);    
}