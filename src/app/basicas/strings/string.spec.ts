import { mensaje } from './string';


xdescribe('Pruebas de strings', () => {
  it('Debe de retornar un string', () => {
    const respuesta = mensaje('Carlos');

    expect(typeof respuesta).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const respuesta = mensaje('Carlos');

    expect( respuesta ).toBe('Saludos Carlos');
  });
});
