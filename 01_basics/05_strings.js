let name = "Kashish";
let repoCount = 50;
console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String(`Chessboard-kashish-game`);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

// slicing

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString= gameName.slice(-10,4);

console.log(anotherString);

const newString1 = "  Kashish      ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://kashish.com/kashish%20mittal"

console.log(url.replace('%20', '-'));

console.log(url.includes('kritika'));
console.log(url.includes('kashish'));

//split
console.log(gameName.split('-'));


