const result = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}

//Reescrevendo essa função em arrow function

const result = (a, b) => myFunction;

(a, b) => myFunction;

console.log(myFunction);


// ------------------------------- EXEMPLO OBJETOS------------------------------------------
const iza = {
  nome: 'Iza',
  idade: 1,
  casdrado:true,
  cor: ['branco', 'preto'],
  caracteristicas: ['fofinha', 'sociável'],
}

const beyonce = {
      nome: 'Beoynce',
      idade: 1,
      casdrado:true,
      cor: ['branco', 'marrom', 'dourado', 'preto'],
      caracteristicas: ['brincalhão', 'dengoso'],
  }

  console.log(beyonce.caracteristicas);

  //console.log(iza["nome"]);

  //console.log(iza.nome, beyonce.nome);

 // dot notation console.log(iza["caracteristicas"][0], beyonce["cor"]);