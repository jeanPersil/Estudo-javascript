function diaUtil(dia) {
  switch (dia) {
    case 1:
      return "Domingo não é um dia util";
      break;
    case 2:
      return "Segunda é um dia util";
      break;
    case 3:
      return "Terça é um dia util";
      break;
    case 4:
      return "Quarta é um dia util";
      break;
    case 5:
      return "Quinta é um dia util";
      break;
    case 6:
      return "Sexta é um dia util";
      break;
    case 7:
      return "Sabado é um dia util";
      break;
    default:
      return "Dia invalido!";
      break;
  }
}

console.log(diaUtil(1));
