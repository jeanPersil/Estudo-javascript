const tecnologia = new Map();

tecnologia.set("React", { frameWork: false });
tecnologia.set("angular", { frameWork: true });

console.log(tecnologia.get("angular"));

const chavesVariadas = new Map([
  [function () {}, "função"],
  [{}, "objeto"],
  [123, "Numeros"],
]);

chavesVariadas.forEach((valor, chave) => {
  console.log(chave, valor);
});

console.log(chavesVariadas.has(123)); // indica se a chave esta presente no map

chavesVariadas.delete(123); // faz a exclusao da chave ( se excluiu, retorna false, se não retorna true)

console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); // metodo size indica quaantos lementos esta dentro do map

console.log(chavesVariadas.set(150, "cento e cinquenta"));
console.log(chavesVariadas.set(151, "cento e cinquenta")); // chaves diferentes, valores iguais PODE
console.log(chavesVariadas.set(150, "cento e cinquenta")); // chaves iguais NÃO PODE.
