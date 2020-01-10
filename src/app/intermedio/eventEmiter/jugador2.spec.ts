import { Jugador2 } from './jugador2';


xdescribe('Jugador 2 emit', () => {
  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2());

  it('Debe emitir un evento cuando recibe daño', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe( hp => {
      console.log('%cRecibiendo lo emitido', 'background-color: aqua;', hp);
      nuevoHP = hp;
    });

    jugador.recibeDanio(1000);

    expect(nuevoHP).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir si es menor a 100', () => {
    let nuevoHP = 0;
    jugador.hpCambia.subscribe( hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio(60);

    expect(nuevoHP).toBe(40);
  });
});
