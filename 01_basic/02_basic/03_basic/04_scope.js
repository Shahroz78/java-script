//local or global scope


//var a = 10; //global scope
//let b = 20; //global scope
//const c = 30; //global scope
if(true){
    var a = 10;
    let b = 40;
    const c = 50;
    console.log("INNER :", a, b, c); // this will print 10, 40 and 50 because var is function scoped and it is accessible inside the if block, even though it is declared inside the if block
}
console.log(a); // this will print 10 because var is function scoped and it is accessible outside the if block, even though it is declared inside the if block
//console.log(b); // this will throw an error because let is block scoped and it is not accessible outside the if block
//console.log(c); // this will throw an error because const is block scoped and it is not accessible outside the if block