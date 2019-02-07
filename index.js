//katzDeli is empty array
//var katzDeliLine = [];
//katzDeli is empty array
// hoisting: var vs let
var katzDeliLine = [];



let number = 0
function takeANumber(katzDeli){
number = number + 1
 katzDeli.push(number);
 return(`Welcome, you are number ${number}`);
 
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}


function currentLine(katzDeli) {
  var empty = [];
  let i = 0;
  while (i < katzDeli.length) {
    empty.push(` `+ (i+1) +`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + empty);
}

console.log(currentLine(["Zach", "Steven", "Aspen"]))
console.log(currentLine(["David", "Cody", "Erin"]))


