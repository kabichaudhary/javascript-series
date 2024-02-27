// global and local scope in js
if (true){
    var num1 = 20
    let num2 = 30
    const num3 = 40
}
// console.log(num1); ->
// console.log(num2);
// console.log(num3);


function animal(){
    const cow = "cow give us to milk"
    function tiger(){
        const damaru = "tiger baby's called damaru"
        // console.log(cow); //error occurs
        // console.log(damaru);
    }
    // console.log(damaru); //error occurs
    // console.log(cow);
    tiger()
}
// console.log(cow);
animal()

//function declaration
console.log(addNum(5));

function addNum(number){
    return number + 2
}

// function expression

const result = function(number){
    return number*5
}

console.log(result(5));
