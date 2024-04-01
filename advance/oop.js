const user = {
    username: "kabi",
    loginCount: 8,
    signIn: true,

    getUersDetails: function(){
        console.log(`usernmae ${this.username}`);
    }
}
console.log(user.username);
console.log(user.getUersDetails());


function User(username, logedInCount, isSingedIn){
    this.username = username
    this.logedInCount = logedInCount
    this.isSingedIn = isSingedIn
    return this

}

const userOne = new User("ram", 12, true)
const userTwo = new User("sita", 10, false)
console.log(userOne);
console.log(userTwo);