function getpreco(imposto = 0, moeda = "R$") {
  return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Nootbook",
  preco: 4000,
  desc: 0.15,
  getpreco,
};

console.log(produto.getpreco());

const carro = {
  preco: 5000,
  desc: 0.2,
};

console.log(getpreco.call(carro));
console.log(getpreco.apply(carro));

console.log(getpreco.call(carro, 0.1, "$"));
console.log(getpreco.apply(carro, [0.2, "%"]));
