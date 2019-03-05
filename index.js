var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  return kittens.concat(name);
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeFirstKitten(){
  return kittens.slice(1);
}

function removeLastKitten(){
  return kittens.slice()
}