function cardapio(codigoDoItem, quantidade) {
  let produto;
  let valor;
  let valorDaCompra;
  switch (codigoDoItem) {
    case 100:
      produto = "Cachorro quente";
      valor = (3.0).toFixed(2);
      valorDaCompra = valor * quantidade;
      valorFormatado = valorDaCompra.toFixed(2).replace(".", ",");

      return `Produto: ${produto} | Quantidade: ${quantidade} | Preco do produto individual: $${valor} | Valor total da compra: $${valorFormatado}`;

      break;
    case 200:
      produto = "Hamburguer simples";
      valor = (4.0).toFixed(2);
      valorDaCompra = valor * quantidade;
      valorFormatado = valorDaCompra.toFixed(2).replace(".", ",");

      return `Produto: ${produto} | Quantidade: ${quantidade} | Preco do produto individual: $${valor} | Valor total da compra: $${valorFormatado}`;

      break;
    case 300:
      produto = "CheeseBurguer";
      valor = (5.5).toFixed(2);
      valorDaCompra = valor * quantidade;
      valorFormatado = valorDaCompra.toFixed(2).replace(".", ",");

      return `Produto: ${produto} | Quantidade: ${quantidade} | Preco do produto individual: $${valor} | Valor total da compra: $${valorFormatado}`;

      break;
    case 400:
      produto = "Bauru";
      valor = (7.5).toFixed(2);
      valorDaCompra = valor * quantidade;
      valorFormatado = valorDaCompra.toFixed(2).replace(".", ",");

      return `Produto: ${produto} | Quantidade: ${quantidade} | Preco do produto individual: $${valor} | Valor total da compra: $${valorFormatado}`;

      break;
    case 500:
      produto = "Refrigerante";
      valor = (3.5).toFixed(2);
      valorDaCompra = valor * quantidade;
      valorFormatado = valorDaCompra.toFixed(2).replace(".", ",");

      return `Produto: ${produto} | Quantidade: ${quantidade} | Preco do produto individual: $${valor} | Valor total da compra: $${valorFormatado}`;

      break;
    case 600:
      produto = "Suco";
      valor = (2.8).toFixed(2);
      valorDaCompra = valor * quantidade;
      valorFormatado = valorDaCompra.toFixed(2).replace(".", ",");

      return `Produto: ${produto} | Quantidade: ${quantidade} | Preco do produto individual: $${valor} | Valor total da compra: $${valorFormatado}`;

      break;
    default:
      return "Produto inexistente";
  }
}

console.log(cardapio(100, 3));
console.log(cardapio(200, 4));
console.log(cardapio(300, 5));
console.log(cardapio(400, 1));
console.log(cardapio(600, 3));
console.log(cardapio(700, 3));
