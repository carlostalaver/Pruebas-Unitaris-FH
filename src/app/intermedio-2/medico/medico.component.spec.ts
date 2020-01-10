import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('Medico component 2', () => {

  let medicoCom: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  // Configuro el TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      imports: [HttpClientModule],
      providers: [MedicoService]
    });
    fixture = TestBed.createComponent(MedicoComponent);
    medicoCom = fixture.componentInstance;
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
