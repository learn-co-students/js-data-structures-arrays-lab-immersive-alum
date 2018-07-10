// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(val){
  drivers.push(val);
}

function destructivelyPrependDriver(val){
  drivers.unshift(val);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(val){
  return [...drivers, val]
}

function prependDriver(val){
  return [val, ...drivers]
}

function removeLastDriver(){
  return drivers.slice(0,-1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}
