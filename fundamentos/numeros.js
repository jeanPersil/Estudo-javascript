const peso1 = 1.0;
const peso2 = Number("2.0"); // convertendo para numero

console.log(peso1, peso2); // mostrando no console
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2)); // verifica se o numero é inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // fixa em duas casas decimais somente

console.log(typeof media); // verifica o tipo da variavel

const dividir = 10 / 0;

console.log(dividir);
