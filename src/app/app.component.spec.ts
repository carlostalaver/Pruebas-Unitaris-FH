import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

/*Para las puebas unitarias se recomienda usar este modulo para probar rutas */
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // NavbarComponent // OJO si no estuviera usando schemas: [NO_ERRORS_SCHEMA], tendria que importar cada modulo
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ] // con esto le digo a angular que ignore aquellos elementos que no conozca y no lance error
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pruebas!');
  });

  // Confirmo que exista la directiva RouterOutlet
  it('Debe tener el <router-outlet>', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // obtengo el ELEMENTO <router-outlet> que está en el app.component.ts
    // By.directive(RouterOutlet) se le pasa como argumente RouterOutlet porq quiere capturar el elemento que posea dicha directiva
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull(); // valido que haya encontrado el elemento
  });

});
