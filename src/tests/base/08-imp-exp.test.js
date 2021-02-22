import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
    test('debe de retornar un heroe', () => {
        const id=1;
        const heroe=getHeroeById(id);

        const heroeData=heroes.find(h=>h.id===id);

        expect(heroe).toEqual(heroeData);

    })

    test('debe de retornar undefine si heroe no existe', () => {
        const id=111;
        const heroe=getHeroeById(id);

        const heroeData=heroes.find(h=>h.id===id);

        expect(heroe).toBe(undefined);
        
    })

    test('debe de retornar un arreglo con los heroes DC', () => {
        const owner='DC';
        const heroes=getHeroesByOwner(owner);

        const heroesData=heroes.filter(h=>h.owner===owner)

        expect(heroes).toEqual(heroesData)
        
    })

    test('debe de retornar un arreglo con los heroes MARVEL', () => {
        const owner='Marvel';
        const heroes=getHeroesByOwner(owner);

        expect(heroes.length).toBe(2)
        
    })
    
})
