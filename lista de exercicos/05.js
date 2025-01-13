function retorno(n1, n2) {
  const soma = n1 + n2;
  const resultado = soma.toFixed(2).replace(".", ",");
  return console.log(`Resultado é: R$ ${resultado}`);
}

retorno(0.2, 0.1);
