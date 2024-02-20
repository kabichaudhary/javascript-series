// Singleton object (construtor object)

const youtubeUser = new Object()
youtubeUser.id = "312cba"
youtubeUser.name = "kabi"
youtubeUser.isLogedIn = false
// console.log(youtubeUser.name);
// console.log(youtubeUser);

const regularStaff = {
    email: "sam@google.com",
    fullname: {
        uesrname:{
            firstname: "kabi",
            lastname: "chaudhary"
        }
    }
}
// console.log(regularStaff.fullname.uesrname.firstname);

const fruits = {1: "apple", 2: "banana"}
const vegetables = {3: "carrot", 4: "pumkin"}
// const obj1 = Object.assign({}, fruits, vegetables)

const obj2 = {...fruits, ...vegetables}     //by using spread operator
// console.log(obj2);

console.log(youtubeUser);
console.log(Object.keys(youtubeUser));
console.log(Object.values(youtubeUser));
console.log(Object.entries(youtubeUser));

console.log(youtubeUser.hasOwnProperty('ids'));


