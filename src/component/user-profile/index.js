import React, { Component } from 'react';
import snappink from '../../assets/image/snappink.png';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const LabelStyle = styled.div`
  font-size : 14px;
  font-family: Roboto;
  font-weight: bold;
`
class UserProfile extends Component {
  render() {
    return (
      <Row>
        <Col lg="1">
          <Row>
            <LabelStyle>John Doe</LabelStyle>
          </Row>
          <Row>
            <LabelStyle>Super Admin</LabelStyle>
          </Row>
        </Col>
          <img src={snappink} alt='logo' width='50px' />
      </Row>
    );
  }
}

export default UserProfile;
