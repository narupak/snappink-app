import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderLiveFit from '../../component/header-live-fit/HeaderLiveFit';
import ClassInformation from '../../component/class-information/ClassInformation';
import LiveSchedule from '../../component/live-schedule/LiveSchedule';
import group from '../../assets/image/group.png';
import { Button, Form, Row , Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  padding-left: 50px;
  padding-top: 20px;
  padding-right: 50px;
`;

const HeaderSideLeft = styled.div`
  text-align: left;
  float: left;
`;

const LabelStyle = styled.div`
  font-size: 30px;
  font-family: Roboto;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  background-color: white;
  height: 100vh;
`;

const HeaderBody = styled.div`
  width: 100%;
  height: 10vh;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  text-align: right;
  padding-right: 50px;
`;

const ButtonConfirm = styled(Button)`
  background-color: #1e3064;
  color: white;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 30px;
`;

const ButtonCancel = styled(Button)`
  background-color: #bbbbbb;
  color: white;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 50px;
`;

class CreateClass extends Component {
  constructor() {
    super();
    this.state = {
      classInform: {
        className: '',
        trainerName: '',
        expireWithIn: 0,
        price: 0,
        time: 0,
      },
      scheduleList: [
        {
          day: { label: 'Choose day', value: '9' },
          start: { label: 'Choose time', value: '9' },
          stop: { label: 'Choose time', value: '9' },
        },
      ],
    };
  }

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <HeaderLiveFit></HeaderLiveFit>
        <Body>
          <HeaderBody>
            <HeaderSideLeft>
              <Row>
                <img src={group} alt='Logo' width='50px' height='50px'/>
                <Col>
                  <LabelStyle>Class</LabelStyle>
                  <Breadcrumb>
                    <Breadcrumb.Item href='/main'><label style={{ fontSize: "12px"}}>Class</label></Breadcrumb.Item>
                    <Breadcrumb.Item active><label style={{ fontSize: "12px"}}>Create Class</label></Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </HeaderSideLeft>
          </HeaderBody>
          <Form>
            <Content>
              <ClassInformation
                classInform={this.state.classInform}
              ></ClassInformation>
              <LiveSchedule
                scheduleList={this.state.scheduleList}
              ></LiveSchedule>
              <Footer>
                <ButtonCancel>Cancel</ButtonCancel>
                <ButtonConfirm type='button' onClick={this.handleSubmit}>
                  Save
                </ButtonConfirm>
              </Footer>
            </Content>
          </Form>
        </Body>
      </div>
    );
  }
}

export default CreateClass;
