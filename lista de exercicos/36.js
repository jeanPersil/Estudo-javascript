const vetor1 = [2, 3, 4, 10, 5, 6, 8, 2];

function funcao1(array, multiplicador) {
  let vetorNovosElementos = [];
  array.forEach((element) => {
    vetorNovosElementos.push(element * multiplicador);
  });

  return vetorNovosElementos;
}

function funcao2(array, multiplicador) {
  let vetorNovosElementos = [];
  array.forEach((element) => {
    if (element > 5) {
      vetorNovosElementos.push(element * multiplicador);
    }
  });
  return vetorNovosElementos;
}

console.log(
  `Funcao 01, sem restricao do numero ser maior que 5: ${funcao1(vetor1, 2)}`
);

console.log(
  `Funcao 02, com restricao do numero ser maior que 5: ${funcao2(vetor1, 2)}`
);
