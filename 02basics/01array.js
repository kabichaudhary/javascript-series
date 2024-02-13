// javascript arrays are resizeable and can a contain of different mix data types.
// javascript array-copy operations create shallow copies.
// A shallow copy of an object is a copy whose properties share the same references.

const myArr = [1, 2, 3, 4, 5, 6]
// console.log(myArr);

// Array methods..
myArr.push(10)
// console.log(myArr);

myArr.pop(5)        //remove the element from the last index.
// console.log(myArr);

myArr.fill(0, 3, 6)     //fill with 0 from position 3 to until 5 position
// console.log(myArr);

const reversedArr = myArr.reverse()
// console.log("Reversed:", reversedArr);

  //remove the first element from an array.
const firstElement = myArr.shift() 
// console.log(firstElement);

const sortedArr = myArr.sort()
// console.log(sortedArr);

const newArr = ["dec", "march", "nov", "feb", "april"]
// console.log(newArr.sort());

newArr.splice(5, 0, "may")
// console.log(newArr);

// instances adds the specified elements to the beginning of an array and returns the new length of the array.
newArr.unshift("jun", "july");
// console.log(newArr);

// console.log(newArr.includes("jun"));

// console.log(newArr.indexOf("may"));

// bind and convert into string.
const newMyArr = newArr.join()
// console.log(newArr);
// console.log(newMyArr);      //log(typeof newMyArr)

// slice && splice

const mnr = [9,8,7,6,5,4,3,2,1]
console.log("A", mnr);

const mnr1 = mnr.slice(1, 4)
console.log(mnr1);
console.log("B", mnr);

const mnr2 = mnr.splice(1, 4)
console.log(mnr2);
console.log("C", mnr);
