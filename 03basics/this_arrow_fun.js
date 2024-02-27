//  this refers to current context.
const user ={
    username: 'kabi',
    price: 999,

    welcomeMessage : function(){
        // console.log(`${this.username} welcome to website!!`);
        // console.log(this);
    }
}
user.welcomeMessage()

//if you can change the username
user.username = "sham"
user.welcomeMessage()

// +++++++++++++++++++++++++++Arro functions+++++++++++++++++++
//explicit return

const addTwo = (num1, num2) =>{
    return num1 + num2
}

// console.log(addTwo(40, 50));

// Implecit return
// const addTwo1 = (num1, num2) => num1 + num2
const addTwo1 = (num1, num2) => (num1 + num2)

// reutrn objects
const returnObject = () =>({username : "youtube_user"})


console.log(addTwo(30, 40));
console.log(returnObject());
