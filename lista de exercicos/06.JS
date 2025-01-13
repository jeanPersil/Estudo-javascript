function juroSimples(capitaoInicial, taxaDeJuros, tempoDeAplicacao) {
  const mont = capitaoInicial * (1 + taxaDeJuros * tempoDeAplicacao);
  return mont.toFixed(2);
}

function jurosCompostos(capitaoInicial, taxaDeJuros, tempoDeAplicacao) {
  const mont = capitaoInicial * (1 + taxaDeJuros) ** tempoDeAplicacao;
  return mont.toFixed(2);
}

console.log(`Juros simples: ${juroSimples(1000, 0.05, 12)}`);
console.log(`Juros compostos: ${jurosCompostos(1000, 0.05, 12)}`);
