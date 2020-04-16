import React, { Component } from 'react';
import plus from '../../assets/image/plus.png';
import { ButtonAdd } from './styled';

export class ButtonCreateClass extends Component {
    render () {
        return (
            <ButtonAdd style={{ backgroundColor : "#F3A3AD" }}>
                <img src={plus} alt='Logo' />
                Create Class
            </ButtonAdd>
        );
    }
}
