// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}
function destructivelyRemoveLastCat() {
  cats.pop();
}

let randomArray = [];
function appendCat(name) {
  randomArray = cats.slice();
  randomArray.push(name);
  return randomArray;
}
function prependCat(name) {
  randomArray = cats.slice();
  randomArray.unshift(name);
  return randomArray;
}
function removeLastCat() {
  randomArray = cats.slice();
  randomArray.pop();
  return randomArray;
}
function removeFirstCat() {
  randomArray = cats.slice();
  randomArray.shift();
  return randomArray;
}

destructivelyAppendCat("Ralph");
destructivelyPrependCat("Bob");
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat("Broom");
prependCat("Arnold");
removeLastCat();
removeFirstCat();

console.log(cats);
