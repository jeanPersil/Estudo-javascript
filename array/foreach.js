const lista = ["Jean", "Lucas", "Leandro", "Alessandro"];

lista.forEach((nome, index) => {
  return console.log(`${index + 1}) ${nome}`);
});

// lista.forEach(nome, index, array); todo forEach tem 3 PARAMETROS sendo eles o VALOR, INDEX e o proprio ARRAY

let exibirNomes = (nome, index) => console.log(`${index + 1}) ${nome}`);

lista.forEach(exibirNomes); // é possivel também ter uma funcao separada e chamar no for each. 


// for each é um metodo que faz uma ação com cada elemento do array.
