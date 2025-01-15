const numeros = [-1, -2, -3, 1, 2, 3];

function VerificarNumerosNegativos(array) {
  let numerosNegativos = 0;

  for (i in array) {
    if (array[i] < 0) {
      numerosNegativos++;
    }
  }
  return `Quantidade de numeros negativos ${numerosNegativos}`;
}

console.log(VerificarNumerosNegativos(numeros));
