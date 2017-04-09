const alg = require('./Algoritmo.js');
var _ = require("underscore");
// import { Caminho } from 'Caminho.js';


// let estadoInicial = [
//   [8, 6, 7],
//   [2, 5, 4],
//   [3, 0, 1]
// ];

// let estadoInicial = [
//   [4, 1, 0],
//   [8, 6, 3],
//   [5, 7, 2]
// ];

let estadoInicial = [
  [1, 2, 6],
  [4, 5, 3],
  [0, 8, 7]
];

let solucao = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

// let solucao = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8]
// ];
let inicio = +new Date();

let caminho = alg.Resolver8PuzzleSolucao(estadoInicial, solucao);
// let caminho = alg.Resolver8Puzzle(estadoInicial)[0];

caminho.sequencia = caminho.sequencia.replace(/N/g, '\u2191');
caminho.sequencia = caminho.sequencia.replace(/S/g, '\u2193');
caminho.sequencia = caminho.sequencia.replace(/L/g, '\u2192');
caminho.sequencia = caminho.sequencia.replace(/O/g, '\u2190');

if (caminho) {
  console.log("A sequencia mais rápida é:", caminho.sequencia, `(${caminho.sequencia.length})`);
  console.log("A solução dela é:");
  console.log(caminho.solucao[0]);
  console.log(caminho.solucao[1]);
  console.log(caminho.solucao[2]);
  console.log(`Maior fronteira durante a execução teve ${caminho.maxFronteira} elementos`);
  console.log(`Número de estados visitados: ${caminho.estadosVisitados}`);
}

let fim = +new Date();

console.log(`Tempo de execução: ${(fim-inicio)}ms`);
