const alg = require('./Algoritmo.js');
// import { Caminho } from 'Caminho.js';

// let estadoInicial = [
//   [1, 3, 4],
//   [6, 7, 5],
//   [8, 2, 0]
// ];

let estadoInicial = [
  [2, 3, 8],
  [4, 1, 6],
  [5, 7, 0]
];

let solucao = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];


let caminho = alg.Resolver8Puzzle(estadoInicial);
console.log(caminho);
