/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Confirmaré que existe un routerLink hacia el componente de Médicos */
  it('Debe tener por lo menos un link a la pagina de médicos>', () => {

    const debugElementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const elementosMedicos = debugElementos.filter((value, index) => {
      return value.attributes.routerLink === '/medicos';
    });

    console.log('%cLos link', 'background-color: aqua;', elementosMedicos);
    expect(elementosMedicos.length).toBeGreaterThan(0);

  });
});
