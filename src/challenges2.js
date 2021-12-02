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
function generatePhoneNumber() {
  // seu código aqui
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
