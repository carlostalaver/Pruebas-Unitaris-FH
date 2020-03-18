import { RUTAS } from './app.routes';
import { MedicoComponent } from 'src/app/intermedio-2/medico/medico.component';

describe('Rutas Principales', () => {

  it('Debe existir la ruta /medico/:id', () => {

    expect(RUTAS).toContain({ path: 'medico/:id', component: MedicoComponent });

  });
});
