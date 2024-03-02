const userEmail = []

if (userEmail.length == 0) {
    console.log("Array is Empty!");
}

const emptyObject = {}
if (Object.keys(emptyObject).length == 0) {
    console.log("Empty object!!");
}

// Nullish coalsecing operator (??) // :null, undefined
let val1 
// val1 = 5 ?? 10
// val1 = null ?? 20
val1 = undefined ?? 15
console.log(val1);


// terniary operator
// condition ? true : false

const coffeePrice = 150
coffeePrice <= 100 ? console.log("less than actaul price"): console.log(" more than actual price");;