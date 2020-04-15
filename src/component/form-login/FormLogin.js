import React, { Component } from "react";
import snappink from "../../assets/image/snappink.png";
import LiveFit from "../../assets/image/liveFit.png";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types'

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

class FormLogin extends Component {
  constructor() {
    super();
    this.state = {
      formLogin: {
        email: "",
        password: "",
      },
    };
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });

  handleSubmit = () => {
    const url = "https://api-staging.snappink.com/api/authTrainer/v1";
    const data = {
      email: this.state.formLogin.email,
      password: this.state.formLogin.password,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        if (response.result) {
          this.hadleLoginSuccess(response.message);
          localStorage.setItem("user", JSON.stringify(response.result));
          this.gotoUrl();
        } else {
          this.hadleLoginFail(response.message);
        }
      });
  };

  hadleFormCheck = () => {
    this.state.formLogin.email && this.state.formLogin.password
      ? this.handleSubmit()
      : this.checkForm();
  };

  checkForm = () => {
    if (
      this.state.formLogin.email === "" &&
      this.state.formLogin.password === ""
    ) {
      this.formValidMessage("Please ,Enter your email and password.");
    } else {
      this.state.formLogin.email &&
        this.formValidMessage("Please ,Enter your password.");
      this.state.formLogin.password &&
        this.formValidMessage("Please ,Enter your email.");
    }
  };

  formValidMessage = (message) => {
    store.addNotification({
      title: <div style={{ textAlign: "left", color: "white" }}>Warning !</div>,
      message: (
        <div style={{ textAlign: "left", color: "white" }}>{message}</div>
      ),
      type: "warning",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      },
    });
  };

  hadleLoginSuccess = (message) => {
    store.addNotification({
      title: <div style={{ textAlign: "left", color: "white" }}>Success</div>,
      message: (
        <div style={{ textAlign: "left", color: "white" }}>{message}</div>
      ),
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      },
    });
  };

  hadleLoginFail = (message) => {
    store.addNotification({
      title: <div style={{ textAlign: "left", color: "white" }}>Fail</div>,
      message: (
        <div style={{ textAlign: "left", color: "white" }}>{message}</div>
      ),
      type: "danger",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      },
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      formLogin: {
        email: event.target.value,
        password: this.state.formLogin.password,
      },
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      formLogin: {
        password: event.target.value,
        email: this.state.formLogin.email,
      },
    });
  };

  render() {
    const formGroupCenter = {
      justifyContent: "center",
      marginTop: "20px",
    };

    const formCenter = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    };

    return (
      <div>
        <ReactNotification />
        <Form style={formCenter}>
          <Row style={{ display: "block", width: "25%" }}>
            <Row>
              <Col>
                <img src={snappink} alt="Logo" />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <img src={LiveFit} alt="Logo" />
              </Col>
            </Row>
            <Form.Group controlId="mail" style={formGroupCenter}>
              <Col>
                <Form.Control
                  type="email"
                  onChange={this.handleEmailChange}
                  placeholder="Email"
                />
              </Col>
            </Form.Group>
            <Form.Group controlId="password" style={formGroupCenter}>
              <Col>
                <Form.Control
                  type="password"
                  onChange={this.handlePasswordChange}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            <Form.Group controlId="remember" style={{ textAlign: "left" }}>
              <Col>
                <Form.Check type="checkbox" label="Remember me" />
              </Col>
            </Form.Group>
            <Col>
              <Button
                type="button"
                onClick={this.hadleFormCheck}
                style={{
                  width: "100%",
                  backgroundColor: "#F598A4",
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Log in
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default FormLogin;
