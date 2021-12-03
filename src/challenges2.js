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

// check arr.length > 11
// check if any number is negative or highest then 9
// check if any number repet more that 3 times
// imprim number with (12) 34567-8901
  
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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
