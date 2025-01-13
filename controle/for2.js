let listaPessoa = ["Jean", "Caio", "Rafael"];

for (let i in listaPessoa) {
  console.log(`Nome: ${listaPessoa[i]}`);
}

const pessoa = {
  nome: "Jean Lucas",
  idade: "21",
  cidadeAtual: "Vitoria da conquista",
};

for (let atributo in pessoa) {
  console.log(`${atributo} ${pessoa[atributo]}`);
}

listaPessoa.length