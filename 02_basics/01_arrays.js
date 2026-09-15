// Arrays

const myArr = [1,2,3,4,5];

const myHeroes = ["Spiderman", "Ironman", "Thor"];
const myArr2 = new Array(1,2,3,4);

// console.log(myArr);
// console.log(myArr[2]);
// console.log(typeof myArr2);

// Array Methods

// myArr.push(9);      // add to the end
// myArr.pop();        // delete to the end

// myArr.unshift(0);       // add to the start
// myArr.shift();          // delete to the start
// console.log(myArr);

// console.log(myArr.includes(10));        
// console.log(myArr.indexOf(2));

// const newArr = myArr.join();        // change type

// console.log(myArr);
// console.log(newArr);        

// console.log("A", myArr);

// const mynew1 = myArr.slice(1,3);
// console.log(mynew1);

// console.log("B", myArr);

// const mynew2 = myArr.splice(1,4);
// console.log("C", myArr);

// console.log(mynew2);

const marvelHeroes = ["Thor", "IronMan", "SpiderMan"];
const dcHeroes = ["Flash", "AntMan", "BatMan"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes];        // Spred the Values means break the value 
// console.log(allNewHeroes);

const anotherArr = [1,2,3,[4,5,6],7,8,[9,[10]]];
const realAnotherArr = anotherArr.flat(Infinity);

// console.log(realAnotherArr);

// console.log(Array.isArray("Rohit"));
// console.log(Array.from("Rohit"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
