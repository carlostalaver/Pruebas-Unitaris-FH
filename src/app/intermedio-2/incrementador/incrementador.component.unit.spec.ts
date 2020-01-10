import { IncrementadorComponent } from './incrementador.component';


/* OJO este archivo es para los PRUEBAS UNITARIAS, por eso el nombre que se le dió */

describe('Incrementador Component Unit', () => {

  let componente: IncrementadorComponent;

  beforeEach(() => componente = new IncrementadorComponent());

  it('No debe de pasar de 100 el progreso', () => {

    componente.progreso = 50;
    componente.cambiarValor(5);
    expect(componente.progreso).toBe(55);
  });
});
