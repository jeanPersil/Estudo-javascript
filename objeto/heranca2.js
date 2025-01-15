const avo = {
  atributo1: "A",
};
const pai = {
  __proto__: avo, // nesse caso este objeto "PAI" herda os atribvutos e metodos do objeto avo
  atributo2: "B",
};
const filho = {
  __proto__: pai, // nesse caso este objeto "FILHO" herda os atribvutos e metodos do objeto pai que herda os atributos do objeto avo
  atributo3: "C",
};

console.log(filho.atributo2);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `velocidade atual: ${this.velAtual}Km/h / MAX : ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "A40",
  velMax: 324, // shadowing (Sobrepondo o velMax de carro)
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro); // FERRARI HERDA OS ATRIBUTOS DO OBJETO CARRO / forma diferente de escrever
Object.setPrototypeOf(volvo, carro); 

ferrari.acelerarMais(100);
console.log(ferrari.status());
console.log(volvo.status());
