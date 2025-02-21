//estrutura de conjunto SET

const { set } = require("lodash");

const time = new Set();

time.add("Vasco");
time.add("São paulo").add("palmeiras ");

time.add("flamengo");
time.add("Vasco"); // não vai add por ser uma estrutura repetida

console.log(time);
console.log(time.has("Vasco"));

// Também é possivel colocar um array dentro do set !

const nomes = ["Jean", "Lucas", "Pereira"];

const nomesSet = new Set(nomes);

console.log(nomesSet);
