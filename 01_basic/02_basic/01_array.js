// array

const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["ironman", "spiderman", "thor", "hulk"];
const myArray2 = new Array(1, 2, 3, 4, 5);
//console.log(myArray[2]); //output: 2
//console.log(myHeros[1]); //output: spiderman
//console.log(myArray2[4]); //output: 5

//array methods

//myArray.push(6); //add element at the end of the array
//myArray.pop();

myArray.unshift(1); //add element at the beginning of the array
//console.log(myArray); //output: [1, 0, 1, 2, 3, 4, 5]
myArray.shift(); //remove element from the beginning of the array
//console.log(myArray); //output: [1, 0, 1, 2, 3, 4, 5]

// console.log( typeof myArray.includes(2)); //output: true
// console.log( typeof myArray.indexOf(9)); //output: -1
const NewArray = myArray.join();

//console.log(myArray);  
//console.log(NewArray);
//console.log(typeof NewArray);

// slice and splice

console.log("A " ,myArray); //output: [0, 1, 2, 3, 4, 5]
const myn1 = myArray.slice(2, 5); //output: [2, 3, 4]
console.log(myn1);
console.log("B " ,myArray); //output: [0, 1, 2, 3, 4, 5]

// splice
const myn2 = myArray.splice(2, 3); //output: [2, 3, 4]
console.log(myn2);
console.log("C " ,myArray); //output: [0, 1, 5]     