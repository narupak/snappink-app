import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { LabelStyle, Profile } from './styled';

export class UserProfile extends Component {
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
