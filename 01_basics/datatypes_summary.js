// Primitive
// 7 types-> Number,string, boolean, null, undefined, Symbol, BigInt

//Reference(Non primitive)
//  objects, Arrays,Functions

const heroes  =["shaktiman", "dogo","powerrangers"]
let myObj={
    name:"kashish",
    age: 20,

}
const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof myFunction);

// Stack and  Heap memory
// Stack -> Primitive
// heap ->  Non Primitive

// example  for stack
let user = "Kashish"
let newUser = user;
newUser  =  "Kashish Mittal"
// console.log(user);
// console.log(newUser);

// example for heap
let user1 = {
    email : "myemail.com",
}
let  user2 =  user1;
user2.email= "tiyakashish5@gmail.com";

console.log(user1.email);
console.log(user2.email);

