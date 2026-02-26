//truthy or falsy values
//truthy values
// const userEmail = "shahroz280@gmail.com" // truty values
// const userEmail = "" // falsy values
const userEmail = [] // tryuth values
if(userEmail){
    console.log("user got an email");
}
else{
    console.log("Do not have an email");
}

// falsy values
 // false, 0, -0, "", BigInt, 0n, null, undefined, NaN
//truthy values
"0", 'false', " ", [], {}, function(){}

//how to check array is empty
if (userEmail.length === 0) {
    console.log("array is Empty");
}
//how to check object is empty
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}