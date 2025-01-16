const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica"); // caso o objeto ja tenha sido criado, a ira retornar a instancia do objeto, o valor que ja esta nela

const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")(); // criando novos objeto

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor);
console.log(contadorB.valor);

contadorC.incrementar();
console.log(`C: ${contadorC.valor}`);
console.log(`D: ${contadorD.valor}`);
