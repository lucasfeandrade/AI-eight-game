let Visitados;
let Fronteira;
let estadoInicial = [
  [1, 3, 4],
  [6, 5, 7],
  [2, 8, 0]
];

let solucao = [
  [1, 2, 3],
  [8, 0, 4],
  [7, 6, 5]
];

function Algoritmo(solucao, estadoInicial) {
  caminhoInicial = new Caminho("", estadoInicial, 0);
  fronteira.push(caminhoInicial);
  while (!resolvido) {
    let ultimaFronteira = fronteira.pop();
    visitados.push(ultimaFronteira.estado);
    calcularFronteira(visitados, ultimaFronteira, solucao);
  }
  return caminhoOtimo;
}

function encontrarZero(estado) {
  const tamanhoEstado = estado.length;
  for (let i = 0; i < tamanhoEstado; i++)
    for (let j = 0; j < tamanhoEstado; j++)
      if (estado[i][j] == 0)
        return [i, j];
}

function calcularHeuristica(estado, solucao) {
  return numero;
}

function calcularEstado(estado, movimento) {
  const posicaoZero = encontrarZero(estado);
  switch (movimento) {
    case 'N':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0]][posicaoZero[1] + 1];
      estado[posicaoZero[0]][posicaoZero[1] + 1] = 0;
      break;
    case 'S':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0]][posicaoZero[1] - 1];
      estado[posicaoZero[0]][posicaoZero[1] - 1] = 0;
      break;
    case 'L':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0] + 1][posicaoZero[1]];
      estado[posicaoZero[0] + 1][posicaoZero[1]] = 0;
      break;
    case 'O':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0] - 1][posicaoZero[1]];
      estado[posicaoZero[0] - 1][posicaoZero[1]] = 0;
      break;
  }
  return estado;
}

function calcularFronteira(visitados, caminhoAtual, solucao) {
  const posicaoZero = encontrarZero(caminhoAtual.estado);
  let caminhosFronteira = [];
  if (posicaoZero[0] > 0) {
    caminhosFronteira.push(caminhoAtual.criarFronteira('L'));
  }
  if (posicaoZero[0] < 2) {
    caminhosFronteira.push(caminhoAtual.criarFronteira('O'));
  }
  if (posicaoZero[1] > 0) {
    caminhosFronteira.push(caminhoAtual.criarFronteira('N'));
  }
  if (posicaoZero[1] < 2) {
    caminhosFronteira.push(caminhoAtual.criarFronteira('S'));
  }
}



class Caminho() {
  constructor(sequencia, estado, custo) {
    this.sequencia = sequencia;
    this.estado = estado;
    this.custo = custo;
  }

  function criarFronteira(direcao) {
    let estadoCaminho = calcularEstado(this.estado, direcao);
    let sequenciaCaminho = this.sequencia + direcao;
    let custoCaminho = sequenciaCaminho.length + calcularHeuristica(estadoCaminho, solucao);
    let caminho = new Caminho(estadoCaminho, sequenciaCaminho, custoCaminho);
    return caminho;
  }
}
