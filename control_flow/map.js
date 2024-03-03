const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = numbers
                .map( (nums) => {return nums * 5})
                .map( (nums) => {return nums -2})
                .filter( (nums) => {return nums >= 20})

console.log(newNums);