import React, { Component } from 'react';
import styled from 'styled-components';
import snappink from '../../assets/image/snappink.png';
import xLiveFit from '../../assets/image/xLiveFit.png';
import UserProfile from '../user-profile/UserProfile';

const Header = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
`;
const HeaderSideLeft = styled.div`
  text-align: left;
  float: left;
`;
const HeaderSideRight = styled.div`
  text-align: right;
`;

class HeaderLiveFit extends Component {
  render() {
    return (
      <Header>
        <HeaderSideLeft>
          <img src={snappink} alt='Logo' width='60px' />
          <img style={{marginLeft:"20px"}} src={xLiveFit} height='25px' alt='Logo' width='100px' />
        </HeaderSideLeft>
        <HeaderSideRight>
          <UserProfile/>
        </HeaderSideRight>
      </Header>
    );
  }
}

export default HeaderLiveFit;
