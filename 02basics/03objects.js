const books ={
    booksName: "rich dad && poor dad",
    authorName: "shyam",
    price: 999
}

// console.log(books.price);
// objects de-structure
const {booksName: bname, price, authorName} = books
console.log(bname);