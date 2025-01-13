const pessoa = {
  nome: "Ana",
  idade: 5,
  endereço: {
    logradouro: "Rua ABC",
    numero: 50,
  },
};

const { nome: n, idade: i } = pessoa;

console.log(n);
console.log(i);

const {
  endereço: { logradouro, numero },
} = pessoa;

console.log(logradouro, numero);
