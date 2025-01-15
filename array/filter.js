const produtos = [
  { nome: "notebook", preco: 2499, fragil: true },
  { nome: "ipad", preco: 1000, fragil: true },
  { nome: "plastico", preco: 1, fragil: false },
];

console.log(
  produtos.filter((produto) => {
    // o filter, caso o retorno da funcao seja TRUE, o elemento ira continuar no array, caso contrario o evento sera retirado
    return produto.fragil === true && produto.preco > 2000;
  })
);
