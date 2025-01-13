function anoBissexto(ano) {
  if (ano % 4 === 0) {
    console.log(`O ano: ${ano} é bissexto.`);
  } else if (ano % 400 === 0) {
    console.log(`O ano: ${ano} é bissexto.`);
  } else {
    console.log("O seu ano não é bissexto");
  }
}

anoBissexto(2032);
