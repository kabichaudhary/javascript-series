const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const number = myNums.filter((numbers) => (numbers > 5))
const number = myNums.filter((numbers) => {
    return numbers > 5
})

// console.log(number);

const bookList =[
    {bookName: "rich dad & poor dad", genre: "history", published: "1990", edition: 2020},
    {bookName: "richard", genre: "fiction", published: "1999", edition: 2000},
    {bookName: "one", genre: "history", published: "1998", edition: 2002},
    {bookName: "two", genre: "fiction", published: "2000", edition: 2004},
    {bookName: "three", genre: "history", published: "1995", edition: 2008},
      
]

const books = bookList.filter( (book) => {
    return book.genre === "history" && book.published <= 1990
})

console.log(books);