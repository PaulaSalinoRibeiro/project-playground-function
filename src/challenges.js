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
function footballPoints(wins, ties) {
  let scorre = 3*wins + 1*ties;
  return scorre;
}
// Desafio 6
function highestCount(arr) {
  // Find the highest number
  let num = arr[0];
  for(let index = 0; index < arr.length; index += 1){
    if(arr[index] > num){
      num = arr[index];
    }
  }
  // count
  let count = 0;
  for(let index = 0; index < arr.length; index += 1){
    if(arr[index] === num){
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1PickUpMouse = Math.abs(mouse - cat1);
  let cat2PickUpMouse = Math.abs(mouse - cat2);
  if(cat1PickUpMouse < cat2PickUpMouse){
    return 'cat1';
  } else if( cat2PickUpMouse < cat1PickUpMouse){
    return 'cat2';
  } else{
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(arr) {

  let fizzBuzz = [];
  
  for(let index = 0; index < arr.length; index += 1){

    if(arr[index] % 3 !== 0 && arr[index] % 5 !== 0){
      fizzBuzz.push("bug!");
      
    } else if(arr[index] % 3 === 0 && arr[index] % 5 === 0){
      fizzBuzz.push("fizzBuzz");
      
    } else if(arr[index] % 3 === 0){
      fizzBuzz.push("fizz");
      
    } else if(arr[index] % 5 === 0){
      fizzBuzz.push("buzz");
      
    }
  }

  return fizzBuzz;
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
