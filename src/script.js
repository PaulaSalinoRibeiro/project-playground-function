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
function encode(str) {

  let encode = '';

  for(let letters of str){

    if(letters === "a"){
      encode += "1";
    } else if (letters === "e"){
      encode += "2";
    } else if (letters === "i"){
      encode += "3";
    } else if (letters === "o"){
      encode += "4";
    } else if (letters === "u"){
      encode += "5";
    } else{
      encode += letters;
    }
  }
  return encode 
}

function decode(str) {

  let decode = '';

  for(let letters of str){

    if(letters === "1"){
      decode += "a";
    } else if (letters === "2"){
      decode += "e";
    } else if (letters === "3"){
      decode += "i";
    } else if (letters === "4"){
      decode += "o";
    } else if (letters === "5"){
      decode += "u";
    } else{
      decode += letters;
    }
  }
  
  return decode 
}
// Desafio 10
function techList(arr, name) {
  let orderArr = arr.sort();
  let list = {techs:[]}  
   for (let index of orderArr){
    list.techs.push( { tech: index, 
                       name: name});
   } 
  if(orderArr.length > 0){
    return list.techs;
  }
    return "Vazio!"
}
// Desafio 11
function generatePhoneNumber(arr) {
  let count;
  let phoneNumber = '';
  if(arr.length !== 11){
      return "Array com tamanho incorreto."
  }
  for(let num1 of arr){
      if(num1 < 0 || num1 > 9){
          return "não é possível gerar um número de telefone com esses valores"
      }
  }
  for(let index = 0; index < arr.length; index +=1){
      if(count >= 3){
        break;
      }
      count = 0;
      for(i = 0; i < arr.length; i += 1){
          if(arr[index] === arr[i]){
              count += 1;
          }
      }
  }
  if( count >= 3){
      return "não é possível gerar um número de telefone com esses valores"
  } else {
      phoneNumber += '(' + arr[0] + arr[1] + ')' + ' ' + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + '-' + arr[7] + arr[8] + arr[9] + arr[10]
  }
  return phoneNumber  
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAB = Math.abs(lineA - lineB);
  let lineAC = Math.abs(lineA - lineC);
  let lineBC = Math.abs(lineB - lineC);
    if(lineA < (lineB + lineC) && lineA > lineBC){
      return true;
    } else if(lineB < (lineA + lineC) && lineB > lineAC){
      return true;
    }else if(lineC < (lineA + lineB) && lineC > lineAB){
      return true;
    } else {
      return false;
    }
}
// Desafio 13
function hydrate(str) {
  let numb = str.match(/\d+/g).map(Number) // ref.:codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  let count = 0;
  for(let num of numb){
    count += num;
  }
  if(count === 1){
    return count.toString() + ' copo de água';
  } else{
    return count.toString() + ' copos de água';
  }
}

