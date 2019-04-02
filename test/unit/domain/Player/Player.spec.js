const Player = require('../../../../src/domain/Player');

describe('Player', () => {
  describe('histórico de partidas é listado', () => {
    // Eu como um bom jogador, apostador e frequentador de bares,
    // gostaria de mostrar para os meus companheiros qual é o meu
    // ranking e histórico de apostas na aplicação, podendo mostrar
    // dados como data da aposta, o que foi apostado, qual foi
    // o resultado e em qual bar o jogo ocorreu.

    // setup
    const player = Player('player1');

    const dummyMatch1 = { player1: player };
    const dummyMatch2 = { player2: player };

    player.addMatch(dummyMatch1);
    player.addMatch(dummyMatch2);

    // execution
    const result = player.getMatches();

    it('é uma lista de partidas', () => {
      expect(result).toBeInstanceOf(Array);
    });
    it('as partidas são relacionadas com o jogador', () => {
      expect(result).toContain(dummyMatch1);
      expect(result).toContain(dummyMatch2);
    });
  });
});
