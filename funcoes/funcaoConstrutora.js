function Carro({
  velocidadeMaxima = 100,
  delta = 5,
  NomeDoCarro = "Desconhecido",
}) {
  let velocidadeAtual = 0;

  this.acelerarCarro = function () {
    if (velocidadeAtual < velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  this.reduzirVelocidadeDoCarro = () => {
    if (velocidadeAtual === 0) {
      velocidadeAtual = 0;
    } else {
      velocidadeAtual -= delta;
    }
  };

  this.mostrarVelocidadeAtual = () =>
    `CARRO: ${NomeDoCarro} | VELOCIDADE: ${velocidadeAtual}`;
}

const uno = new Carro({ NomeDoCarro: "UNO" });

console.log(uno.mostrarVelocidadeAtual());

uno.acelerarCarro();

console.log(uno.mostrarVelocidadeAtual());

const lamborguini = new Carro({ NomeDoCarro: "Lamborguini" });

lamborguini.acelerarCarro();
lamborguini.acelerarCarro();
lamborguini.acelerarCarro();

lamborguini.reduzirVelocidadeDoCarro();
lamborguini.reduzirVelocidadeDoCarro();
lamborguini.reduzirVelocidadeDoCarro();
lamborguini.reduzirVelocidadeDoCarro();
lamborguini.reduzirVelocidadeDoCarro();
lamborguini.reduzirVelocidadeDoCarro();

console.log(lamborguini.mostrarVelocidadeAtual());

console.log(lamborguini.mostrarVelocidadeAtual());
