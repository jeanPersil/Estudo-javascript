function aumento(plano, salario) {
  let aumento = 0;
  switch (plano) {
    case "A":
      aumento = salario * (10 / 100);
      return `Salario: ${salario} | Aumento : ${aumento} | Salario atual ${
        salario + aumento
      }`;
      break;
    case "B":
      aumento = salario * (15 / 100);
      return `Salario: ${salario} | Aumento : ${aumento} | Salario atual ${
        salario + aumento
      }`;
      break;
    case "C":
      aumento = salario * (20 / 100);
      return `Salario: ${salario} | Aumento : ${aumento} | Salario atual ${
        salario + aumento
      }`;
      break;
    default:
      "Plano invalidos";
  }
}

console.log(aumento("C", 1400));
