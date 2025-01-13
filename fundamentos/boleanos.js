let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(!!isAtivo);

// ! é a porta logica de negação, então se o valor for true ira virar false

// !! mostra o valor boleano da expressao

isAtivo = 5;
console.log(!!isAtivo);

console.log("Os verdadeiros...");
console.log(!!true);
console.log(!!3);
console.log(!!-2);
console.log(!!"texto");
console.log(!!Infinity);
console.log(!!(isAtivo = 15));

console.log("Os falsos...");
console.log(!!false);
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

let nome = "Jean Lucas";

console.log(nome || "Não tem nome nenhum");

isAtivo = false;

if (!!isAtivo) {
  console.log("ta negativo");
}
