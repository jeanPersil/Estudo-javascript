const fs = require("fs");

// Sincrona

const caminho = __dirname + "/arquivo.json";

// const conteudo = fs.readFileSync(caminho, "utf-8");
// console.log(conteudo);

// assincrona

fs.readFile(caminho, "utf-8", (erro, conteudo) => {
  const config = JSON.parse(conteudo);

  console.log(config.db.host);
});

// OU, caso esteja lidando com um arquivo JSON

const config = require("./arquivo.json");
console.log(config.db);
