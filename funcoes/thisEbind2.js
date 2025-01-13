function Pessoa() {
  this.idade;

  const self = this;

  setInterval(function () {
    self.idade++;
    console.log(self.idade);
  }, 1000);
}

new Pessoa;
