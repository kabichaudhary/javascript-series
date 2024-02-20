// singleton
// Object.create()

// Object literal

const mySymbol = Symbol("key1")

const jsDeveloper = {
    name: "kabi",
    age: 24,
    [mySymbol]: "kayvalue1",
    "full_name": "Kabi Chaudhary",
    location: "nepal",
    email: "kabi.google.com",
    isLogedDays: false,
}

// console.log(jsDeveloper.name);
// console.log(jsDeveloper["name"]);
// console.log(jsDeveloper["full_name"]);
// console.log(jsDeveloper.age);
// console.log(typeof jsDeveloper[mySymbol]);

// Accessing objects value
jsDeveloper.email = "kabi.scalar.com"  //override the key values
// console.log(jsDeveloper.email);  
// Object.freeze(jsDeveloper)  //lock the object
jsDeveloper.email = "kabi.chatgpt.com"

jsDeveloper.greeting = function(){
    console.log("hello js developers!!");
}
jsDeveloper.greetingTwo = function(){
    console.log(`Hello jsDeveloper ${this.name}`);
}
console.log(jsDeveloper.greeting());
console.log(jsDeveloper.greetingTwo());

