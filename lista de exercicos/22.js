function anuidade(mesPagamento, valorParaSerPago) {
  let valorPago = 0;
  if (mesPagamento === 1) {
    valorPago = valorParaSerPago;
    return `Valor pago: ${valorPago}`;
  }

  valorPago = valorParaSerPago * (1 + 5 / 100) ** mesPagamento;

  return `Valor pago com JUROS: ${valorPago}`;
}

console.log(anuidade(2, 600));
