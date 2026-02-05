//========++++++++++++(Numbers)++++++++++++===========//
const score = 100;
//console.log(score);

const balance = new Number(100);
//console.log(balance);
//console.log(balance.toString().length);
// ecomerce website use to prcise value
//console.log(balance.toFixed(2));

const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//=======++++++++++++(Maths)+++++++++++++++++++=========//

//console.log(Math);
//absolute just for neg value to convert positive value
//console.log(Math.abs(-4));
//console.log(Math.round(2.3));
//console.log(Math.ceil(2.3));
//console.log(Math.floor(2.3));
//console.log(Math.sqrt(25));
//console.log(Math.pow(2344));
//console.log(Math.max(2,3,4,7,9));
//console.log(Math.min(2,3,4,7,9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min);