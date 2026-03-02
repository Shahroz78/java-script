// for loop
for (let i  = 1;  i <= 10; i ++) {
    const element = i;
    if (element == 5) {
        //console.log(`Detected by 5`)
        break
        //continue
    }
    //console.log(element);
}

//nested for loop
for (let i = 1; i <= 10; i++){
    console.log(`Outer value is : ${i}`);
for (let j = 1; j <= 10; j++){
//console.log(`inner value is :${j} and inner loop ${i}`);
//backticks method
//console.log(`${i} * ${j} =  ${i*j} `);
//simple method
//console.log(i + ' * ' + j + " = " + i*j);
}
}

//

let myArray = ["flash","ironman","hulk"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
