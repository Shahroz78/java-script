// constructer method
// declearing a object using the Object constructor
//singletone object
//const tinderUser = new Object();
// another way
// non-singletone object
const tinderUser2 = {} // object literal
// another way
//console.log(tinderUser); // Output: {} (an empty object is created using the Object constructor)
//console.log(tinderUser2); // Output: {} (an empty object is created using Object.create with Object.prototype as the prototype)
tinderUser2.name = "Sammy";
tinderUser2.age = 25;
tinderUser2.isLoggedIn = false;
console.log(tinderUser2);

const RegularUser = {
    Email: "Sheriiibaba@gmail.com",
    FullName: {
        userFullName: {
            FirstName: "Sheriii",
            LastName: "Baba"
        }
}
}
//console.log(RegularUser.FullName.userFullName.LastName); // Output: "Baba" (accessing the nested property LastName using dot notation)
//console.log(RegularUser["FullName"]["userFullName"]["LastName"]); // Output: "Baba" (accessing the nested property LastName using bracket notation)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//best method to merge two objects is using the spread operator or Object.assign() method. The spread operator allows you to create a new object by spreading the properties of existing objects into it, while Object.assign() copies the properties of one or more source objects into a target object. Both methods are commonly used for merging objects in JavaScript.
const obj3 = {...obj1, ...obj2} // Spread operator to merge obj1 and obj2 into a new object obj3
// const obj3 = Object.assign({}, obj1, obj2) //target object is an empty object {} and source objects are obj1 and obj2, so the properties of obj1 and obj2 will be copied into the empty object, resulting in a new object that contains all the properties of both obj1 and obj2.
//console.log(obj3);

console.log(Object.keys(tinderUser2)); // Output: ["name", "age", "isLoggedIn"] (returns an array of the keys in obj3)
console.log(Object.values(tinderUser2)); // Output: ["Sammy", 25, false] (returns an array of the values in obj3)
console.log(Object.values(tinderUser2).length); // Output: 3 (returns the number of values in obj3, which is the same as the number of keys since each key has a corresponding value)
console.log(Object.keys(tinderUser2).length); // Output: 3 (returns the number of keys in obj3, which is the same as the number of values since each key has a corresponding value)
console.log(Object.entries(tinderUser2)); // Output: [["name", "Sammy"], ["age", 25], ["isLoggedIn", false]] (returns an array of key-value pairs in obj3)

console.log(tinderUser2.hasOwnProperty("name")); // Output: true (checks if obj3 has the property "name")
console.log(tinderUser2.hasOwnProperty("email")); // Output: false (checks if obj3 has the property "email", which it does not)