const Bar = require('../../../../src/domain/Bar');

// generic setup
const string64 = ' '.repeat(64);
const string128 = ' '.repeat(128);
const string65 = ' '.repeat(65);
const string129 = ' '.repeat(129);
const constructorValidator = data => () => Bar(data);

describe('Bar', () => {
  // Estória número 2:
  // Cenário: Cadastrar um novo bar
  // "Dado" que eu dados de texto como nome do bar, endereço e descrição
  // "E" tenho fotos do meu menu e bar
  // "Quando" eu cadastrar meus dados
  // "Então" estes dados devem ser válidados
  // "E" caso estejam corretos, devem ser adicionados na aplicação
  describe('um bar é cadastrado na aplicação', () => {
    it('o nome deve ser do tipo string com máximo de 64 caracteres', () => {
      // setup
      const bar1 = { name: string64, description: 'test1', address: 'test2' };
      const bar2 = { name: string65, description: 'test3', address: 'test4' };
      const bar3 = { name: 123, description: 'test5', addres: 'test6' };

      // execution
      const correctBar = constructorValidator(bar1)();
      const incorrectBar1 = constructorValidator(bar2);
      const incorrectBar2 = constructorValidator(bar3);

      // assertion
      expect(correctBar).toBeTruthy();
      expect(incorrectBar1).toThrow('invalid data');
      expect(incorrectBar2).toThrow('invalid data');
    });
    it('a descrição deve ser do tipo string com no máximo 128 caracteres', () => {
      // setup
      const bar1 = { name: 'test1', description: string128, address: 'test2' };
      const bar2 = { name: 'test3', description: string129, address: 'test4' };
      const bar3 = { name: 'test5', description: 123, addres: 'test6' };

      // execution
      const correctBar = constructorValidator(bar1)();
      const incorrectBar1 = constructorValidator(bar2);
      const incorrectBar2 = constructorValidator(bar3);

      // assertion
      expect(correctBar).toBeTruthy();
      expect(incorrectBar1).toThrow('invalid data');
      expect(incorrectBar2).toThrow('invalid data');
    });
    it('o endereço deve ser do tipo string com no máximo 128 caracteres', () => {
      // setup
      const bar1 = { name: 'test1', description: 'test2', address: string128 };
      const bar2 = { name: 'test3', description: 'test4', address: string129 };
      const bar3 = { name: 'test5', description: 'test6', addres: 123 };

      // execution
      const correctBar = constructorValidator(bar1)();
      const incorrectBar1 = constructorValidator(bar2);
      const incorrectBar2 = constructorValidator(bar3);

      // assertion
      expect(correctBar).toBeTruthy();
      expect(incorrectBar1).toThrow('invalid data');
      expect(incorrectBar2).toThrow('invalid data');
    });
    it('cada imagem do menu deve ser um Buffer', () => {
      // setup
      const bar1 = Bar({ name: 'test1', description: 'test2', address: 'test3' });
      const bar2 = Bar({ name: 'test4', description: 'test5', address: 'test6' });

      // execution
      bar1.addMenuPhoto(Buffer.from([12, 13, 14]));
      bar2.addMenuPhoto('test1212121');

      // assertion
      expect(bar1.getMenu().length).toBe(1);
      expect(bar2.getMenu().length).toBe(0);
    });
    it('cada imagem do bar deve ser um Buffer', () => {
      // setup
      const bar1 = Bar({ name: 'test1', description: 'test2', address: 'test3' });
      const bar2 = Bar({ name: 'test4', description: 'test5', address: 'test6' });

      // execution
      bar1.addPhoto(Buffer.from([12, 13, 14]));
      bar2.addPhoto('test1212121');

      // assertion
      expect(bar1.getPhotos().length).toBe(1);
      expect(bar2.getPhotos().length).toBe(0);
    });
  });
});
