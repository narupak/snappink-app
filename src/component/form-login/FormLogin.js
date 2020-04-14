import React, { Component } from 'react';
import snappink from '../../assets/image/snappink.png';
import LiveFit from '../../assets/image/liveFit.png';
import { Form, Button, Row, Col } from 'react-bootstrap';

class FormLogin extends Component {
  state = { checked: false };

  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });

  handleSubmit = (event) => {
    console.log(event);
  };
  render() {
    const formGroupCenter = {
      justifyContent: 'center',
    };

    const formCenter = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    };
    return (
      <Form style={formCenter}>
        <Row style={{ display: 'block', width: '25%' }}>
          <Col>
            <img src={snappink} alt='Logo' />
          </Col>
          <Col>
            <img src={LiveFit} alt='Logo' />
          </Col>
          <Form.Group controlId='mail' style={formGroupCenter}>
            <Col>
              <Form.Control type='email' placeholder='Email' />
            </Col>
          </Form.Group>
          <Form.Group controlId='password' style={formGroupCenter}>
            <Col>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
          <Form.Group controlId='remember' style={{ textAlign: 'left' }}>
            <Col>
              <Form.Check type='checkbox' label='Remember me' />
            </Col>
          </Form.Group>
          <Col>
            <Button
              type='submit'
              onClick={this.handleSubmit}
              style={{ width: '100%', backgroundColor: '#F598A4' , fontSize: "16px" , fontWeight: "bold" , border: "none" }}
            >
              Log in
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FormLogin;
