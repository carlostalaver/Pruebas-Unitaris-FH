import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';
import { of } from 'rxjs';


class FakeRouter {
  navigate(params) { }
}

class FakeActivateRouter {
  // params: Observable<any> = of( EMPTY );

  private subjects = new Subject();

  get params() {
    return this.subjects.asObservable();
  }

  push(value) {
    this.subjects.next(value);
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivateRouter },

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a médico cuando se guarde', () => {
    const router = TestBed.get(Router);

    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });


  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;
    const activateRouter: FakeActivateRouter = TestBed.get(ActivatedRoute);

    activateRouter.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });
});
