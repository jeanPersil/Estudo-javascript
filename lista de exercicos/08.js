function compararValores(anotacoes) {
  let listaDeAnotacoes = anotacoes.split(", ");
  let maiorPontuacao = parseInt(listaDeAnotacoes[0]);
  let bateuRecorde = 0;
  let piorJogo = 0;
  let piorPontuacao = parseInt(listaDeAnotacoes[0]);

  for (let i = 0; i < listaDeAnotacoes.length; i++) {
    if (parseInt(listaDeAnotacoes[i]) > maiorPontuacao) {
      maiorPontuacao = parseInt(listaDeAnotacoes[i]);
      bateuRecorde++;
    }

    if (parseInt(listaDeAnotacoes[i]) < piorPontuacao) {
      piorPontuacao = listaDeAnotacoes[i];
      piorJogo = i + 1;
    }
  }
  return [bateuRecorde, piorJogo];
}

const anotacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1";

console.log(compararValores(anotacoes));
