const accountId = 122;
let accountEmail = "rohitk50798@gmail.com";
var accountPassword = "Rohit@12";
accountCity = "Tundla";
let accountState;

// accountId = 145; // not allowed

accountEmail = "rohitbhai283204@gmail.com";
accountPassword = 432;
accountCity = "Agra";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);