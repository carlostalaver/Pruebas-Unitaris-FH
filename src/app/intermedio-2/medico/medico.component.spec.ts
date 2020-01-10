import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('Medico component 2 - Pruebas de integración Básica', () => {

  let medicoCom: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  // Configuro el TestBed para decir a Angular que trabaje con su ciclo de detección de cambio, etc
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule], // lo importé xq en MedicoService se inyecta HttpClient y este servicio se encuenta en este modulo
    });

    /* Le pido a Angular un componente ya compilado por el TestBed y así
       poder manipular el HTML, elementos del DOM, etc. */
    fixture = TestBed.createComponent(MedicoComponent);
    medicoCom = fixture.componentInstance; // pido una Intancia del componente creado por TestBed
  });

  it('Debe de crearse el componente', () => {
    expect(medicoCom).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {

    const nombre = 'Carlos';
    const mensaje = medicoCom.saludarMedico(nombre);
    expect(mensaje).toContain(nombre);
  });
});
