import React from 'react'
import {shallow} from 'enzyme';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', () => {
    /*
    test('debe mostrar el mensaje "Hola,soy vegeta"', () => {
        const saludo='Hola,soy vegeta';
        const {getByText}=render(<PrimeraApp saludo={saludo}/> );

        expect(getByText(saludo)).toBeInTheDocument();
    })
    */

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo="Hola,soy vegeta";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo="Hola,soy vegeta";
        const sub="Soy un subtitulo papirrines";
        const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={sub}
        />);

        const textoParrafo=wrapper.find('p').text();
        
        expect(textoParrafo).toBe(sub);
    })
    
    
})
