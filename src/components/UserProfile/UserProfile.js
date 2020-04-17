import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { LabelStyle, Profile } from "./styled";
import noImg from "./../../../src/assets/image/noImg.png";

export class UserProfile extends Component {
  logout() {
    localStorage.clear();
    window.location.reload();
  }

  constructor(props) {
    super(props);
    this.state = { img: noImg, name: "" };
  }

  componentDidMount = () => {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    this.setState({
      name: data.first_name + " " + data.last_name
    });
    if (data.profile_thumbnail) {
      this.setState({
        img: data.profile_thumbnail
      });
    }
  };

  render() {
    return (
      <Profile>
        <div>
          <div>
    <LabelStyle className="mt-2">{this.state.name}</LabelStyle>
          </div>
        </div>
        <div>
          <div>
            <img
              className="ml-2"
              style={{ borderRadius: "50%" }}
              height="36px"
              src={this.state.img}
              alt={this.state.img}
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
