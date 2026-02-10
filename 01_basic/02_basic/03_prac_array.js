// practice in array and array methods
let Array = [1, 2]; 
Array.push(3);
//console.log(Array); // Output: [1, 2, 3]
Array.pop(3);
//console.log(Array); // Output: [1, 2]
Array.unshift(0);
//console.log(Array); // Output: [0, 1, 2]
Array.shift();
//console.log(Array); // Output: [1, 2]
Array.length;
//console.log(Array.length); // Output: 2
Array.indexOf(2);
//console.log(Array.indexOf(2)); // Output: 1 (index of the first occurrence of 2 in the array)
Array.includes(3);
//console.log(Array.includes(3)); // Output: false (since 3 is not in the array)
Array.slice(0, 1);
//console.log(Array.slice(0, 1)); // Output: [1] (creates a new array containing the elements from index 0 to 1, excluding index 1)
Array.splice(0, 1, 0);
//console.log(Array); // Output: [0, 2] (removes 1 element at index 0 and adds 0 at that index)
let Array1 = [1, 2, 3, 4, 5];
Array1.map(x => x * 2);
//console.log(Array1.map(x => x * 2)); // Output: [2, 4, 6, 8, 10] (creates a new array with each element multiplied by 2)
Array1.filter(x => x > 1);
//console.log(Array1.filter(x => x > 1)); // Output: [2, 3, 4, 5] (creates a new array with elements that are greater than 1)
Array1.reduce((acc, x) => acc + x, 0);
//console.log(Array1.reduce((acc, x) => acc + x, 0)); // Output: 15 (sums up all the elements in the array, starting with an initial value of 0)

let a = [1, 2, 3, 4, 5];
a.slice(1, 4);
//console.log(a.slice(1, 4)); // Output: [2, 3, 4] (creates a new array containing the elements from index 1 to 4, excluding index 4)
a.splice(1, 3);
//console.log(a); // Output: [1, 5] (removes 3 elements starting from index 1, which are 2, 3, and 4)
//console.log(a.includes(5)); // Output: true (since 5 is in the array)
 let b = [10, 20, 30, 40, 50];
 let c = b.map(x => x * 5);
console.log(c); // Output: [50, 100, 150, 200, 250]
 let d = b.filter(x => x >= 30);
 console.log(d); // Output: [30, 40, 50]
    let e = b.reduce((acc, x) => acc + x, 0);
    console.log(e); //sum of all elements // Output: 150


    
