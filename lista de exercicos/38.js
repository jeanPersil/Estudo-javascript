function valoresImpares(inicio = 0, fim = 100) {
  let guardarValor;

  if (inicio > fim) {
    guardarValor = fim;
    fim = inicio;
    inicio = guardarValor;
  }

  for (i = inicio; i <= fim; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

valoresImpares(500, 100);
