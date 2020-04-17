import React, { Component } from 'react';
import {
  ClassInformation,
  HeaderLiveFit,
  ScheduleList,
} from '../../components';
import group from '../../assets/image/group.png';
import { Form, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ReactNotification from 'react-notifications-component';
import { Link } from 'react-router-dom';
import plus from '../../assets/image/plus.png';
import { GymClassService } from '../../service/api';
import { CONSTANTS } from '../../helpers';
import {
  Body,
  LabelStyle,
  Footer,
  ButtonConfirm,
  ButtonCancel,
  Content,
  Panel,
  HeaderPanel,
  BodyPanel,
  ButtonAddMore,
} from './styled';
import './createClass.css';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

var moment = require('moment');
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
class CreateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        classInform: {
          className: '',
          trainerName: '',
          expireWithIn: 0,
          price: 0,
          time: 0,
        },
        hourList: [
          {
            day: null,
            openDate: null,
            closeDate: null,
          },
        ],
        isRepeateWeekly: false,
        id: this.props.match.params.id,
      },
    };
  }

  componentDidMount() {
    this.props.match.params.id !== 'create' && this.func.api.getById();
  }

  func = {
    input: {
      onChangeSelectInList: (value, id, list, index) => {
        const { input } = this.state;
        input[list][index][id] = value;
        console.log(value);
        if (
          input[list][index][id] &&
          input[list][index][id].value < new Date().getDay()
        ) {
          console.log('more');
          const futureDay = moment().add(1, 'week');
          input[list][index]['openDate'] = new Date(
            futureDay.subtract(
              new Date().getDay() - input[list][index][id].value,
              'days'
            )
          );
        } else if (
          input[list][index][id] &&
          input[list][index][id].value > new Date().getDay()
        ) {
          console.log('less');
          input[list][index]['openDate'] = new Date(
            moment().add(
              input[list][index][id].value - new Date().getDay(),
              'days'
            )
          );
        } else {
          input[list][index]['openDate'] = new Date();
        }
        if (
          input[list][index][id] &&
          input[list][index][id].value < new Date().getDay()
        ) {
          const futureDay = moment().add(1, 'week');
          input[list][index]['closeDate'] = new Date(
            futureDay.subtract(
              new Date().getDay() - input[list][index][id].value,
              'days'
            )
          );
        } else if (
          input[list][index][id] &&
          input[list][index][id].value > new Date().getDay()
        ) {
          input[list][index]['closeDate'] = new Date(
            moment().add(
              input[list][index][id].value - new Date().getDay(),
              'days'
            )
          );
        } else {
          input[list][index]['closeDate'] = new Date();
        }
        this.setState({ input });
      },
      onChangeStartDateInList: (value, id, list, index) => {
        const { input } = this.state;
        input[list][index][id] = value;
        this.setState({ input });
      },
      onChangeEndDateInList: (value, id, list, index) => {
        const { input } = this.state;
        input[list][index][id] = value;
        this.setState({ input });
      },
    },
    event: {
      onClickAddHour: () => {
        const { input } = this.state;
        input.hourList.push({
          day: null,
          openDate: null,
          closeDate: null,
        });
        this.setState({ input });
      },
      getScheduleList: () => {
        const { input } = this.state;
        let result = [];
        input.hourList.forEach((item) => {
          if (item.day && item.openDate && item.closeDate) {
            result.push({
              day_name: dayList[item.day.value],
              open_time: item.openDate,
              close_time: item.closeDate,
            });
          }
        });
        return result;
      },
      checkForm: () => {
        const { input } = this.state;
        let warning = '';
        if (!input.classInform.className) {
          warning += 'Please Enter Class Name \n';
        }
        if (!input.classInform.trainerName) {
          warning += 'Please Enter Trainer Name \n';
        }
        if (!input.classInform.expireWithIn) {
          warning += 'Please Enter Expire \n';
        }
        if (!input.classInform.price) {
          warning += 'Please Enter Price \n';
        }
        if (!input.classInform.time) {
          warning += 'Please Enter Time \n';
        }
        input.hourList.map((rs) => {
          if (
            rs.day === null ||
            rs.openDate === null ||
            rs.closeDate === null
          ) {
            warning += 'Please Choose day \n';
          }
          return warning;
        });
        this.func.event.formValidMessage(warning);
      },
      formValidMessage: (message) => {
        store.addNotification({
          title: (
            <div style={{ textAlign: 'left', color: 'white' }}>Warning !</div>
          ),
          message: (
            <div style={{ textAlign: 'left', color: 'white' }}>{message}</div>
          ),
          type: 'warning',
          container: 'top-right',
          insert: 'top',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      },
      handleFormCheck: () => {
        const { input } = this.state;
        if (
          input.classInform.className !== '' &&
          input.classInform.trainerName !== '' &&
          input.classInform.expireWithIn !== 0 &&
          input.classInform.price !== 0 &&
          input.classInform.time !== 0
        ) {
          input.id === 'create'
            ? this.func.api.callCreateClass()
            : this.func.api.updateClass();
        } else {
          this.func.event.checkForm();
        }
      },
      handleFormCheckBox: () => {
        this.setState({ isRepeateWeekly: !this.state.isRepeateWeekly });
      },
    },

    api: {
      callCreateClass: async () => {
        const { input } = this.state;
        console.log(input);
        const request = {
          name: input.classInform.className,
          trainer_name: input.classInform.trainerName,
          exp_day_amt: +input.classInform.expireWithIn,
          snappink_price: +input.classInform.price,
          course_times: +input.classInform.time,
          class_hours: this.func.event.getScheduleList(),
          is_repeat_weekly: input.isRepeateWeekly,
        };
        const formData = new FormData();
        formData.append('request', JSON.stringify(request));
        const gymClassService = GymClassService({ isShowToastSuccess: true });
        const res = await gymClassService.createClass(formData);
        if (res) {
          window.location.href = '/class';
        }
      },
      getById: async () => {
        const { input } = this.state;
        const gymClassService = GymClassService({ isShowToastSuccess: true });
        const res = await gymClassService.getById(input.id);
        if (res) {
          let { input } = this.state;
          let hourList = [];
          input.classInform.className = res.name;
          input.classInform.trainerName = res.trainer_name;
          input.classInform.expireWithIn = res.exp_day_amt;
          input.classInform.price = res.snappink_price;
          input.classInform.time = res.course_times;
          res.class_hours.forEach((item) => {
            hourList.push({
              day: CONSTANTS.day.find(
                (day) => dayList[day.value] === item.day_name
              ),
              openDate: new Date(item.open_time),
              closeDate: new Date(item.close_time),
            });
          });
          input.hourList = hourList;
          input.isRepeateWeekly = res.is_repeat_weekly;
        }

        this.setState({ input });
      },
      updateClass: async () => {
        const { input } = this.state;
        console.log(input);
        const request = {
          _id: input.id,
          name: input.classInform.className,
          trainer_name: input.classInform.trainerName,
          exp_day_amt: +input.classInform.expireWithIn,
          snappink_price: +input.classInform.price,
          course_times: +input.classInform.time,
          class_hours: this.func.event.getScheduleList(),
          is_repeat_weekly: input.isRepeateWeekly,
        };
        const formData = new FormData();
        formData.append('request', JSON.stringify(request));
        const gymClassService = GymClassService({ isShowToastSuccess: true });
        const res = await gymClassService.updateClass(formData, input.id);
        if (res) {
          window.location.href = 'class';
        }
      },
    },
  };

  render() {
    const { input, validate } = this.state;
    return (
      <div>
        <HeaderLiveFit />
        <Body>
          <ReactNotification />
          <div style={{ width: '100%' }}>
            <div className='row pt-3 pb-3 pl-5 pr-5 ml-2 mr-2'>
              <img src={group} alt='Logo' height='50px' width='50px' />
              <Col>
                <LabelStyle>Class</LabelStyle>
                <Breadcrumb>
                  <Breadcrumb.Item href='/class'>
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
              classInform={input.classInform}
              validate={validate}
            ></ClassInformation>
            <Panel>
              <HeaderPanel>
                <label style={{ color: 'white' }}>Live Schedule</label>
              </HeaderPanel>
              <BodyPanel>
                {input.hourList.map((e, i) => (
                  <ScheduleList
                    key={i}
                    e={e}
                    i={i}
                    onChangeSelectInList={this.func.input.onChangeSelectInList}
                    onChangeStartDateInList={
                      this.func.input.onChangeStartDateInList
                    }
                    onChangeEndDateInList={
                      this.func.input.onChangeEndDateInList
                    }
                  />
                ))}
                ;
                <Row>
                  <Col lg={2}></Col>
                  <Col>
                    <Form.Check
                      type='checkbox'
                      label='Repeat weekly'
                      onChange={this.func.event.handleFormCheckBox}
                    />
                  </Col>
                </Row>
                <ButtonAddMore
                  style={{ backgroundColor: '#1e3064' }}
                  type='button'
                  onClick={this.func.event.onClickAddHour}
                  className='small'
                >
                  <img src={plus} alt='Logo' />
                  Add More
                </ButtonAddMore>
              </BodyPanel>
              <Footer>
                <Link to='/fit'>
                  <ButtonCancel
                    type='button'
                    style={{ backgroundColor: '#bbbbbb' }}
                  >
                    Cancel
                  </ButtonCancel>
                </Link>
                <ButtonConfirm
                  type='button'
                  style={{ backgroundColor: '#1e3064' }}
                  onClick={this.func.event.handleFormCheck}
                >
                  Save
                </ButtonConfirm>
              </Footer>
            </Panel>
          </Content>
        </Form>
      </div>
    );
  }
}

export default CreateClass;
