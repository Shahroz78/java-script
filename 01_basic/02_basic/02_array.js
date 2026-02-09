const MarvelHeroes = ["Spider-Man", "Iron Man", "Thor", "Black Widow", "Hulk"];
const DCHeroes = ["Batman", "Superman", "Wonder Woman"];
//MarvelHeroes.push("Doctor Strange");
MarvelHeroes.push(DCHeroes); // Adds the entire DCHeroes array as a single element to MarvelHeroes
//console.log(MarvelHeroes); // Output: ["Spider-Man", "Iron Man", "Thor", "Black Widow", "Hulk", "Doctor Strange"]
//console.log(MarvelHeroes);  // Output: ["Spider-Man", "Iron Man", "Thor", "Black Widow", "Hulk", ["Batman", "Superman", "Wonder Woman"]]
//console.log(MarvelHeroes[5][2]); // Output: Wonder Woman (index 2 in the DCHeroes array, which is the 6th element of MarvelHeroes)

//cancatenate operation
const AllHeroes = MarvelHeroes.concat(DCHeroes); // Combines MarvelHeroes and DCHeroes into a new array without modifying the original arrays
console.log(AllHeroes);     // Output: ["Spider-Man", "Iron Man", "Thor", "Black Widow", "Hulk", "Batman", "Superman", "Wonder Woman"]

//spread operator
const AllHeroes2 = [...MarvelHeroes, ...DCHeroes]; // Combines MarvelHeroes and DCHeroes into a new array using the spread operator, which also does not modify the original arrays
//console.log(AllHeroes2);    // Output: ["Spider-Man", "Iron Man", "Thor", "Black Widow", "Hulk", "Batman", "Superman", "Wonder Woman"]

const Another_Array = [1, 2, 3, 4, 5,[6, 7, 8],[9,[10, 11]]];
const realAnotherArray = Another_Array.flat(Infinity);   // Flattens the array to a single level, regardless of how deeply nested it is
console.log(realAnotherArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]   

console.log(Array.isArray("shahroz khan")); // Output: false
console.log(Array.from("shahroz khan")); // Output: ["s", "h", "a", "h", "r", "o", "z", " ", "k", "h", "a", "n"]
console.log(Array.from({name: "shahroz khan"})); // Output: [] (since it's not iterable) //intresting keys or values to construct an array

let score1 = 100;
let score2 = 200;
let score3 = 300;   

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300] (creates a new array with the provided arguments as elements) 



