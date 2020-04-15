import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderLiveFit from '../../component/header-live-fit/HeaderLiveFit';
import ClassInformation from '../../component/class-information/ClassInformation';
import LiveSchedule from '../../component/live-schedule/LiveSchedule';
import group from '../../assets/image/group.png';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {
  Link
} from "react-router-dom";

const Body = styled.div`
  width: 100%;
`;


const LabelStyle = styled.div`
  font-size: 22px;
  font-family: Roboto;
  font-weight: bold;
  margin-bottom: 0px;
  color: rgb(30, 48, 100);
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

const Content = styled.div`
  background-color: white;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
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

  clearForm = () => {
    this.setState({
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
    });
  };

  handleSubmit = () => {
    // const formRequest = new
    // let formData = new FormData();
    // formData.append('name' , this.state.classInform.className)
    // formData.append('trainer_name' , this.state.classInform.trainerName)
    // formData.append('exp_day_amt' , this.state.classInform.expireWithIn)
    // formData.append('snappink_price' , this.state.classInform.price)
    // formData.append('course_times' , this.state.classInform.time)
    // formData.append('class_hours' , null)
    // formData.append('is_repeat_weekly' , false)
    const dataJson = JSON.parse(localStorage.getItem('user'));
    const url = 'https://api-staging.snappink.com/api/gym_class/v1';
    const data = {
      request: {
        name: this.state.classInform.className,
        trainer_name: this.state.classInform.trainerName,
        exp_day_amt: this.state.classInform.expireWithIn,
        snappink_price: this.state.classInform.price,
        course_times: this.state.classInform.time,
        class_hours: null,
        is_repeat_weekly: false,
      },
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        token: dataJson.token,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        if (response.result) {
          console.log(response.result);
        } else {
          // this.hadleLoginFail(response.message);
        }
      });
  };

  render() {
    return (
      <div>
        <HeaderLiveFit />
        <Body>
          <div style={{ width: '100%' }}>
            <div className='row pt-3 pb-3 pl-5 pr-5 ml-2 mr-2'>
              <img src={group} alt='Logo' width='50px' />
              <Col>
                <LabelStyle>Class</LabelStyle>
                <Breadcrumb>
                  <Breadcrumb.Item href='/fit'>
                    <label style={{ fontSize: '12px' }}>Class</label>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    <label style={{ fontSize: '12px' }}>Create Class</label>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </div>
          </div>
        </Body>
        <Form>
          <Content>
            <ClassInformation
              classInform={this.state.classInform}
            ></ClassInformation>
            <LiveSchedule scheduleList={this.state.scheduleList}></LiveSchedule>
            <Footer>
              <Link to='/fit'>
                <ButtonCancel type='button' onClick={this.clearForm}>
                  Cancel
                </ButtonCancel>
              </Link>
              <ButtonConfirm type='button' onClick={this.handleSubmit}>
                Save
              </ButtonConfirm>
            </Footer>
          </Content>
        </Form>
      </div>
    );
  }
}

export default CreateClass;
