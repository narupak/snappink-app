import React, { Component } from 'react';
import snappink from '../../assets/image/snappink.png';
import styled from 'styled-components';

const LabelStyle = styled.div`
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
`;
const Profile = styled.div`
  display: inline-flex;
`;
class UserProfile extends Component {
  render() {
    return (
      <Profile>
        <div>
          <div>
            <LabelStyle>John Doe</LabelStyle>
          </div>
          <div>
            <LabelStyle>Super Admin</LabelStyle>
          </div>
        </div>
        <div>
          <img src={snappink} alt='logo' width='50px' />
        </div>
      </Profile>
    );
  }
}

export default UserProfile;
