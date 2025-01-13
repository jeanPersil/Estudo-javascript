function Obj(nome) {
  this.nome = nome;
  this.exec = function () {
    console.log("ola mundo");
  };
}

const obj2 = new Obj("Teclado");
const obj3 = new Obj("mouse");

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();

// sempre acessamos os membros de um objeto a partir de uma anotacao .
