function calculadora(n1, op, n2) {
  switch (op) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;
      break;

    case "*":
      return n1 * n2;
      break;
    case "/":
      if (n2 === 0) {
        return "Não é possivel dividir por 0";
      }
      return n1 / n2;
      break;
    default:
      return "operacao invalida";
  }
}

console.log(calculadora(5, "/", 2));
console.log(calculadora(5, "+", 2));
console.log(calculadora(5, "-", 2));
console.log(calculadora(5, "*", 2));
