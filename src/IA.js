import { Algoritmo } from 'Algoritmo.js';
// import { Caminho } from 'Caminho.js';

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

// let caminho = new Caminho('', estadoInicial, solucao);
// console.log(caminho);

Algoritmo(solucao, estadoInicial);
