// Topic control flow

// if statement
let age = 19;

if(age <= 18){
    //console.log("you are not elligibal to drive"); // this will print "you are elligibal to drive" because the condition in the if statement is true
}
else if(age >= 18){
    //console.log("you are elligibal to drive"); // this will print "you are not elligibal to drive" because the condition in the else if statement is true
}
//operators
// ==, ===, !=, !==, >, <, >=, <=
let num1 = 5;
let num2 = "5";
//console.log(num1 > num2); // this will print false because the > operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal
//console.log(num1 < num2); // this will print false because the < operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal
//console.log(num1 >= num2); // this will print true because the >= operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal but num1 is greater than num2
//console.log(num1 <= num2); // this will print true because the <= operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal but num1 is less than num2
//console.log(num1 == num2); // this will print true because the == operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are equal in value but not in type
//console.log(num1 === num2); // this will print false because the === operator is comparing the values and types of num1 and num2 and since num1 is a number and num2 is a string, they are not equal in type
//console.log(num1 != num2); // this will print false because the != operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are equal in value but not in type
//console.log(num1 !== num2); // this will print true because the !== operator is comparing the values and types of num1 and num2 and since num1 is a number and num2 is a string, they are not equal in type

const temperature = 30;
if(temperature > 30){
    //console.log("it's a hot day"); // this will print "it's a hot day" because the condition in the if statement is true
}
else {
    //console.log("it's a cold day"); // this will print "it's a cold day" because the condition in the else if statement is true
}
// if else statement
/*let score = 69;
if(score >= 90){
    console.log("A"); // this will print "A" because the condition in the if statement is true
}
else if(score >= 80){
    console.log("B"); // this will print "B" because the condition in the else if statement is true
}
else if(score >= 70){
    console.log("C"); // this will print "C" because the condition in the else if statement is true
}
else{
    console.log("D"); // this will print "D" because the condition in the else statement is true
}*/
 /*let score1 = 200;
if(score1 >= 100){
    let power = "flying";
    console.log(`The power is ${power}`); // this will print "The power is flying" because the condition in the if statement is true and the variable power is defined within the if block
}
 //console.log(`The power is ${power}`); 

 /*const balance = 1000;
 if(balance < 500){
    console.log("less then 500"); // this will print "less then 500" because the condition in the if statement is true
 }
 else if(balance < 750){
    console.log("less then 750"); // this will print "less then 750" because the condition in the else if statement is true
 }
 else if(balance < 900){
    console.log("less then 900"); // this will print "less then 900" because the condition in the else if statement is true
 }
 else{
    console.log("balance is less then 1200" ); // this will print "balance is less then 1200" because the condition in the else statement is true
 }*/

const Userloggedin = true;
const debbitCart =true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = false;
const loggedInFromEmail = true;
let amount = 1000;
if(Userloggedin && debbitCart && amount > 500)
{
    console.log("User is logged in and has a debit card"); // this will print "User is logged in and has a debit card" because the condition in the if statement is true
}
if(loggedInFromGoogle || loggedInFromFacebook || loggedInFromEmail){
    console.log("User is logged In "); // this will print "User is logged in from google or facebook or email" because the condition in the if statement is true
}
