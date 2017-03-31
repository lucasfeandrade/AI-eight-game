import { Algoritmo } from './Algoritmo.js';
// import { Caminho } from 'Caminho.js';

// ESTADO DIFICIL PRA CARALHO
let estadoInicial = [
  [1, 3, 4],
  [6, 7, 5],
  [8, 2, 0]
];

// let estadoInicial = [
//   [1, 3, 4],
//   [6, 7, 5],
//   [2, 8, 0]
// ];

// let estadoInicial = [
//   [6, 0, 8],
//   [3, 1, 4],
//   [2, 7, 5]
// ];

let solucao = [
  [1, 2, 3],
  [8, 0, 4],
  [7, 6, 5]
];

// let caminho = new Caminho('', estadoInicial, solucao);
// console.log(caminho);

let caminho = Algoritmo(solucao, estadoInicial);
console.log(caminho);
