// operador ... rest(juntar) spread (espalhar)

// usando spread em um objeto

const funcionario = { nome: "jean", salario: 0 };

const clone = { ativo: true, ...funcionario };

console.log(clone);

// usando em um array

const array = ["Lucas", "Jean"];

const grupoFinal = ["Pereira", "Silva", ...array]; 

console.log(grupoFinal);
