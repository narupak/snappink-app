import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import plus from '../../assets/image/plus.png';
import { HourList } from './addons';

const Panel = styled.div`
  width: 100%;
  height: 50vh;
  padding: 50px;
`;
const HeaderPanel = styled.div`
  padding-left: 10px;
  padding-top: 5px;
  background-color: #f598a4;
  width: 100%;
  height: 15%;
  border-radius: 5px;
`;

const BodyPanel = styled.div`
  width: 100%;
  hight: 50%;
  padding-left: 50px;
  padding-top: 20px;
`;

const ButtonAddMore = styled(Button)`
  color: white;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 400px;
`;

class LiveSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      dayOptions: [
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'Saturday', label: 'Saturday' },
        { value: 'Sunday', label: 'Sunday' },
      ],
    };
  }

  // handleChange(event, i) {
  //   console.log(event);
  //   this.props.scheduleList.map((sche, index) => {
  //     if (index === i) {
  //       sche.day = event;
  //       this.setState({ sche });
  //     }
  //     return sche;
  //   });
  //   this.setState(
  //     { selectedOption },
  //     () => console.log(`Option selected:`, this.state.selectedOption)
  //   );
  // }

  // handleChange = (selectedOption) => {
  //   console.log(selectedOption);
  //   this.setState({ selectedOption }, () =>
  //     console.log(`Option selected:`, this.state.selectedOption)
  //   );
  // };

  // handleChangeStartTime(event, i) {
  //   this.props.scheduleList.map((sche, index) => {
  //     if (index === i) {
  //       sche.start = event;
  //       this.setState({ sche });
  //     }
  //     return sche;
  //   });
  // }

  // handleChangestopTime(event, i) {
  //   this.props.scheduleList.map((sche, index) => {
  //     if (index === i) {
  //       sche.stop = event;
  //       this.setState({ sche });
  //     }
  //     return sche;
  //   });
  //   this.setState({ stopDate: event });
  // }
  render() {
    const {
      startDate,
      stopDate,
      selectedOption,
      statusOptions,
      dayOptions,
      commissionOptions,
    } = this.state;
    const scheduleList = this.props.formSchedule.scheduleList;
    return (
      <Panel>
        <HeaderPanel>
          <label style={{ color: 'white' }}>Live Schedule</label>
        </HeaderPanel>
        <BodyPanel>
          <Form.Group>
            {scheduleList.map((e, i) => {
              <ScheduleList
                key={i}
                e={e}
                i={i}
                onChangeSelectInList={this.func.input.onChangeSelectInList}
                onChangeDateInList={this.func.input.onChangeDateInList}
              />;
            })}
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
            onClick={this.handleAddFormSchedule}
            className='small'
          >
            <img src={plus} alt='Logo' />
            Add More
          </ButtonAddMore>
        </BodyPanel>
      </Panel>
    );
  }
}

export default LiveSchedule;
