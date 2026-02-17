// function and its parameters
/*console.log("S");
console.log("H");
console.log("A");
console.log("H");
console.log("R");
console.log("O");
console.log("Z");*/

function myName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H");
    console.log("R");
    console.log("O");
    console.log("Z");
}

//myName(); // calling the function to execute the code inside it
//myName; // this will not execute the function, it will just return the function definition
//AddTwo Number
function addTwoNumbers(num1, num2) {
    //console.log(num1 + num2); // this will add the two numbers and print the result
    //let result = num1 + num2; // this will add the two numbers and assign the result to the variable result
    console.log("shahroz khan")
    //Another way to return the result is to use the return statement
    return num1 + num2; // this will add the two numbers and return the result to the caller of the function
    return result; // this will return the result to the caller of the function
    console.log("This will not be printed because it is after the return statement"); // this will not be executed because it is after the return statement 
}
/* addTwoNumbers(); // this will print NaN because we are trying to add undefined values
addTwoNumbers(5, 10); // this will print 15 because we are adding 5 and 10
addTwoNumbers(5 ,"10"); // this will print 510 because we are adding a number and a string, which results in string concatenation
addTwoNumbers("5", 10); // this will print 510 because we are adding two strings, which results in string concatenation
addTwoNumbers("a", 10); // this will print a10 because we are adding a string and a number, which results in string concatenation
addTwoNumbers((5), (10)); // this will print 15 because we are adding two numbers, even though they are wrapped in parentheses
addTwoNumbers(5, null); // this will print 5 because we are adding a number and null, which results in the number being returned
addTwoNumbers(5, undefined); // this will print NaN because we are adding a number and undefined, which results in NaN
addTwoNumbers(null, null); // this will print 0 because we are adding two null values, which results in 0
addTwoNumbers(undefined, undefined); // this will print NaN because we are adding two undefined values, which results in NaN
*/
const result = addTwoNumbers(5, 10); // this will print 15 and assign the result to the variable result
//console.log("result:", result); // this will print undefined because the addTwoNumbers function does not return a value, it only prints the result to the console

function UserloggedIn(username = "sam") {
    /*if (username === "shahroz khan") {
        return true; // this will return true if the username is "shahroz khan"
    } else {
        return false; // this will return false if the username is not "shahroz khan"
    }*/
   if (username) {
    return `${username} is logged in`; // this will return a string with the username if the username is not "shahroz khan"
}
}
//console.log(UserloggedIn()); // this will return "undefined is logged in" because we are not passing any argument to the function, 
// so the username is undefined
console.log(UserloggedIn("shahroz khan")); // this will return "shahroz khan is logged in" because we are passing "shahroz khan" as the argument to the function,
//  so the username is "shahroz khan"
//const isLoggedIn = UserloggedIn("shahroz khan"); // this will return true because the username is "shahroz khan"
//sconsole.log("isLoggedIn:", isLoggedIn); // this will print true because the UserloggedIn function returns true for the username "shahroz khan"

