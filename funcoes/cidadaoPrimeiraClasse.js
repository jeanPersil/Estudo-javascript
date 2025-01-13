const somar = (n1, n2) => n1 + n2;

function resultado(n1, n2, somar) {
  // passando funcao como parametro
  const res = somar(n1, n2);

  console.log("O a soma dos numeros é: ", res);
}

resultado(5, 5, somar);

function saudacao() {
  return "Ola mundo";
}

let array = [
  saudacao,
  function () {
    return "funcao anonima";
  },
]; // colocando funcao em um array

console.log(array[0]());

const obj = {};

obj.funct = function () {
  return "armazenando em um atributo"; // armazenando uma funcao, dentro de um atributo
};

console.log(obj.funct());


