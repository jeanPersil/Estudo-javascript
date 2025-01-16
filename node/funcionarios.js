const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = (funcionarios) => funcionarios.pais === "China";
const mulheres = (funcionarios) => funcionarios.genero === "F";
const menorSalario = (funcionario, funcionarioAtual) => {
  return funcionario.salario > funcionarioAtual
    ? funcionario
    : funcionarioAtual;
};

axios.get(url).then((resposta) => {
  let funcMulher;
  const funcionarios = resposta.data;
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(func);
});
