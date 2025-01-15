const numeros = [5, 6, 7, 8, 10, 15, 15, 20, 21];

function intervaloDeNumero(array) {
  let numeroDentroDoIntervalo = 0;
  let numeroForaDoIntervalo = 0;

  for (numero in array) {
    if (array[numero] >= 10 && array[numero] <= 20) {
      numeroDentroDoIntervalo++;
    } else {
      numeroForaDoIntervalo++;
    }
  }

  console.log(
    `Quantidade de numeros dentro do intervalo: ${numeroDentroDoIntervalo}\nQuantidade de numeros fora do intervalo: ${numeroForaDoIntervalo}`
  );
}

intervaloDeNumero(numeros);
