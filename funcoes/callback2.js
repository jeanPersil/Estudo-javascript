const ListadeNotas = [1, 7.5, 6.0, 8.0, 5.0, 10.0, 4.0, 9.0, 1];

const notasBaixas = [];

for (i in ListadeNotas) {
  if (ListadeNotas[i] < 7) {
    notasBaixas.push(ListadeNotas[i]);
  }
}

console.log(notasBaixas);

const verificarNota = (nota) => nota < 7;

ListadeNotas2 = [1, 7.5, 6.0, 8.0, 5.0, 10.0, 4.0, 9.0, 1, 5, 3, 2, 2, 1, 1];

notasBaixasComFilter = ListadeNotas2.filter(verificarNota);

console.log(notasBaixasComFilter);
