import React, { Component } from "react";
import styled from "styled-components";
import { NavDropdown } from "react-bootstrap";

const LabelStyle = styled.div`
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
`;
const Profile = styled.div`
  display: inline-flex;
`;

class UserProfile extends Component {
  logout(){
    localStorage.clear();
    window.location.reload();
  }
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
        <div>{/* <img src={snappink} alt='logo' width='50px' /> */}</div>
        <div>
          <NavDropdown>
            <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Profile>
    );
  }
}

export default UserProfile;
