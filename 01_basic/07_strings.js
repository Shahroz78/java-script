const Name = "shahroz khan"
const repoCount = 50
//console.log( Name + repoCount + " value" );
//console.log(`My name is ${Name} and my  repoCount is ${repoCount}`);

const GameName = new String("sheriii-hs-com")
//console.log(GameName.length);
//console.log(GameName[3]);
//console.log(GameName.toUpperCase());
//console.log(GameName.charAt(3));
//console.log(GameName.indexOf('r')); 
const NewString = GameName.substring(0,4);
//console.log(NewString);

const anotherString = GameName.slice(0,7);
//console.log(anotherString);

const newStringOne = "     shahroz khan    "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://sheriii.com/shahroz%20khan"
//console.log(url.replace('%20', '-'));
//console.log(url.includes('sheriii'));
//console.log(url.includes('sundermills'));

//console.log(GameName.split('-',2));
//console.log(GameName.split('',12));
const Mood = "happy!"
//console.log(`I feel ${Mood.repeat(3)}`);//
//const sentence = "The quick brown fox jumps over the lazy dog.";

//let index = 5;

//console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

//index = -4;

//console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

//atcharcode.()

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);