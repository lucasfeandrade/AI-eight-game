let Visitados;
let Fronteira;
let estadoInicial = [[1, 3, 4],
                     [6, 5, 7],
                     [2, 8, 0]];

let solucao = [[1, 2, 3],
               [8, 0, 4],
               [7, 6, 5]];

function Algoritmo( solucao, estadoInicial ) {
  Caminho1 = new Caminho;
  // let heuristica = calcularHeurística( estadoInicial, solucao );
  // Caminho1.custo = sequencia.length + heuristica;
  Caminho1.estado = estadoInicial;
  fronteira.push(Caminho1);
  while(!resolvido) {
    let ultimaFronteira = fronteira.pop();
    visitados.push(ultimaFronteira.estado);
    calcularFronteira( visitados, ultimaFronteira, solucao );
  }
  return caminhoOtimo;
}

function encontrarZero(estado) {
  const tamanhoEstado = estado.length;
  for(let i = 0; i < tamanhoEstado; i++)
    for(let j = 0; j < tamanhoEstado; j++)
      if( estado[i][j] == 0 )
        return [i, j];
}

function calcularHeuristica( estado, solucao ) {
  return numero;
}

function calcularEstado( estado, movimento ) {
  const posicaoZero = encontrarZero(estado);
  switch (movimento) {
    case 'N':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0]][posicaoZero[1]+1];
      estado[posicaoZero[0]][posicaoZero[1]+1] = 0;
      break;
    case 'S':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0]][posicaoZero[1]-1];
      estado[posicaoZero[0]][posicaoZero[1]-1] = 0;
      break;
    case 'L':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0]+1][posicaoZero[1]];
      estado[posicaoZero[0]+1][posicaoZero[1]] = 0;
      break;
    case 'O':
      estado[posicaoZero[0]][posicaoZero[1]] = estado[posicaoZero[0]-1][posicaoZero[1]];
      estado[posicaoZero[0]-1][posicaoZero[1]] = 0;
      break;
    }
    return estado;
}

function calcularFronteira(visitados, caminhoAtual, solucao) {
  const posicaoZero = encontrarZero(caminhoAtual.estado);
  let caminhosFronteira = [];
  if ( posicaoZero[0] > 0) {
      let caminho = new Caminho;
      caminho.estado = calcularEstado(caminhoAtual.estado, 'L');
      caminho.sequencia = caminhoAtual.sequencia + 'L';
      caminho.custo = caminho.sequencia.length + calcularHeuristica( caminho.estado, solucao );
      caminhosFronteira.push(caminho);
  }
  if ( posicaoZero[0] < 2) {
      let caminho = new Caminho;
      caminho.estado = calcularEstado(caminhoAtual.estado, 'O');
      caminho.sequencia = caminhoAtual.sequencia + 'O';
      caminho.custo = caminho.sequencia.length + calcularHeuristica( caminho.estado, solucao );
      caminhosFronteira.push(caminho);
  }
  if ( posicaoZero[1] > 0) {
      let caminho = new Caminho;
      caminho.estado = calcularEstado(caminhoAtual.estado, 'S');
      caminho.sequencia = caminhoAtual.sequencia + 'S';
      caminho.custo = caminho.sequencia.length + calcularHeuristica( caminho.estado, solucao );
      caminhosFronteira.push(caminho);
  }
  if ( posicaoZero[1] < 2) {
      let caminho = new Caminho;
      caminho.estado = calcularEstado(caminhoAtual.estado, 'N');
      caminho.sequencia = caminhoAtual.sequencia + 'N';
      caminho.custo = caminho.sequencia.length + calcularHeuristica( caminho.estado, solucao );
      caminhosFronteira.push(caminho);
  }
}

function Caminho( sequencia, estado, custo ) {
  this.sequencia = sequencia;
  this.estado = estado;
  this.custo = custo;
}
