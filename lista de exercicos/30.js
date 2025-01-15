const numero = [5, 10, 20, 30, 40, 9, 30, 30, 40];

function maiorNumero(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let menorNumero = arrayDeNumeros[0];
  for (i in arrayDeNumeros) {
    if (arrayDeNumeros[i] > maiorNumero) {
      maiorNumero = arrayDeNumeros[i];
    }
    if (arrayDeNumeros[i] < menorNumero) {
      menorNumero = arrayDeNumeros[i];
    }
  }

  return `Maior numero: ${maiorNumero}\nmenor Numero: ${menorNumero}`;
}

console.log(maiorNumero(numero));
