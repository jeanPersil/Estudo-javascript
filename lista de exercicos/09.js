function sistemaDeNotas(notaDeUmAluno) {
  let notaCorrigida = arredondar(notaDeUmAluno);

  if (notaCorrigida >= 40) {
    console.log(`Aprovado com a nota ${notaCorrigida}`);
  } else {
    console.log(`Reprovado com a nota ${notaCorrigida}`);
  }
}

function arredondar(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5));
  } else {
    return nota;
  }
}
sistemaDeNotas(40);
