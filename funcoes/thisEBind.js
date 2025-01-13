pessoa = {
  saudacao: "Bom dia!",

  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

const falarr = pessoa.falar;

const fala = pessoa.falar.bind(pessoa);

console.log(fala());
