import { Caminho } from './Caminho.js';
var _ = require("underscore");

export function Algoritmo(solucao, estadoInicial) {
  let EstadosVisitados = [];
  let CaminhosVisitados = [];
  let Fronteira = [];
  let resolvido = false;
  let caminhoInicial = new Caminho("", estadoInicial, solucao);
  Fronteira.push(caminhoInicial);

  while (!resolvido) {
    // process.stdout.write(".");
    // Ordenar a fronteira por custo
    Fronteira = _.sortBy(Fronteira, 'custo');

    // Visitar o caminho com menor custo
    let caminhoAtual = Fronteira.shift();
    CaminhosVisitados.push(caminhoAtual);
    EstadosVisitados.push(caminhoAtual.estado.toString());
    console.log(`Visitados: ${EstadosVisitados.length} \t Fronteira: ${Fronteira.length} \t Sequencia: ${caminhoAtual.sequencia.length} \t Custo Atual: ${caminhoAtual.custo}`);
    // console.log(Fronteira);


    // Se caminho for solucao, o problema está resolvido
    if (_.isEqual(caminhoAtual.estado, solucao)) {
      return caminhoAtual;
    }

    // Ao visitar o caminho, devemos atualizar a fronteira de acordo com os
    // movimentos possiveis a partir deste estado
    _.each(caminhoAtual.gerarFronteira(), (caminho) => {
      let indexVisitado = EstadosVisitados.indexOf(caminho.estado.toString())
      // let indexVisitado = Visitados.findIndex((caminhoVisitado) => {
      //   return _.isEqual(caminhoVisitado.estado, caminho.estado);
      // });
      if (indexVisitado == -1) {
        // Se nao foi visitado, pode botar caminho na fronteira
        Fronteira.push(caminho);
      } else {
        // Se foi visitado, devemos checar a sequencia de movimentos do
        // caminho visitado e comparar com o atual, se o atual for menor,
        // devemos substituir o caminho mais longo pelo mais curto na fronteira
        // e nos visitados
        // console.log("caminho ja visitado");
        let sequenciaVisitado = CaminhosVisitados[indexVisitado].sequencia;
        if (caminhoAtual.sequencia.length < sequenciaVisitado.length) {
          // console.log(Fronteira);
          console.log(caminhoAtual.sequencia);
          console.log(sequenciaVisitado);
          debugger;
          _.each(Fronteira, (caminho) => {
            if (caminho.sequencia.startsWith(sequenciaVisitado)) {
              // console.log(caminho);
              caminho.sequencia = caminho.sequencia.replace(sequenciaVisitado, caminhoAtual.sequencia);
              caminho.custo -= sequenciaVisitado.length - caminhoAtual.sequencia.length;
              // console.log(caminho);
              // console.log("sequencia atualizada")
            }
          });
          _.each(CaminhosVisitados, (caminho) => {
            if (caminho.sequencia.startsWith(sequenciaVisitado)) {
              // console.log(caminho);
              caminho.sequencia = caminho.sequencia.replace(sequenciaVisitado, caminhoAtual.sequencia);
              caminho.custo -= sequenciaVisitado.length - caminhoAtual.sequencia.length;
              // console.log(caminho);
              // console.log("sequencia atualizada")
            }
          });
          debugger;
          // console.log(Fronteira);

          // let visitadosFiltrados = _.filter(CaminhosVisitados, (caminho) => {
          //   return caminho.sequencia.startsWith(sequenciaVisitado);
          // });
          // _.each(visitadosFiltrados, (caminho) => {
          //   caminho.sequencia.replace(sequenciaVisitado, caminhoAtual.sequencia);
          // });
          console.log("caminho melhor");
        }
      }
    });
  }
}

function getAllIndexes(arr, val) {
  return 0;
}
