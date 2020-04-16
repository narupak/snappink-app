import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Panel,HeaderPanel,BodyPanel } from './styled';

export class ClassInformation extends Component {
  render() {
    
    const classInform = this.props.classInform
    return (
      <Panel>
        <HeaderPanel>
          <label style={{ color: 'white' }}>Class Information</label>
        </HeaderPanel>
        <BodyPanel>
            <Form.Group controlId={classInform.className}>
              <Row>
                <Form.Label column lg={2} style={{ textAlign:"right"}}>
                  Class Name
                </Form.Label>
                <Col lg={4}>
                  <Form.Control type="text" placeholder="" onChange={e => classInform.className = e.target.value} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Row} controlId={classInform.trainerName}>
              <Form.Label column lg={2} style={{ textAlign:"right"}}>
                Trainer Name
              </Form.Label>
              <Col lg={4}>
                <Form.Control type='text' placeholder='' onChange={e => classInform.trainerName = e.target.value} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId={classInform.expireWithIn}>
              <Form.Label column lg={2} style={{ textAlign:"right"}}>
                Expired With In
              </Form.Label>
              <Col lg={3}>
                <Form.Control type='number' placeholder='' onChange={e => classInform.expireWithIn = e.target.value} />
              </Col>
              <Form.Label style={{ marginLeft : "20px" }}>
                <Row> Days</Row>
                <Row> (count since join class data)</Row>
              </Form.Label>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column lg={2} style={{ textAlign:"right"}}>
                Price(THB)/Times
              </Form.Label>
              <Col lg={2}>
                <Form.Control type='number' placeholder='' onChange={e => classInform.price = e.target.value}/>
              </Col>
              <Form.Label> / </Form.Label>
              <Col lg={2}>
                <Form.Control type='number' placeholder='' onChange={e => classInform.time = e.target.value}/>
              </Col>
            </Form.Group>
        </BodyPanel>
      </Panel>
    );
  }
}
