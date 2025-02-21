// criacao de promessa

const { result, reject } = require("lodash");
const { resolve } = require("path");

const minhaPromessa = new Promise((resolve, reject) => {
  const nome = "Jean";

  if (nome === "Jean") {
    resolve("usuario foi encontrado");
  } else {
    reject("usuario não encontrado");
  }
});

minhaPromessa
  .then((resultado) => resultado.toUpperCase())
  .then((resultado) => console.log(resultado))
  .catch((e) => console.log(e));

// resolver varias promessas

const p1 = new Promise((resolve, reject) => {
  resolve("p1 ok");
});
const p2 = new Promise((resolve, reject) => {
  resolve("p2 ok ");
});
const p3 = new Promise((resolve, reject) => {
  resolve("p3 ok");
});

const resolverTodas = Promise.all([p1, p2, p3]).then((dados) =>
  console.log(dados)
);
