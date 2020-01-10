import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
  medicos: any[];

  constructor(public medicoService: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }

  obtenerMedico() {
    this.medicoService.getMedico()
      .subscribe( (res: any[]) => {
        this.medicos = res;
      });
  }

}
