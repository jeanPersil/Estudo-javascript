const fornecedores = ["Jean", "Alan", "Roberto", "Mailson"];

function mostrarFornecedores(nome, indice) {
  console.log(`Indice: ${indice + 1} | ${nome}`);
}

fornecedores.forEach(mostrarFornecedores);
