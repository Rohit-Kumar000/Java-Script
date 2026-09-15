function Collegename(){
    console.log("M");
    console.log("O");
    console.log("D");
    console.log("E");
    console.log("R");
    console.log("N");
}

// Collegename();      // Print

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);   
// }

// addTwoNumbers(23,43);

function addTwoNumbers(num1, num2){
    //  let result = num1 + num2
    //  return result  
    return num1 + num2
}

const result = addTwoNumbers(3,4);

// console.log("Results: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return '${username} just logged in'
}

// console.log(loginUserMessage(""));

function CalculateCartPrice(...num1){           // ... rest operator
    return num1;
}

// console.log(CalculateCartPrice(200, 400, 600));

const user = {
    username: "Amit",
    price: 233
}

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user);
handleObject({
    username: "Aman",
    price: 234
})

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,500,600]));

