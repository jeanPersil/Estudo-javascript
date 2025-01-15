const a = 1;
const b = 2;
const c = 3;

// forma antiga de se criar um objeto
const obj1 = { a: a, b: b, c: c };

// nova forma, automaticamente ja define os atributos e seus valores sem precisar dos :
const obj2 = { a, b, c };

console.log(obj1, obj2);

const nomeAttr = "Nota";
const valorAttr = 7;

const obj3 = {};

obj3[nomeAttr] = valorAttr;

console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr };

console.log(obj4);



//duas formas diferentes de definir uma funcao dentro de um objeto
const obj5 = {
  funcao1: function () { 
    console.log("hello world");
  },
  funcao2() {
    console.log("ola mundo");
  },
};
