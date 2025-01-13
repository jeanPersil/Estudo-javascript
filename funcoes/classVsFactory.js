class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

let eu = new Pessoa("Jean");
console.log(eu.falar());

function pessoa2(nome) {
  nome,
    (this.fala = function () {
      console.log(`Meu nome é ${nome}`);
    });
}

let jean = new pessoa2("jean");

jean.fala();
