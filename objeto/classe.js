class Lancamento {
  constructor(nome = "Generico", valor = 0) {
    (this.nome = nome), (this.valor = valor);
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    (this.mes = mes), (this.ano = ano);
    this.lancamentos = [];
  }

  addLacamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salario", 1400);
const contaDeLuz = new Lancamento("Conta de luz", -200);

const contas = new CicloFinanceiro(1, 2025);
contas.addLacamentos(salario, contaDeLuz);

console.log(contas.sumario());
