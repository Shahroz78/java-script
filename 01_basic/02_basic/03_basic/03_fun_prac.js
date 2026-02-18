// practice of function

function sayhello(){
    console.log("Hello World, this is a function"); // this will print "Hello World, this is a function" to the console
}
//sayhello(); // calling the function to execute the code inside it

function addTwoNumbers(num1, num2) {
    return num1 + num2; // this will add the two numbers and return the result to the caller of the function
}
//console.log(addTwoNumbers(5, 10)); // this will print 15 because we are adding 5 and 10

//function expession
const multiply = function(num1, num2) {
    return num1 * num2; // this will multiply the two numbers and return the result to the caller of the function
}
//console.log(multiply(5, 8)); // this will print 40 because we are multiplying 5 and 8
// Arrow function
const sub = (num1, num2) => num1 - num2;
//console.log(sub(10, 5)); // this will print 5 because we are subtracting 5 from 10
const div = (num1, num2) => num1 / num2;
//console.log(div(10, 5)); // this will print 2 because we are dividing 10 by 5
const mod = (num1, num2) => num1 % num2;
//console.log(mod(10,3)); // this will print 1 because we are finding the remainder of 10 divided by 3

//annonymous function
setTimeout(function() {
    ///console.log("This is an anonymous function"); // this will print "This is an anonymous function" to the console after 2 seconds
}, 2000);
//setTimeout(sayhello, 3000); // this will print "Hello World, this is a function" to the console after 3 seconds
function greet(name,callback){
    console.log("hello " + name);
    callback();
}
//greet("shahroz khan",() => console.log("This is a callback function")); // this will print "hello shahroz khan" and "This is a callback function" to the console
// pizaa order function with callback
function PizzaOrder ( flavour,callback){
    console.log(`your ${flavour} pizza is ready`);
    callback();
}
//PizzaOrder("pepperoni",() =>console.log("enjoy your pizza")); // this will print "your pepperoni pizza is ready" and "enjoy your pizza" to the console

// call() function
function show(){
    console.log(this.Name)
    console.log(this.age)
    console.log(this.city)
}
const person ={
    Name:"shahroz khan",
    age:25,
    city:"lahore"
}
//show.call(person); // this will print the name, age and city of the person object to the console using the call method

//apply() function
function add(a, b){
    console.log(a + b);
}
//add.apply(null,[5, 10]); // this will print 15 because we are adding 5 and 10 using the apply method, which takes an array of arguments

//bind() function
const user = {
    Name:"shahroz khan"
};
function say(){
    console.log("Hello " + this.Name);
}
const newfunc = say.bind(user); // this will create a new function that is bound to the user object, so when we call newfunc, it will print "Hello shahroz khan" to the console
//newfunc(); // this will print "Hello shahroz khan" to the console because we are calling the new function that is bound to the user object
