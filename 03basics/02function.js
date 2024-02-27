// Shopping cart

function calculateCartPrice(...price1){ //... this is called spread operator/rest operator
    return price1
}

// console.log(calculateCartPrice(200, 500, 1000)); 

const user = {
    customerName : "kabi",
    price : 999
}

function handledObject(anyobject){
    // console.log(`cutomer name: ${anyobject.customerName} goods price: ${anyobject.price}`);
}
 handledObject(user)

//  passed object thourgh function call
// handledObject({
//     customerName: "shyam",
//     price: 299
// })

const myNewArray = [200, 400, 999]

function returnSecodnValue(getArray){
    return getArray
}

// console.log(returnSecodnValue(myNewArray));
console.log(returnSecodnValue([400, 300, 600]))