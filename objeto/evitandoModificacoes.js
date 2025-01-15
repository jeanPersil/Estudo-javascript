const produto = Object.preventExtensions({
  // permite a alteracao dos atributos ja existentes no objeto, entretanto, não permite a criacao de outros atributos.
  nome: "Qualquer",
  preco: 2.0,
  tag: "Promoção",
});

console.log(`Extensivel: ${Object.isExtensible(produto)}`);

const pessoa = {
  nome: "Jean",
  idade: 21,
};

Object.seal(pessoa); // nessa situação, não conseguimos add / excluir. Apenas editar os valores dos atributos ja existentes.

Object.freeze(pessoa); // NADA PODE SER MODIFICADO
