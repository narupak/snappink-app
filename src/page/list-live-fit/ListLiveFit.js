import React, { Component } from 'react';
import styled from 'styled-components';
import group from '../../assets/image/group.png';
import ButtonCreateClass from '../../component/button-create-class/ButtonCreateClass';
import HeaderLiveFit from '../../component/header-live-fit/HeaderLiveFit';
import { Row } from 'react-bootstrap';

const HeaderSideLeft = styled.div`
  text-align: left;
  float: left;
`;
const HeaderSideRight = styled.div`
  text-align: right;
`;
const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  padding-left: 50px;
  padding-top: 20px;
  padding-right: 50px;
`;

const LabelStyle = styled.div`
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
`;

const TableBody = styled.div`
  width: 100%;
  background-color: white;
  height: 80vh;
`;

const HeaderBody = styled.div`
  width: 100%;
  height: 10vh;
`;

class Template extends Component {
  render() {
    return (
      <div>
        <HeaderLiveFit></HeaderLiveFit>
        <Body>
          <HeaderBody>
            <HeaderSideLeft>
              <Row>
                <img src={group} alt='Logo' width='50px' />
                <LabelStyle>Class</LabelStyle>
              </Row>
            </HeaderSideLeft>
            <HeaderSideRight>
              <ButtonCreateClass></ButtonCreateClass>
            </HeaderSideRight>
          </HeaderBody>
          <TableBody></TableBody>
        </Body>
      </div>
    );
  }
}

export default Template;
