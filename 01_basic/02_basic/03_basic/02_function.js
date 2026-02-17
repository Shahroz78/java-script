//function CalculateCartPrice (...num1){
    function CalculateCartPrice (val,val2,...num1){ // this will return an array of the numbers passed as arguments to the function,
    //  except for the first two arguments which are assigned to val and val2
    //console.log(val); // this will print the value of val, which is the first argument passed to the function
    //console.log(val2);  // this will print the value of val2, which is the second argument passed to the function
    //console.log(num1); // this will print the value of num1, which is an array of the remaining arguments passed to the function
    return num1;
}
console.log(CalculateCartPrice(100,200,400,5000)); // this will return an array of the numbers passed as arguments to the function
/// oobject use in a function
const User  = {
    name: "John",
    age: 30,
    email: "john@example.com"
}
function handleobject(anyobject){
    console.log(`Name is ${anyobject.name} and age is ${anyobject.age} and email is ${anyobject.email}`); // this will print the name, age and email of the user object passed as an argument to the function
}
//handleobject(User); // this will print the name, age and email of the user object passed as an argument to the function
// Another way 
handleobject({
    name: "John",
    age: 30,
    email: "john@example.com"
})

/// Array use in a function
const myNewArray = [100,200,300,400]
function ReturnthirdValue(getarray){
    return getarray[2]; // this will return the third value of the array passed as an argument to the function
}
//console.log(ReturnthirdValue(myNewArray)); // this will return the third value of the array passed as an argument to the function, which is 300
console.log(ReturnthirdValue([100,200,300,400])); // this will return the third value of the array passed as an argument to the function, which is 300