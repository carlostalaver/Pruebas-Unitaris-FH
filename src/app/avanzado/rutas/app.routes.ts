
import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermedio-2/medico/hospital/hospital.component';
import { MedicoComponent } from 'src/app/intermedio-2/medico/medico.component';
import { IncrementadorComponent } from '../../intermedio-2/incrementador/incrementador.component';

export const RUTAS: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent }
];

