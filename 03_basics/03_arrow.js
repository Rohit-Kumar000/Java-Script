const user = {
    username: "Rohit",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "sammy";
// user.welcomeMessage();

// function website(){
//     let username = "Rohit";
//     console.log(this.username);
    
// }
// website();

// const website = function(){
//     let username = "Rohit";
//     console.log(this.username);
    
// }
// website();

// const website = () => {
//     let username = "Rohit";
//     console.log(this);
    
// }
// website();

// const addtwo = (num1 , num2) => {
//     return num1 + num2;
// }

// const addtwo = (num1 , num2) => num1 + num2;

const addtwo = (num1 , num2) => (num1 + num2);


console.log(addtwo(34,54));