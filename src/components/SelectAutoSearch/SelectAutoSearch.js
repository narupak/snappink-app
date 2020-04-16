import React from 'react'
import ClassNames from 'classnames'
import Select from 'react-select'
import PropTypes from 'prop-types'
import {
  SelectAutoSearchWrapper
} from './styled'

/**
 * SelectAutoSearch description:
 * - SelectAutoSearch
 */

export class SelectAutoSearch extends React.PureComponent {
  render () {
    const {
      className,
      label,
      message,
      error
    } = this.props

    return (
      <SelectAutoSearchWrapper
        className={ClassNames(
          'select-auto-search',
          { [`is-error`] : error },
          className
        )}
      >
        {label &&
          <div className='select-auto-search-label'>
            {label}
          </div>
        }
        <div className='select-auto-search-select'>
          <Select
            {...this.props}
          />
          {message &&
            <div className='select-auto-search-message'>
              {`${message}`}
            </div>
          }
        </div>
      </SelectAutoSearchWrapper>
    )
  }

  static defaultProps = {
    className: 'react-select',
    classNamePrefix: 'react-select',
    theme: {
      colors: {
        primary: 'transparent',  // bg color option selected
        primary25: 'transparent' // bg color option hover
    }}
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
    ]),
    label: PropTypes.string,
    // message: PropTypes.bool,
  }
}
