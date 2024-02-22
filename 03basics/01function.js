function addTwoNumber (number1, number2){
    return number1 + number2;
    // console.log(number1 + number2);
}
const result = addTwoNumber(20, 20)
// console.log(result);


function userLogedIn(username){ //-> parameters
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just loged in`
}
console.log(userLogedIn("kabi"));//-> arguments