function fatorial(numero) {
  if (numero < 0) {
    return "não é possivel ter o fatorial de um numero negativo";
  }

  let fat = 1;
  for (i = numero; i > 0; i--) {
    fat *= i;
  }
  return fat;
}

console.log(fatorial(-1));
