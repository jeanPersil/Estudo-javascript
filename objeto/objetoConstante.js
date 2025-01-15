// pessoa -> 123 -> {...}
const pessoa = { nome: "Joao" };

// mudando o atributo do objeto pessoa e não o endereço onde a constante aponta
pessoa.nome = "Jean";

console.log(pessoa.nome);

/* mudando o objeto, consequentemente o endereço da constante, isso vai gerar um erro por ser uma constante.
´pessoa -> 456 -> {...} 
pessoa = { produto: "laps" };

console.log(pessoa); */

// congela o objeto e ele não pode mais ser modificado.
Object.freeze(pessoa);

pessoa.nome = "lucas";
pessoa.end = "Rua abc";
delete pessoa.nome;

console.log(pessoa);


const objetoConstante = Object.freeze({nome : "Pedro"}) // nunca sera mudado
