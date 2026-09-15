// singleton
// Object.create        Constructor Method
// Object Literals

const mySym = Symbol("myKey1");

// const User = {
//     name: "Rohit",      // String
//     "full name": "Rohit kumar",
//     [mySym]: "myKey1",       // Symbol
//     age: 22,            // Number
//     location: "Tundla",  // String
//     email: "rohitk50798@gmail.com",     // String
//     isLoggedIn: false,      // Boolean
//     lastLoginDays: ["Monday", "Tuesday"]        // Array
// }

// console.log(User.name);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[mySym]);
// console.log(typeof User[mySym]);

// User.email = "rohit@gmail,com"      // value change
// Object.freeze(User);        // Freeze Value
// User.email = "r@gmail.com";
// console.log(User);

// User.greeting = function(){
//     console.log("Hello Rohit");
// }

// User.greeting2 = function(){
//     console.log(`Hello User ${this["full name"]}`);
// }

// console.log(User.greeting());
// console.log(User.greeting2());

// const tinderUser = new Object();        // Singleton Object
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Harry";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const College = {
    userid: 24,
    username: {
        userfullname: {
            userfirstname: "Rohit",
            userlastname: "kumar"
        }
    }
}

// console.log(College.username.userfullname.userfirstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = Object.assign({},obj1,obj2,obj4);
// const obj3 = {...obj1,...obj2,...obj4}      // Spread Method

// console.log(obj3);

const Users = [
    {
        userid: 231,
        useremail: "user1@gmail.com",
    },
    {
        userid: 232,
        useremail: "user2@gmail.com",
    },
    {
        userid: 233,
        useremail: "user3@gmail.com",
    }
]

Users[1].useremail
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));