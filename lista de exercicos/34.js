const nome = "jean";
const nome2 = "J4AN";

function compararNomes(nome1, nome2) {
  primeiroNome = nome1.toLowerCase().split("");
  SegundoNome = nome2.toLowerCase().split("");

  if (primeiroNome.length !== SegundoNome.length) {
    return false;
  } else {
    for (i in primeiroNome) {
      if (primeiroNome[i] !== SegundoNome[i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(compararNomes(nome, nome2));
