//singletone
// object constructor //object.create

//object literal
//interveiw question decleare a keys in object without using quotes
const mysym1 = Symbol("keys1"); 
const person = {
    name: 'shahroz khan',
    "Full Name": 'shahroz khan',
    age: 25 ,
    hobbies: ['cricket', 'football', 'coding'],
    [mysym1]: "keys1",
    address: {
        city: 'karachi',
        email:'shahrozkhan280@gmail.com' ,
        isLoggedIn: false,
        lastLoggedIn: ['2023-01-01', '2023-02-01', '2023-03-01']
    }
}
//console.log(person.name); // Output: 'shahroz khan'
//console.log(person.age); // Output: 25
//console.log(person.hobbies); // Output: ['cricket', 'football', 'coding']
//No chance accessing the Full Name property using dot notation because it contains a space, so we have to use bracket notation...
//console.log(person["Full Name"]); // Output: 'shahroz khan'
//mostely we use dot notation but rarely we use bracket in some cases like when we have a space in the key or when we want to access a property using a variable that holds the key name. In this case, we can use bracket notation with the variable name to access the property value. 
//console.log(person["name"]); // Output: 'shahroz khan'
//console.log(typeof person["name"]); // Output: 'string'
//console.log(person.mysym1); // Output: 'keys1'
//console.log( typeof person.mysym1); // Output: 'undefined' (since mysym1 is a variable that holds the string "keys1", we cannot access the value using dot notation with the variable name)
//console.log( person[mysym1]); // Output: 'keys1' (since mysym1 is a symbol, we can access the value using bracket notation with the symbol variable)
//console.log(person);
person.email = 'shahrozkhan280@gmail.com';
//Object.freeze(person); // Freezes the person object, preventing any modifications to its properties
person.email = 'shahrozchatgpt.com'    // Attempting to modify the email property will not work because the object is frozen
//console.log(person);

// function
person.greet = function() {
    console.log("Hello, my name is ");
}
person.greetone = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
console.log(person.greet()); // Output: Hello, my name is  (the function is called and executed, printing the message to the console)
console.log(person.greet); // Output: [Function] (the function itself is returned, not executed, so it will show the function definition or reference in the console)
//
console.log(person.greetone()); // Output: Hello, my name is shahroz khan and I am 25 years old. (the function is called and executed, printing the message to the console with the values of name and age from the person object)
console.log(person.greetone); // Output: [Function] (the function itself is returned, not executed, so it will show the function definition or reference in the console)