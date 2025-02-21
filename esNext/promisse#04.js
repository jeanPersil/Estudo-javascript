function gerarNumero(min = 0, max = 100) {
  if (min > max) {
    const [min, max] = [max, min];
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    resolve(aleatorio);
  });
}

gerarNumero(5, 10)
  .then((numero) => {
    console.log(numero);
  })
  .then((x) => gerarNumero(x))
  .then((x) => console.log(x));
