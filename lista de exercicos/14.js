function feira(fruta) {
  switch (fruta) {
    case "maçã":
      return "Não vendemos esta fruta aqui";
      break;
    case "kiwi":
      return "Estamos com escassez de kiwis";
      break;
    case "melancia":
      return "Aqui esta, são 3 reais o quilo";
      break;
    default:
      return "Error";
  }
}

console.log(feira("melanci"));
