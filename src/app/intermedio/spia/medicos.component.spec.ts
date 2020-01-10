import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { of, EMPTY, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let medicoComp: MedicosComponent;
    const medicoServicio = new MedicosService(null);

    beforeEach(() => {
        medicoComp = new MedicosComponent(medicoServicio);
    });

    xit('Init debe de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        /* estoy diciendo: Espia al objeto medicoServicio, en especial al metodo 'getMedicos',
          cuando se llame a dicho medico vas a ejecutar el callFake indicado */
        spyOn(medicoServicio, 'getMedicos').and.callFake(() => {
            return of(medicos);
        });

        medicoComp.ngOnInit();
        expect(medicoComp.medicos.length).toBeGreaterThan(0);
    });

    xit('Debe llamar al servidor para agregar un médico', () => {

        const espia = spyOn(medicoServicio, 'agregarMedico').and.callFake( ()  => {
            return EMPTY;
        });

        medicoComp.agregarMedico();
        expect(espia).toHaveBeenCalled();

    });

    xit('Debe agregar un médico al arreglo de medicos', () => {

        const medico = {id: 1, nombre: 'Juan'};

        spyOn(medicoServicio, 'agregarMedico' ).and.returnValue( of(medico));

        medicoComp.agregarMedico();

        expect(medicoComp.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    xit('Si falla la adición, la propiedad mensajeError del componente, debe ser igual al error del servicio ', () => {

        const miError = 'No se puedo agregar al médico';

        spyOn(medicoServicio, 'agregarMedico').and.returnValue(throwError(miError));

        medicoComp.agregarMedico();

        expect(medicoComp.mensajeError).toBe(miError);
    });

    it('debe de llamar al servidor para borrar un médico', () => {
        /* para simular un click de confirmacion en el prompt, NOTAR que en el 
           metodo borrarMedico está dicho confirm, es por ello que lo estoy simulando 
           con este spia  */
        spyOn(window, 'confirm').and.returnValue(true);

        const espia  = spyOn(medicoServicio, 'borrarMedico').and.returnValue(EMPTY);

        medicoComp.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    });

    it('No debe de llamar al servidor para borrar un médico', () => {
        /* para simular un click de confirmacion en el prompt, NOTAR que en el 
           metodo borrarMedico está dicho confirm, es por ello que lo estoy simulando 
           con este spia  */
        spyOn(window, 'confirm').and.returnValue(false);

        const espia  = spyOn(medicoServicio, 'borrarMedico').and.returnValue(EMPTY);

        medicoComp.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    });


});
