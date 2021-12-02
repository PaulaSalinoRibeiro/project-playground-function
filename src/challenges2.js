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
function triangleCheck() {
  // seu código aqui
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
