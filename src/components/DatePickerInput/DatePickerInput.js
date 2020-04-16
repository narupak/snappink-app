import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  DatePickerWrapper
} from './styled'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/**
 * Date picker input description:
 * - Date picker input
 */

export class DatePickerInput extends React.PureComponent {
  render () {
    const {
      className,
      error,
      message
    } = this.props

    return (
      <DatePickerWrapper className={ClassNames(
        'date-picker-wrapper',
        { [`is-error`] : error },
        className
      )}>
        <div className='date-picker-select'>
          <DatePicker {...this.props} />
        </div>

        {   message &&
          <div className='date-picker-message'>
            {`${message}`}
          </div>
        }
      </DatePickerWrapper>

    )
  }

  static propTypes = {
    className: PropTypes.string,
    message: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  }
}
