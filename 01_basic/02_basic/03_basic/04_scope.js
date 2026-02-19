//local or global scope


//var a = 10; //global scope
//let b = 20; //global scope
//const c = 30; //global scope
if(true){
    var a = 10;
    let b = 40;
    const c = 50;
    //console.log("INNER :", a, b, c); // this will print 10, 40 and 50 because var is function scoped
    //  and it is accessible inside the if block, even though it is declared inside the if block
}
//console.log(a); // this will print 10 because var is function scoped and it is accessible outside the if block, 
// even though it is declared inside the if block
//console.log(b); // this will throw an error because let is block scoped and it is not accessible outside the if block
//console.log(c); // this will throw an error because const is block scoped and it is not accessible outside the if block

//nested scope
 function one(){
    const username = "shahroz khan";
    function two(){
        const website = "shahroz.com";
        console.log(username); // this will print "shahroz khan" because the inner function has access to the variables of the outer function
    }
    //console.log(website); // this will throw an error because the outer function does not have access to the variables of the inner function
    //two();
 }
 //one();

 //nested if else
    if(true){
         const username = "shahroz khan";
         if(username === "shahroz khan"){
            const website = "yangoo.com";
            //console.log(username + website); // 
         }
        // console.log(website); // this will throw an error because the outer.
        //  if block does not have access to the variables of the inner if block
    }
//    console.log(username); // this will throw an error because the outer.
//  if block does not have access to the variables of the inner if block
//functions decleration
console.log(addOne(5)); // this will print 6 because the function is hoisted and it is accessible before its declaration
function addOne(Num){
    return Num + 1;
}
addOne(5); // this will return 6 because the function is adding 1 to the number passed as an argument
//function expression
addtwo(5);
const addtwo = function(Num){
    return Num + 2;
}
//console.log(addtwo(5)); // this will return 7 because the function is adding 2 to the number passed as an argument