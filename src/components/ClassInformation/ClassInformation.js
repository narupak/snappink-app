import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Panel, HeaderPanel, BodyPanel } from './styled';
export class ClassInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        className: '',
        trainerName: '',
        expireIn: 0,
        price: 0,
        time: 0,
      }
    };
    this.handleChangeClassName = this.handleChangeClassName.bind(this);
    this.handleChangeTrainerName = this.handleChangeTrainerName.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeExpire = this.handleChangeExpire.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }
  // async componentWillMount(){
  //   this.setState({ timeNum : await this.props.classInform.time })
  //   console.log(await this.state.timeNum);
  // }
  handleChangeClassName(event) {
    this.props.classInform.className = event.target.value;
    this.setState({ input: { className: event.target.value } });
  }

  handleChangeTrainerName(event) {
    this.props.classInform.trainerName = event.target.value;
    this.setState({ input: { trainerName: event.target.value } });
  }

  handleChangeTime(event) {
    this.props.classInform.time = event.target.value;
    this.setState({ input: { time: event.target.value } });
  }

  handleChangeExpire(event) {
    this.props.classInform.expireWithIn = event.target.value;
    this.setState({ input: { expireIn: event.target.value } });
  }

  handleChangePrice(event) {
    this.props.classInform.price = event.target.value;
    this.setState({ input: { price: event.target.value } });
  }
  // func = {
  //   event: {
  //     checkNumber: (e) => {
  //       console.log((/^[0-9\b]+$/).test(e.target.value));
  //       if (/^[0-9\b]+$/.test(e.target.value) === true) {
  //         console.log(e.target.value);
  //         this.props.classInform = e.target.value;
  //       }
  //     },
  //   },
  // };
  render() {
    const { classInform } = this.props;
    const {
      input
    } = this.state;
    input.className = classInform.className;
    input.trainerName = classInform.trainerName;
    input.expireIn = classInform.expireWithIn;
    input.price = classInform.price;
    input.time = classInform.time;
    return (
      <Panel>
        <HeaderPanel>
          <label style={{ color: 'white' }}>Class Information</label>
        </HeaderPanel>
        <BodyPanel>
          <Form.Group controlId={input.className}>
            <Row>
              <Form.Label column lg={2} style={{ textAlign: 'right' }}>
                Class Name
              </Form.Label>
              <Col lg={4}>
                <Form.Control
                  type='text'
                  placeholder=''
                  onKeyUp={this.handleChangeClassName}
                  defaultValue={input.className}
                  // isInvalid={validate.className}
                />
                {/* <Form.Control.Feedback type='invalid'>
                  {errors.className}
                </Form.Control.Feedback> */}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group as={Row} controlId={input.trainerName}>
            <Form.Label column lg={2} style={{ textAlign: 'right' }}>
              Trainer Name
            </Form.Label>
            <Col lg={4}>
              <Form.Control
                type='text'
                placeholder=''
                onKeyUp={this.handleChangeTrainerName}
                defaultValue={input.trainerName}
                required
                // isInvalid={validate.trainerName}
              />
              {/* <Form.Control.Feedback type='invalid'>
                {errors.trainerName}
              </Form.Control.Feedback> */}
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId={input.expireWithIn}>
            <Form.Label column lg={2} style={{ textAlign: 'right' }}>
              Expired With In
            </Form.Label>
            <Col lg={3}>
              <Form.Control
                type='number'
                placeholder=''
                onKeyUp={this.handleChangeExpire}
                value={input.expireIn}
                required
                // isInvalid={validate.expireWithIn}
              />
              {/* <Form.Control.Feedback type='invalid'>
                {errors.expireIn}
              </Form.Control.Feedback> */}
            </Col>
            <Form.Label style={{ marginLeft: '20px' }}>
              <Row> Days</Row>
              <Row> (count since join class data)</Row>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column lg={2} style={{ textAlign: 'right' }}>
              Price(THB)/Times
            </Form.Label>
            <Col lg={2}>
              <Form.Control
                type='number'
                placeholder=''
                onKeyUp={this.handleChangePrice}
                value={input.price}
                required
                // isInvalid={validate.price}
              />
              {/* <Form.Control.Feedback type='invalid'>
                {errors.price}
              </Form.Control.Feedback> */}
            </Col>
            <Form.Label> / </Form.Label>
            <Col lg={2}>
              <Form.Control
                type='number'
                placeholder=''
                onKeyUp={this.handleChangeTime}
                value={input.time}
                required
                // isInvalid={validate.time}
              />
              {/* <Form.Control.Feedback type='invalid'>
                {errors.time}
              </Form.Control.Feedback> */}
            </Col>
          </Form.Group>
        </BodyPanel>
      </Panel>
    );
  }
}
