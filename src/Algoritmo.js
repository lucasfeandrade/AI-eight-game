import { Caminho } from 'Caminho.js';
var _ = require("underscore");

export function Algoritmo(solucao, estadoInicial) {
  let Visitados;
  let Fronteira;
  let resolvido = false;
  caminhoInicial = new Caminho("", estadoInicial);
  Fronteira.push(caminhoInicial);

  while (!resolvido) {
    let ultimaFronteira = Fronteira.pop();
    if (ultimaFronteira.estado == solucao) {
      resolvido = true;
      break;
    }
    Visitados.push(ultimaFronteira.estado);
    // verificar se os estados ja nao estao nos visitados, se sim, verificar se
    //
    Fronteira.concat(gerarFronteira());

    // Fronteira.
  }
  return caminhoOtimo;
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
  return caminhosFronteira;
}
