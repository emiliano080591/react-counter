import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar hola + nombre', () => {
        const nombre='Emiliano';

        const saludo=getSaludo(nombre);
 
        expect(saludo).toBe('Hola '+nombre+'!');
    })

    //getSaludo debe retornar Hola Carlos!
    test('getSaludo debe retornar Hola Carlos! si no hay argumetos', () => {
        const saludo=getSaludo();
 
        expect(saludo).toBe('Hola Carlos!');
    })
    
    
})
