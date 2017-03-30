let expect = require('chai').expect;
let assert = require('assert');
import { Caminho } from '../src/Caminho.js';

describe("#Classe Caminho", () => {

  describe('Estado: \n\t[1, 6, 3]\n\t[2, 7, 4]\n\t[0, 5, 8]\n    Solução:\n\t[1, 2, 3]\n\t[8, 0, 4]\n\t[7, 6, 5]', function() {
    let estado = [
      [1, 6, 3],
      [2, 7, 4],
      [0, 5, 8]
    ];
    let solucao = [
      [1, 2, 3],
      [8, 0, 4],
      [7, 6, 5]
    ];
    let caminho = new Caminho('NSLO', estado, solucao);

    let caminhoO = {
      estado: [
        [1, 6, 3],
        [2, 7, 4],
        [5, 0, 8]
      ],
      solucao: solucao,
      sequencia: caminho.sequencia + 'O',
      custo: 1 + 0 + 2 + 0 + 0 + 2 + 2 + 2 + 3 + caminho.sequencia.length + 1
    };
    let caminhoS = {
      estado: [
        [1, 6, 3],
        [0, 7, 4],
        [2, 5, 8]
      ],
      solucao: solucao,
      sequencia: caminho.sequencia + 'S',
      custo: 1 + 0 + 3 + 0 + 0 + 1 + 2 + 2 + 3 + caminho.sequencia.length + 1
    }

    it('Calculo custo + heuristica', function() {
      assert.equal(caminho.custo, 2 + 0 + 2 + 0 + 0 + 1 + 2 + 2 + 3 + caminho.sequencia.length);
    });

    it('Movimento N', function() { assert.deepEqual(caminho.gerarCaminho('N'), null) });
    it('Movimento S', function() { assert.deepEqual(caminho.gerarCaminho('S'), caminhoS) });
    it('Movimento L', function() { assert.deepEqual(caminho.gerarCaminho('L'), null) });
    it('Movimento O', function() { assert.deepEqual(caminho.gerarCaminho('O'), caminhoO) });

    it('Fronteira', function() {
      let fronteira = caminho.gerarFronteira();
      expect(fronteira).to.deep.have.members([caminhoO, caminhoS]);
    });
  });


  describe('Estado: \n\t[1, 6, 3]\n\t[2, 0, 4]\n\t[7, 5, 8]\n    Solução:\n\t[1, 2, 3]\n\t[8, 0, 4]\n\t[7, 6, 5]', function() {
    let estado = [
      [1, 6, 3],
      [2, 0, 4],
      [7, 5, 8]
    ];
    let solucao = [
      [1, 2, 3],
      [8, 0, 4],
      [7, 6, 5]
    ];
    let caminho = new Caminho('NSLO', estado, solucao);

    let caminhoN = {
      estado: [
        [1, 6, 3],
        [2, 5, 4],
        [7, 0, 8]
      ],
      solucao: solucao,
      sequencia: caminho.sequencia + 'N',
      custo: 1 + 0 + 2 + 0 + 0 + 2 + 2 + 0 + 3 + caminho.sequencia.length + 1
    };
    let caminhoS = {
      estado: [
        [1, 0, 3],
        [2, 6, 4],
        [7, 5, 8]
      ],
      solucao: solucao,
      sequencia: caminho.sequencia + 'S',
      custo: 1 + 0 + 2 + 0 + 0 + 1 + 1 + 0 + 3 + caminho.sequencia.length + 1
    };
    let caminhoL = {
      estado: [
        [1, 6, 3],
        [0, 2, 4],
        [7, 5, 8]
      ],
      solucao: solucao,
      sequencia: caminho.sequencia + 'L',
      custo: 1 + 0 + 1 + 0 + 0 + 1 + 2 + 0 + 3 + caminho.sequencia.length + 1
    };
    let caminhoO = {
      estado: [
        [1, 6, 3],
        [2, 4, 0],
        [7, 5, 8]
      ],
      solucao: solucao,
      sequencia: caminho.sequencia + 'O',
      custo: 1 + 0 + 2 + 0 + 1 + 1 + 2 + 0 + 3 + caminho.sequencia.length + 1
    };

    it('Calculo custo + heuristica', function() {
      assert.equal(caminho.custo, 0 + 0 + 2 + 0 + 0 + 1 + 2 + 0 + 3 + caminho.sequencia.length);
    });

    it('Movimento N', function() { assert.deepEqual(caminho.gerarCaminho('N'), caminhoN) });
    it('Movimento S', function() { assert.deepEqual(caminho.gerarCaminho('S'), caminhoS) });
    it('Movimento L', function() { assert.deepEqual(caminho.gerarCaminho('L'), caminhoL) });
    it('Movimento O', function() { assert.deepEqual(caminho.gerarCaminho('O'), caminhoO) });

    it('Fronteira', function() {
      let fronteira = caminho.gerarFronteira();
      expect(fronteira).to.deep.have.members([caminhoO, caminhoS, caminhoN, caminhoL]);
    });
  });
});;
