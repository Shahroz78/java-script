// dates
let myDate = new Date();
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(typeof myDate);

// date is an object
//month is 0 based index
//let mycreatedDate = new Date(2023,0,23);
//let mycreatedDate = new Date(2023,0,23,5,45,23);
let mycreatedDate = new Date("2023-01-23T05:45:23");
//console.log(mycreatedDate.toLocaleString());
//console.log(mycreatedDate.toDateString());

//timestamp
let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(mycreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

//day or sepcific date
let newDate = new Date();
//console.log(newDate.getDate());
//console.log(newDate.getMonth() + 1); // Adding 1 because months are 0-indexed
//console.log(newDate.getFullYear());


//` ${newDate.getHours() and the time is ${newDate.getMinutes()} and the seconds is ${newDate.getSeconds()}`);
console.log(newDate.toLocaleString('Default', {

    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}));