// let score = "33abc"
// console.log(typeof score);
// let valueInNumber = Number(score) // Number will convert string type into number type
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // but if we put some characters in string like "33abc" then it will convert the type into 
// number type but it does not mean that if we print the output of "33abc" it will show 33 , it will show NaN(Not a Number).
// so don't rely on numbers
// same  goes for undefined
// and for null it shows 0
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Kashish" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(typeof stringNumber);

