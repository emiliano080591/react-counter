import React from 'react'
import {shallow} from 'enzyme';
import {render} from '@testing-library/react';
import CounterApp from '../CounterApp';


describe('Pruebas con <CounterApp/>', () => {
    let wrapper=shallow(<CounterApp />);

    beforeEach(()=>{
         wrapper = shallow(<CounterApp />);
    })
    
    test('debe mostrar <CounterApp/> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el valor por defecto igual a 100 ', () => {
        const wrapper = shallow(<CounterApp value={100}/>);

        const numero=wrapper.find('h2').text().trim();
        
        expect(numero).toBe('100');
    })
    
    test('debe de incrementar el contador', () => {
        wrapper.find('button').at(0).simulate('click');

        const numero=wrapper.find('h2').text().trim();

        expect(numero).toBe('11');
    })

    test('debe de decrementar el contador', () => {
        wrapper.find('button').at(2).simulate('click');

        const numero=wrapper.find('h2').text().trim();

        expect(numero).toBe('9');
    })

    test('debe de resetear el contador', () => {
        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const numero=wrapper.find('h2').text().trim();

        expect(numero).toBe('105');
    })
    
    
})
