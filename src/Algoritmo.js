import { Caminho } from './Caminho.js';
var _ = require("underscore");

function Resolver8PuzzleSolucao(estadoInicial, solucao) {
  let EstadosVisitados = [];
  let CaminhosVisitados = [];
  let Fronteira = [];
  let resolvido = false;
  let caminhoInicial = new Caminho("", estadoInicial, solucao);

  let tamanhoMaxFronteira = 0;


  Fronteira.push(caminhoInicial);

  while (!resolvido) {
    // Ordenar a fronteira por custo
    Fronteira = _.sortBy(Fronteira, 'custo');

    // Visitar o caminho com menor custo
    let caminhoAtual = Fronteira.shift();
    CaminhosVisitados.push(caminhoAtual);
    EstadosVisitados.push(caminhoAtual.estado.toString());
    // console.log(`Visitados: ${EstadosVisitados.length} \t Fronteira: ${Fronteira.length} \t Sequencia: ${caminhoAtual.sequencia.length} \t Custo Atual: ${caminhoAtual.custo}`);

    // Se caminho for solucao, o problema está resolvido
    if (_.isEqual(caminhoAtual.estado, solucao)) {
      return caminhoAtual;
    }

    // Se demora muito, supoe que nao tem solucao
    // TODO: Implementar funcao temSolucao()
    if (!temSolucao(estadoInicial, solucao)) return false;

    // Ao visitar o caminho, devemos atualizar a fronteira de acordo com os
    // movimentos possiveis a partir deste estado
    _.each(caminhoAtual.gerarFronteira(), (caminho) => {
      let indexVisitado = EstadosVisitados.indexOf(caminho.estado.toString())
      if (indexVisitado == -1) {
        // Se nao foi visitado, pode botar caminho na fronteira
        Fronteira.push(caminho);
      } else {
        // Se foi visitado, devemos checar a sequencia de movimentos do
        // caminho visitado e comparar com o atual, se o atual for menor,
        // devemos substituir o caminho mais longo pelo mais curto na fronteira
        // e nos visitados
        let sequenciaVisitado = CaminhosVisitados[indexVisitado].sequencia;
        if (caminhoAtual.sequencia.length < sequenciaVisitado.length) {
          _.each(Fronteira, (caminho) => {
            if (caminho.sequencia.startsWith(sequenciaVisitado)) {
              caminho.sequencia = caminho.sequencia.replace(sequenciaVisitado, caminhoAtual.sequencia);
              caminho.custo -= sequenciaVisitado.length - caminhoAtual.sequencia.length;
            }
          });
          _.each(CaminhosVisitados, (caminho) => {
            if (caminho.sequencia.startsWith(sequenciaVisitado)) {
              caminho.sequencia = caminho.sequencia.replace(sequenciaVisitado, caminhoAtual.sequencia);
              caminho.custo -= sequenciaVisitado.length - caminhoAtual.sequencia.length;
            }
          });
        }
      }
    });
  }
}

function Resolver8Puzzle(estadoInicial) {
  let solucoes = [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0]
    ],
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 0]
    ],
    [
      [3, 2, 1],
      [4, 5, 6],
      [0, 8, 7]
    ],
    [
      [1, 2, 3],
      [6, 5, 4],
      [7, 8, 0]
    ],

    //sentido horario
    [
      [1, 2, 3],
      [8, 0, 4],
      [7, 6, 5]
    ],
    [
      [8, 1, 2],
      [7, 0, 3],
      [6, 5, 4]
    ],
    [
      [7, 8, 1],
      [6, 0, 2],
      [5, 4, 3]
    ],
    [
      [6, 7, 8],
      [5, 0, 1],
      [4, 3, 2]
    ],
    [
      [5, 6, 7],
      [4, 0, 8],
      [3, 2, 1]
    ],
    [
      [4, 5, 6],
      [3, 0, 7],
      [2, 1, 8]
    ],
    [
      [3, 4, 5],
      [2, 0, 6],
      [1, 8, 7]
    ],
    [
      [2, 3, 4],
      [1, 0, 5],
      [8, 7, 6]
    ],

    //sentido anti-horario
    [
      [1, 8, 7],
      [2, 0, 6],
      [3, 4, 5]
    ],
    [
      [8, 7, 6],
      [1, 0, 5],
      [2, 3, 4]
    ],
    [
      [7, 6, 5],
      [8, 0, 4],
      [1, 2, 3]
    ],
    [
      [6, 5, 4],
      [7, 0, 3],
      [8, 1, 2]
    ],
    [
      [5, 4, 3],
      [6, 0, 2],
      [7, 8, 1]
    ],
    [
      [4, 3, 2],
      [5, 0, 1],
      [6, 7, 8]
    ],
    [
      [3, 2, 1],
      [4, 0, 8],
      [5, 6, 7]
    ],
    [
      [2, 1, 8],
      [3, 0, 7],
      [4, 5, 6]
    ],


  ]
  let caminhosSolucao = [];

  for (let solucao of solucoes) {
    caminhosSolucao.push(Resolver8PuzzleSolucao(estadoInicial, solucao));
  }
  caminhosSolucao = _.sortBy(caminhosSolucao, 'custo').filter((e) => {
    return e;
  });
  return caminhosSolucao;
  // return caminhosSolucao[0];
}

function calcularInversoes(arr) {
  let inversoes = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        inversoes++;
      }
    }
  }
  return inversoes;
}

function temSolucao(estado, solucao) {
  let listaEstado = _.flatten(estado);
  let listaSolucao = _.flatten(solucao);
  let inversoesEstado = calcularInversoes(listaEstado);
  let inversoesSolucao = calcularInversoes(listaSolucao);

  let inversoes = Math.abs(inversoesEstado - inversoesSolucao);

  return (inversoes % 2 == 1);
}

export { Resolver8Puzzle, Resolver8PuzzleSolucao, calcularInversoes };
