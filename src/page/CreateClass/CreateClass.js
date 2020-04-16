import React, { Component } from 'react';
import { ClassInformation,HeaderLiveFit,ScheduleList } from '../../components';
import group from '../../assets/image/group.png';
import { Form, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ReactNotification from 'react-notifications-component';
import { Link } from 'react-router-dom';
import plus from '../../assets/image/plus.png';
import { GymClassService } from '../../service/api';
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
      },
    };
  }

  componentDidMount() {}

  func = {
    input: {
      onChangeSelectInList: (value, id, list, index) => {
        const { input } = this.state;
        input[list][index][id] = value;
        this.setState({ input });
      },
      onChangeDateInList: (value, id, list, index) => {
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
              day_name: item.day.value,
              open_time: item.openDate,
              close_time: item.closeDate,
            });
          }
        });
        return result;
      },
    },

    api: {
      callCreateClass: async () => {
        const { input } = this.state;
        const request = {
          name: input.classInform.className,
          trainer_name: input.classInform.trainerName,
          exp_day_amt: input.classInform.expireWithIn.toString(),
          snappink_price: input.classInform.price,
          course_times: input.classInform.time,
          class_hours: this.func.event.getScheduleList(),
          is_repeat_weekly: input.isRepeateWeekly,
        };
        const formData = new FormData();
        formData.append('request', JSON.stringify(request));
        const gymClassService = GymClassService({ isShowToastSuccess: true });
        const res = await gymClassService.createClass(formData);
        if (res) {
          console.log(res);
          // setLoadingRedux(false)
          // redirect(ROUTE_PATH.PARTNER.LINK)
        }
      },
    },

    // validate: {
    //   createPartner: () => {
    //     const { input, upload } = this.state;
    //     let result = validateService('createPartner', input);

    //     //!------>>> Special Validate <<<------!//
    //     if (input.password !== input.confirmPassword) {
    //       result.validate.confirmPassword = 'Password do not match';
    //       result.isValid = false;
    //       console.warn(`confirmPassword is invalid.`);
    //     }
    //     //!------>>> Upload Validate <<<------!//
    //     if (upload.image.profile.validate !== '') {
    //       // result.isValid = false
    //       // console.warn(`image profile is invalid.`)
    //       upload.image.profile.validate = '';
    //     }
    //     if (upload.image.cover.validate !== '') {
    //       // result.isValid = false
    //       // console.warn(`image cover is invalid.`)
    //       upload.image.cover.validate = '';
    //     }
    //     upload.image.gallery.forEach((gallery, index) => {
    //       if (gallery.validate !== '') {
    //         // result.isValid = false
    //         // console.warn(`image gallery[${index}] is invalid.`)
    //         gallery.validate = '';
    //       }
    //     });

    //     this.setState({ validate: result.validate });
    //     return result.isValid;
    //   },
    // },
    // getOfficeHours: () => {
    //   const { input } = this.state;
    //   let result = [];
    //   input.hourList.forEach((item) => {
    //     if (item.day && item.openDate && item.closeDate) {
    //       result.push({
    //         day_name: item.day.value,
    //         open_time: item.openDate,
    //         close_time: item.closeDate,
    //       });
    //     }
    //   });
    //   return result;
    // },
    // },
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <HeaderLiveFit />
        <Body>
          <ReactNotification />
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
              classInform={input.classInform}
            ></ClassInformation>
            <Panel>
              <HeaderPanel>
                <label style={{ color: 'white' }}>Live Schedule</label>
              </HeaderPanel>
              <BodyPanel>
                <Form.Group>
                  {input.hourList.map((e, i) => (
                    <ScheduleList
                      key={i}
                      e={e}
                      i={i}
                      onChangeSelectInList={
                        this.func.input.onChangeSelectInList
                      }
                      onChangeDateInList={this.func.input.onChangeDateInList}
                    />
                  ))}
                  ;
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId='remember'
                  style={{ textAlign: 'left' }}
                >
                  <Col lg={2}></Col>
                  <Col>
                    <Form.Check type='checkbox' label='Repeat weekly' />
                  </Col>
                </Form.Group>

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
                  onClick={this.func.api.callCreateClass}
                  style={{ backgroundColor: '#1e3064' }}
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
