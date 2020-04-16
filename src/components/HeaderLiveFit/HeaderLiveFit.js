import React, { Component } from 'react';
import snappink from '../../assets/image/snappink.png';
import xLiveFit from '../../assets/image/xLiveFit.png';
import { UserProfile } from '../UserProfile';
import { Header, HeaderSideLeft, HeaderSideRight} from './styled';

export class HeaderLiveFit extends Component {
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
