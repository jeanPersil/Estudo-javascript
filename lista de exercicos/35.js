let pilha = [1, 2, 3, 4, 5];
let adiciona = [6, 7, 8, 9, 10];

function adicionar(arrayInicial, arrayAdicionar) {
  for (i in arrayAdicionar) {
    console.log(arrayAdicionar[i]);
    arrayInicial.push(arrayAdicionar[i]);
  }

  console.log(`Array adicioanado ` + arrayAdicionar);
  console.log(`Array final: ` + arrayInicial);
}

adicionar(pilha, adiciona);
