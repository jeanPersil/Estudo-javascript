const numeros = [2, 4, 6, 1, 7, 13];

function verificar(numeros) {
  numerosImpares = 0;
  numerosPares = 0;

  for (let i in numeros) {
    if (numeros[i] % 2 === 0) {
      numerosPares++;
    } else {
      numerosImpares++;
    }
  }
  return `Numeros pares : ${numerosPares} / Numeros Impares: ${numerosImpares}`;
}

console.log(verificar(numeros));
