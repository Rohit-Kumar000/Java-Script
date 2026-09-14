// Primitive

// 7 types of Primitive

const name = "Rohit";                   // String
const score = 100;                      // Number
const isLoggedIn = false;               // Boolean
const Temperature = null;               // Null
let State;                              // Undefined
const id = Symbol('123');               // Symbol
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 3412412412443n;       // BigInt


// Reference (Non primitive)

const heroes = ["Shaktiman", "Nagraj", "Doga"];     // Arrays

const actor = {                                     // Object
    name: "Akshay Kumar",
    age: 32,
    state: "Mumbai",
    isActive: false,
}

const myFunction = function(){                      // Function
    console.log("Hello World");
}

// console.log((typeof heroes));



// **************************** Memories **************************** //

// Stack (Primitive) => Copy , Heap (Non Primitive) => Reference

let myYoutubename = "rohitkumardotcom";
let anotherName = myYoutubename;
anotherName = "newyoutubedotcom"

// console.log(myYoutubename);
// console.log(anotherName);

let userone = {
    emai: "user@gmail.com",
    upiid: "user32@ibl"
}

let usertwo = userone;

usertwo.email = "new@gmai.com";

console.log(userone.email);
console.log(usertwo.email);
