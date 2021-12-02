// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 === true && boolean2 === true){
    return true;
  } 
    return false;
  
}

// Desafio 2
function calcArea(base, height) {
  let calcArea = (base*height)/2
  return calcArea;
}

// Desafio 3
function splitSentence(str) { 
  let splitStc = str.split(' ');
  return splitStc;
}

// Desafio 4
function concatName(arr) {

  let last = arr[arr.length - 1];
  let first = arr[0];
  let concat = last + ', ' + first;

  return concat;

}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
