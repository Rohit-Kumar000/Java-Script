// var c = 200;

// let a = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("Inner: ", a);
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Rohit";

    function two(){
        const website = "Insta";
        console.log(username);
    }
    // console.log(website);

    // two();
}

// one();

if(true){
    const username = "rohit";
    if(username === "rohit"){
        const website = "Insta";
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ********************** Interesting ************************** //

console.log(addone(5));

function addone(num){
    return num +1;
}

// console.log(addtwo(3));
const addtwo = function(num){
    return num + 2;
}
