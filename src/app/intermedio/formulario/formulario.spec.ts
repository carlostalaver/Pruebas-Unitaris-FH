import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';


xdescribe('Prueba formularios', () => {
  let component: FormularioRegister;

  beforeEach(() => {
    component = new FormularioRegister(new FormBuilder());
    console.log('%cEl formulario', 'background-color: aqua;', component.forma);
  });

  it('Debe crear un formulario con dos campos ', () => {
    expect(component.forma.contains('email')).toBeTruthy();
    expect(component.forma.contains('password')).toBeTruthy();
  });

  it(' El Email debe ser obligatorio ', () => {
    const control = component.forma.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('El Email debe ser en formato valido ', () => {
    const control = component.forma.get('email');
    control.setValue('carlos@test.com');
    console.log('%cinput email', 'background-color: aqua;', control);
    expect(control.valid).toBeTruthy();
  });
});
