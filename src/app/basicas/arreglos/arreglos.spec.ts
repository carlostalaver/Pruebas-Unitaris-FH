import { obterRobots } from './arreglos';

xdescribe('Pruebas de arrglo', () => {
  it('Debe retornar al menos 3 Robots', () => {
    const res = obterRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir Megaman y Ultron', () => {
    const res = obterRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Ultron');
  });


})