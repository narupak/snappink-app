import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import plus from '../../assets/image/plus.png';

const ButtonAdd = styled(Button)`
    background-color: #F3A3AD;
    color: white;
    font-size: 14px;
    font-family: Roboto;
    font-weight: bold;
`
class ButtonCreateClass extends Component {
    render () {
        return (
            <ButtonAdd>
                <img src={plus} alt='Logo' />
                Create Class
            </ButtonAdd>
        );
    }
}

export default ButtonCreateClass 