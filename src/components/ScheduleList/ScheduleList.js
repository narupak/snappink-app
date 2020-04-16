import React, { Component } from 'react';
import { SelectAutoSearch } from '../SelectAutoSearch';
import { DatePickerInput } from '../DatePickerInput';
import { CONSTANTS } from '../../helpers';
import { Form, Row, Col} from 'react-bootstrap';

export class ScheduleList extends Component {
  render() {
    const { e, i, onChangeSelectInList, onChangeDateInList } = this.props;
    return (
      <Form.Group as={Row}>
        <Form.Label column lg={2} style={{ textAlign: 'right' }}>
          Day
        </Form.Label>
        <Col lg={2}>
          <SelectAutoSearch
            isSearchable={false}
            placeholder='Choose Day'
            id='day'
            value={e.day}
            onChange={(e) => {
              onChangeSelectInList(e, 'day', 'hourList', i);
            }}
            options={CONSTANTS.day}
            className='field-form'
          />
        </Col>
        <Form.Label column lg={1} style={{ textAlign: 'right' }}>
          Open
        </Form.Label>
        <Col lg={2}>
          <DatePickerInput
            dateFormat='h:mm aa'
            placeholderText='Choose Time'
            selected={e.openDate}
            onChange={(date) =>
              onChangeDateInList(date, 'openDate', 'hourList', i)
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption='time'
          />
        </Col>
        <Form.Label column lg={1} style={{ textAlign: 'right' }}>
          Close
        </Form.Label>
        <Col lg={2}>
          <DatePickerInput
            dateFormat='h:mm aa'
            placeholderText='Choose Time'
            selected={e.closeDate}
            onChange={(date) =>
              onChangeDateInList(date, 'closeDate', 'hourList', i)
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption='time'
          />
        </Col>
      </Form.Group>
    );
  }
}
