var _ = require("underscore");
var cloneDeep = require('clone-deep');

export class Caminho {
  constructor(sequencia, estado, solucao) {
    this.sequencia = sequencia;
    this.estado = estado;
    this.solucao = solucao;
    this.custo = this.calcularCusto();
  }

  calcularCusto() {
    return this.calcularHeuristica() + this.sequencia.length;
  }

  calcularHeuristica() {
    let heuristica = 0;
    let valores = _.range(0, Math.pow(this.estado.length, 2));
    _.each(valores, (num) => {
      let posAtual = this.encontrarNumero(num, this.estado);
      let posSolucao = this.encontrarNumero(num, this.solucao);
      heuristica += Math.abs(posAtual[0] - posSolucao[0]) + Math.abs(posAtual[1] - posSolucao[1]);
    });
    return heuristica;
  }

  encontrarNumero(num, estado) {
    const tamanhoEstado = estado.length;
    const linhas = _.range(0, this.estado.length);
    const colunas = _.range(0, this.estado[0].length);

    for (let i = 0; i < linhas.length; i++)
      for (let j = 0; j < colunas.length; j++)
        if (estado[i][j] == num)
          return [i, j];
    return null;
  }

  gerarFronteira() {
    let fronteira = [];
    _.each(["N", "S", "L", "O"], (dir) => {
      fronteira.push(gerarCaminho(dir));
    })
    return fronteira;
  }

  gerarCaminho(movimento) {
    const posicaoZero = this.encontrarNumero(0, this.estado);
    const linhaZero = posicaoZero[0];
    const colunaZero = posicaoZero[1];
    let estado = cloneDeep(this.estado);

    switch (movimento) {
      case 'N':
        if (linhaZero >= 2) return null;
        estado[linhaZero][colunaZero] = this.estado[linhaZero + 1][colunaZero];
        estado[linhaZero + 1][colunaZero] = 0;
        break;
      case 'S':
        if (linhaZero <= 0) return null;
        estado[linhaZero][colunaZero] = this.estado[linhaZero - 1][colunaZero];
        estado[linhaZero - 1][colunaZero] = 0;
        break;
      case 'L':
        if (colunaZero <= 0) return null;
        estado[linhaZero][colunaZero] = this.estado[linhaZero][colunaZero - 1];
        estado[linhaZero][colunaZero - 1] = 0;
        break;
      case 'O':
        if (colunaZero >= 2) return null;
        estado[linhaZero][colunaZero] = this.estado[linhaZero][colunaZero + 1];
        estado[linhaZero][colunaZero + 1] = 0;
        break;
    }
    let resultado = new Caminho(this.sequencia + movimento, estado, this.solucao);
    return resultado;
  }

}
