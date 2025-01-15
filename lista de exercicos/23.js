function mediaAluno(codigoDoAluno, n1, n2, n3) {
  const media = (n1 + n2 + n3) / 3;

  let aprovado = media >= 5 ? "APROVADO" : "REPROVADO";

  return `
    Codigo do aluno: ${codigoDoAluno}
    nota1: ${n1} 
    nota2: ${n2}
    nota3: ${n3}
    Media total : ${media.toFixed(2)}
    Status : ${aprovado}
    `;
}

console.log(mediaAluno(333, 5, 4, 4));
