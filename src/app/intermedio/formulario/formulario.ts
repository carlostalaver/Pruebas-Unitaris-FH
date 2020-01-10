import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormularioRegister {
  forma: FormGroup;

  constructor( public fb: FormBuilder) {
    this.forma = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
