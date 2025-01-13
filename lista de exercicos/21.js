function planoDeSaude(idade) {
  if (idade < 10) {
    return "O valor para crianças abaixo de 10 anos é de: R$80";
  } else if (idade >= 10 && idade <= 30) {
    return "Conveniados com idade entre 10 e 30 anos pagam: R$50";
  } else if (idade >= 30 && idade <= 60) {
    return "Conveniados com idade entre 30 e 60 anos pagam: R$ 95";
  } else if (idade > 60) {
    return "Conveniados acima de 60 anos pagam: R$ 130";
  }
}

console.log(planoDeSaude(29));
