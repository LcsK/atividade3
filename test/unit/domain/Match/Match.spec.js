const Match = require('../../../../src/domain/Match');

const dummyDate = Date.now();
const dummyItem = '';
const dummyBar = {};

const constructorValidator = (player1, player2) => (
  () => Match(dummyBar)(dummyItem)(dummyDate)(player1)(player2)
);

const mockPlayer = (testCase = false) => ({
  getCurrentMatch: () => {
    if (testCase) {
      return null;
    }
    return {};
  },
});

describe('Bar', () => {
  // Estória 4 - Criação de partida:
  // Eu como frequentador de bares, gostaria de encontrar outros frequentadores
  // de bares para que possamos marcar uma partida, devemos poder
  // escolher o bar, data do jogo e algum item do menu para ser apostado.
  describe('uma partida é criada', () => {
    it('jogador1 não deve estar em partida', () => {
      // setup
      const player1 = mockPlayer(false);
      const player2 = mockPlayer(true);

      // execution
      const match = constructorValidator(player1, player2);

      // assertion
      expect(match).toThrow('both players should not be in match');
    });
    it('jogador2 não deve estar em partida', () => {
      // setup
      const player1 = mockPlayer(true);
      const player2 = mockPlayer(false);

      // execution
      const match = constructorValidator(player1, player2);

      // assertion
      expect(match).toThrow('both players should not be in match');
    });
    it('deve retornar uma nova instância de partida', () => {
      // setup
      const player1 = mockPlayer(true);
      const player2 = mockPlayer(true);

      // execution
      const match = constructorValidator(player1, player2);

      // assertion
      expect(match()).toEqual({
        bar: dummyBar,
        menuItem: dummyItem,
        date: dummyDate,
        player1,
        player2,
      });
    });
  });
});
