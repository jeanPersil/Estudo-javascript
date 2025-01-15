const carrinho = [
  '{"nome" : "borracha", "preco": 3.45}',
  '{"nome" : "lapis", "preco": 2.00}',
  '{"nome" : "caderno", "preco": 10}',
];

let soPreco = (array) => {
  return JSON.parse(array[0]);
};

let sera = soPreco(carrinho);

console.log(sera.nome);

carrinho.map((elemento) => {
  novoObjeto = JSON.parse(elemento);
  return console.log(novoObjeto.preco.toFixed(2));
});
