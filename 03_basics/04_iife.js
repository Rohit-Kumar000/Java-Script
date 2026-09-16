// Immediately Invoked Function Expressions (IIFE)

(function one(){                // Function
    console.log("hello");
    
})();

// (() => {                        // Arrow Function
//     console.log("Hello World!");
    
// })()

((name) => {                        // Arrow Function
    console.log(`Hello! ${name}`);
    
})("Rohit")