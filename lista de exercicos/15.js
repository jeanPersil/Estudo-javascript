function compraDeCarros(nomeDoCarro) {
  switch (nomeDoCarro) {
    case "hatch":
      return "Compra efetuada com sucesso!";
      break;
    case "sedans":
    case "motocicletas":
    case "caminhonete":
      return "Tem certeza que não prefere este modelo?";
      break;
    default:
      return "Não trabalhamos com este tipo de modelo";
  }
}

console.log(compraDeCarros("hatch"));
