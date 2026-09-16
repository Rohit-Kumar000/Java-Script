// IF

//Syntax

// if(condition){
//     //some code
// }

// if(true){

// }
// if(false){

// }

// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log("Rohit");
    
// }

// if (3 != 2){
//     console.log("Hello World!");
    
// }

// if(2 == "2"){                    // == it means equal to 
//     console.log("Executed");
    
// }

// if(2 === "2"){                   // === it means datatypes check
//     console.log();
    
// }

// const temperature = 40;

// if(temperature <= 40){
//     console.log(`less than ${temperature}`);
    
// }

// const score = 100;

// if(score > 100){
//     let power = "fly";
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);

// const rupees = 1000;

// if(rupees < 200) console.log("true");
// else if(rupees > 200) console.log("flase");

// const rupees = 1000;

// if(rupees < 500){
//     console.log("less than 500");
    
// } else if(rupees < 750){
//     console.log("less than 750");
    
// }else if(rupees < 300){
//     console.log("less than 300");
    
// }else {
//     console.log("Greater than 1000");
    
// }
    

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isLoggedIn && debitCard){
    console.log("User purchase");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
    
}