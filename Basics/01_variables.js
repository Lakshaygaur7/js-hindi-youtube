const accountId=13345   // It will be used storing fixed value that cannot be chaountPasswordnged as well
let accountEmail="lakshay@gmail.com" // It will preserve the scope so it is rrecommended to use.
var accountPassword="12345" // Because of scope if we multiple names it will change the all of them.
accountCity="Jaipur"
let accountState;
//let accountEmail;// Cannot be redeclared with same identifier

//accountId=7899  // Not allowed

accountEmail="lg@gmail.com"
accountPassword="676767676"
accountCity="delhi"
console.log(accountId)

/*
 Prefer not to use var 
 Because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState,])