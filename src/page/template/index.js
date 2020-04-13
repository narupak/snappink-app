import React, { Component } from 'react';
import styled from 'styled-components';
import snappink from '../../assets/image/snappink.png';
import xLiveFit from '../../assets/image/xLiveFit.png';
import UserProfile from '../../component/user-profile'

const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
`;
const HeaderSideLeft = styled.div`
  text-align: left;
  float:left;
`;
const HeaderSideRight = styled.div`
  text-align: right;
`;
const Body = styled.div`
  width: 100%;
  background-color: #eeeeee;
`;
class Template extends Component {
  render() {
    return (
      <div>
        <Header>
          <HeaderSideLeft>
            <img src={snappink} alt='Logo' width='50px' />
            <img src={xLiveFit} alt='Logo' width='80px' />
          </HeaderSideLeft>
          <HeaderSideRight>
            <UserProfile></UserProfile>
          </HeaderSideRight>
        </Header>
        <Body>dddd</Body>
      </div>
    );
  }
}

export default Template;
