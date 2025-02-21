const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function lerPromisse(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString());
    });
  });
}

lerPromisse(caminho).then((dados) => console.log(dados));
