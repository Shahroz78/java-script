const user = {
    username : "shahroz khan",
    price : 999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our website! Your price is ${this.price}.`);
        console.log(this); // this will print the user object because the this keyword is used inside the welcomeMessage function which is a method of the user object
    }
}
//user.welcomeMessage(); // this will print "Welcome shahroz khan to our website! Your price is 999." 
// because the function is using the this keyword to access the properties of the user object
user.username = "sammy khan";
//user.welcomeMessage(); // this will print "Welcome sammy khan to our website! Your price is 999."
// because the function is using the this keyword to access the properties of the user object and we have changed the username property of the user object
//console.log(this); // this will print the global object because the this keyword is used outside of any function or object


/*function chai(){
    let username = "shahroz khan";
    console.log(this); // this will print the global object because the this keyword is used inside a regular function and it is not called as a method of any object
    console.log(this.username); // this will print undefined because the this keyword is used inside a regular function and it is not called as a method of any object, so it is referring to the global object which does not have a username property
}
chai();*/

//arrow function
/*const chai = function(){
    let username = "shahroz khan";
    console.log(this.username); // this will print undefined because the this keyword is used inside a regular function and it is not called as a method of any object, so it is referring to the global object which does not have a username property
}*/
//chai();

//
const chai = () =>{
    let username = "shahroz khan";
    console.log(this); // this will print undefined because the this keyword is used inside a regular function and it is not called as a method of any object, so it is referring to the global object which does not have a username property
}
chai();

// using arrow function as a method of an object
//paranthesis using returning object literal
const addtwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addtwo(5, 10)); // this will print 15 because the function is adding the two numbers passed as arguments and returning the result
//another way to write the same function using implicit return
//they cannot be used returning object literal without paranthesis because it will be treated as a block of code and not an object literal 
const addone = (num1, num2) => (num1 + num2)   
const addthird = (num1, num2) => ({username: "shahroz khan"}) // this will return an object literal with the username property set to "shahroz khan"
console.log(addthird(5, 10));

//imeediately invoked function expression (IIFE) using arrow 
(() => {
    console.log(`Database is connected successfully.And the connection is made by ${"shahroz khan"}`)
})(); // this will print "Database is connected successfully.And the connection is made by shahroz khan".
//  Because the function is immediately invoked after it is defined and it is using the arrow function syntax which does not have its own this keyword,
//  so it is referring to the global object which does not have a username property, but we are directly using the string "shahroz khan" in the console.log statement.
(function chai(){
    console.log(`Database is connected successfully.And the connection is made by ${"shahroz khan"}`)
})();