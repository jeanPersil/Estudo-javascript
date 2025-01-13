//funcao anonima

const imprimirSoma = function (a, b) {
  // a variavel armazena a funcao e dessa forma não precisamos declarar um nome para a funcao
  console.log(a + b);
};

imprimirSoma(5, 5);

const soma = (a, b) => {
  // a seta substitui o nome function, é uma funcao ARROW
  return a + b;
};

console.log(soma(2, 3));

//retorno implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(5, 1));


