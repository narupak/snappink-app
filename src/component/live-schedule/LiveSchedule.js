import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import plus from '../../assets/image/plus.png';

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
`;

const BodyPanel = styled.div`
  width: 100%;
  hight: 50%;
  padding-left: 50px;
  padding-top: 20px;
`;

const ButtonAddMore = styled(Button)`
  background-color: #1e3064;
  color: white;
  font-size: 14px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 400px;
`;

let timeList = [];
const minuteList = ['00', '30'];
for (let hour = 1; hour <= 24; hour++) {
  minuteList.map((min) => {
    return timeList.push({
      label: `${hour} : ${min} ${hour > 12 ? 'PM' : 'AM'}`,
      value: `${hour} : ${min}`,
    });
  });
}

class LiveSchedule extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleAddFormSchedule = () => {
    this.setState({
      shareholders: this.props.scheduleList.push({
        day: { label: 'Choose day', value: '9' },
        start: { label: 'Choose time', value: '9' },
        stop: { label: 'Choose time', value: '9' },
      }),
    });
  };

  handleChange(event, i) {
    this.props.scheduleList.map((sche, index) => {
      if (index === i) {
        sche.day = event;
        this.setState({ sche });
      }
      return sche;
    });
  }

  handleChangeStartTime(event, i) {
    this.props.scheduleList.map((sche, index) => {
      if (index === i) {
        sche.start = event;
        this.setState({ sche });
      }
      return sche;
    });
  }

  handleChangestopTime(event, i) {
    this.props.scheduleList.map((sche, index) => {
      if (index === i) {
        sche.stop = event;
        this.setState({ sche });
      }
      return sche;
    });
  }
  render() {

    const scheduleList = this.props.scheduleList;
    return (
      <Panel>
        <HeaderPanel>
          <label style={{ color: 'white' }}>Live Schedule</label>
        </HeaderPanel>
        <BodyPanel>
            {scheduleList.map((schedule, index) => (
              <div>
                <Form.Group as={Row}>
                  <Form.Label column lg={2} style={{ textAlign: 'right' }}>
                    Day
                  </Form.Label>
                  <Col lg={2}>
                    <Dropdown style={{ width : "100%"}}>
                      <Dropdown.Toggle>{schedule.day.label}</Dropdown.Toggle>
                      <Dropdown.Menu>
                        {[
                          { label: 'Sunday', value: 0 },
                          { label: 'Monday', value: 1 },
                          { label: 'ThuesDay', value: 2 },
                          { label: 'WednesDay', value: 3 },
                          { label: 'ThursDay', value: 4 },
                          { label: 'FriDay', value: 5 },
                          { label: 'SaturDay', value: 6 },
                        ].map((e) => (
                          <Dropdown.Item
                            eventKey='{e}'
                            onSelect={() => this.handleChange(e, index)}
                          >
                            {e.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Form.Label column lg={1} style={{ textAlign: 'right' }}>
                    Start
                  </Form.Label>
                  <Col lg={2}>
                    <Dropdown style={{ maxHeight: '300px' }}>
                      <Dropdown.Toggle>{schedule.start.label}</Dropdown.Toggle>
                      <Dropdown.Menu>
                        {timeList.map((e) => (
                          <Dropdown.Item
                            onSelect={() =>
                              this.handleChangeStartTime(e, index)
                            }
                            eventKey='{e}'
                          >
                            {e.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Form.Label column lg={1} style={{ textAlign: 'right' }}>
                    Stop
                  </Form.Label>
                  <Col lg={2}>
                    <Dropdown style={{ maxHeight: '300px' }}>
                      <Dropdown.Toggle>{schedule.stop.label}</Dropdown.Toggle>
                      <Dropdown.Menu>
                        {timeList.map((e) => (
                          <Dropdown.Item
                            onSelect={() =>
                              this.handleChangestopTime(e, index)
                            }
                            eventKey='{e}'
                          >
                            {e.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Form.Group>
              </div>
            ))}
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

