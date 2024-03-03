const number = [2, 4, 6, 8, 10]

const totalNum = number.reduce((acc, currentValue) => {
    // console.log(`acc: ${acc} and current:${currentValue}`);
    return acc + currentValue
}, 1)

// console.log(`Sum: ${totalNum}`);

// shopping cart

const shoppingCart = [
    {
        Name: "mobile",
        price: 12500
    },
    {
        Name: "laptop",
        price: 100500
    },
    {
        Name: "camera",
        price: 80000
    },
    {
        Name: "head phone",
        price: 5000
    },
    {
        Name: "ear bard",
        price: 10000
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(`Total Bill: ${priceToPay}`);