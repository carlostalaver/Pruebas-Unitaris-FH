import { usuarioIngresado } from "./booleanos";


xdescribe('Pruebas de booleanos', () => {

  it('Debe retornar true', () => {

    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  });
});
