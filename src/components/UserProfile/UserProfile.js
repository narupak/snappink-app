import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { LabelStyle, Profile } from "./styled";

export class UserProfile extends Component {
  logout() {
    localStorage.clear();
    window.location.reload();
  }

  constructor(props) {
    super(props);
    this.state = { img: "", name: "" };
  }

  render() {
    return (
      <Profile>
        <div>
          <div>
            <LabelStyle className="mt-2">John Doe</LabelStyle>
          </div>
        </div>
        <div>
          <div>
            <img
              className="ml-2"
              style={{ borderRadius: "50%" }}
              height="36px"
              src="https://upload.wikimedia.org/wikipedia/en/6/63/IMG_%28business%29.svg"
              alt="https://upload.wikimedia.org/wikipedia/en/6/63/IMG_%28business%29.svg"
              width="36px"
            />
          </div>
        </div>
        <div>
          <NavDropdown>
            <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Profile>
    );
  }
}
