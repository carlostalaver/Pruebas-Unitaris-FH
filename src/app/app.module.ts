import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MedicosComponent } from './intermedio/spia/medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './intermedio-2/medico/medico.component';
import { IncrementadorComponent } from './intermedio-2/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
