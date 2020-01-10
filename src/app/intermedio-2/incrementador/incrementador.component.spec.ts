import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


xdescribe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda ', () => {
        component.leyenda = 'Progreso de Carga';

        fixture.detectChanges(); // para obligar a angular que dispare la detecion de cambio

        const elemH3: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elemH3.innerHTML).toContain('Progreso de Carga');
    });

    it('Debe de mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);

        fixture.detectChanges();

        // Cuando termina la deteccion de cambios hara lo siguiente
        fixture.whenStable().then(() => {

            const elem = fixture.debugElement.query(By.css('input')).nativeElement;

            expect(elem.value).toBe('55');
        });
    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

});
