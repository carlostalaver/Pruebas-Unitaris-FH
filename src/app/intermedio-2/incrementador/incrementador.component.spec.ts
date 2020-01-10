import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

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

    xit('Debe mostrar la leyenda dentro de la etiqueta <h3> ', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // para obligar a angular que dispare la detecion de cambio

        const elemH3: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elemH3.innerHTML).toContain('Progreso de carga');
    });

    xit('Debe de mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);

        fixture.detectChanges(); // Recordar que la detecion de cambios puede tardar unos milisegundos

        // Cuando termina la deteccion de cambios hara lo siguiente
        fixture.whenStable().then(() => {

            const elem: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;

            expect((elem as HTMLInputElement).value).toBe('55');
        });
    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
        // Esta prueba permite verificar que un elemento HTML posee un evento en particular
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null); // Simulo que hago click en el primer boton

        // expect(true).toBeTruthy();
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null); // Simulo que hago click en el segundo boton
        expect(component.progreso).toBe(50);
    });


    it('En el título del componente debe mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();

        const elemH3: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elemH3.innerHTML).toContain('45'); // '45' de tipo string porque todo lo que van dentro de la etiqueta h3 va en formato strin

    });

});
