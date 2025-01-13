function criarPessoa() {
  return {
    nome: "Jean",
    sobreNome: "Silva",
  };
}

function criarProduto(nome = "Desconhecido", preco = "Desconhecido") {
  return {
    nome,
    preco,
  };
}

console.log(criarProduto("Copo plastico", 50));
