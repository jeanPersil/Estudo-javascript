function somar() {
  res = 0;
  for (i in arguments) {
    res += arguments[i];
  }
  console.log(`Resultado final: ${res}`)
}



somar(5,5,5,5);
