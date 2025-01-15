const numeros = [2, 3, 3, 5, 7, 10];

function MediaAritimetica(array) {
  let somaDosNumeros = 0;
  let mediaAri = 0;
  for (i in array) {
    somaDosNumeros += array[i];
  }

  mediaAri = somaDosNumeros / array.length;

  return `Media Aritimetica: ${mediaAri}`;
}

console.log(MediaAritimetica(numeros));
