// +++++++++++++++++++++Data types summary+++++++++++++++++++
// primitive data types :-string, number, boolean, bigint, undefined, null, symbol

// Non-primitive types :- array, object, funtions (reference type)

// stack memory :- primitive data types are used. -> provides copy
// heap memory :- non-primitive data types are used. -> references/ original value

let myEmailAddress = "xyz@gmail.com"

let anotherEmail = myEmailAddress

anotherEmail = "abc@gmail.com"

console.log(myEmailAddress);
console.log(anotherEmail);

let userOne = {
    email: "sham@google.com",
    uid : "u123"
}

let uesrTwo = userOne
uesrTwo.email = "subhash@gmail.com"

console.log(userOne);
console.log(uesrTwo);