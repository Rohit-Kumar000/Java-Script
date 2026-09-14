const name = "Rohit";
const repoCount = 1;

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);        // String Interpulation

const gameName = new String('Rohit-Game');
// console.log(gameName);
// console.log(gameName[1]);               // String Count Name
// console.log(gameName.__proto__);        // .__proto__

// console.log(gameName.length);           // length
// console.log(gameName.toUpperCase());    // UpperCase
// console.log(gameName.charAt(4));        // Show Character which position of Numbers
// console.log(gameName.indexOf('t'));     // Show Number which position of Character

const newGameName = gameName.substring(0 , 5);
// console.log(newGameName);

const anotherGameName = gameName.slice(0 , 4);
// console.log(anotherGameName);

const newStringOne = "   Rohit   " ;
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://rohit.com/rohit%20kumar";
// console.log(url.replace('%20' , '-'));
// console.log(url.includes('rohit'));

console.log(gameName.split('-'));
