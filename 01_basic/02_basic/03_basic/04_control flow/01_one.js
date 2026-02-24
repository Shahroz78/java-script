// Topic control flow

// if statement
let age = 19;

if(age <= 18){
    console.log("you are not elligibal to drive"); // this will print "you are elligibal to drive" because the condition in the if statement is true
}
else if(age >= 18){
    console.log("you are elligibal to drive"); // this will print "you are not elligibal to drive" because the condition in the else if statement is true
}
//operators
// ==, ===, !=, !==, >, <, >=, <=
let num1 = 5;
let num2 = "5";
console.log(num1 > num2); // this will print false because the > operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal
console.log(num1 < num2); // this will print false because the < operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal
console.log(num1 >= num2); // this will print true because the >= operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal but num1 is greater than num2
console.log(num1 <= num2); // this will print true because the <= operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are not equal but num1 is less than num2
console.log(num1 == num2); // this will print true because the == operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are equal in value but not in type
console.log(num1 === num2); // this will print false because the === operator is comparing the values and types of num1 and num2 and since num1 is a number and num2 is a string, they are not equal in type
console.log(num1 != num2); // this will print false because the != operator is comparing the values of num1 and num2 and since num1 is a number and num2 is a string, they are equal in value but not in type
console.log(num1 !== num2); // this will print true because the !== operator is comparing the values and types of num1 and num2 and since num1 is a number and num2 is a string, they are not equal in type


