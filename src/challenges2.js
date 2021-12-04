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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
