// usando notacao literal

const obj1 = {};

console.log(obj1);

// funcao construtora
function Produto(nome, preco, desc) {
  (this.nome = nome),
    (this.getPrecoComDesconto = () => {
      return preco * (1 - desc);
    });
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Nootbook", 1500, 0.25);

console.log(
  p1.getPrecoComDesconto().toFixed(2),
  p2.getPrecoComDesconto().toFixed(2)
);

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("Jean", 1400, 0);
const f2 = criarFuncionario("Andre", 1400, 10);

console.log(`Jean: ${f1.getSalario()}`);
console.log(`Andre: ${f2.getSalario()}`);
