import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  FieldWrapper
} from './styled'

/**
 * Field description:
 * - base component Field
 */

export class Field extends React.PureComponent {
  render() {
    const {
      ui,
      fluid,
      error,
      success,
      disabled,
      label,
      hint,
      type,
      id,
      name,
      value,
      onChange,
      placeholder,
      checked,
      checkboxCheckedIcon,
      checkboxLabel,
      radioCheckedIcon,
      radioLabel,
      fileName,
      accept,
      buttonBrowse,
      buttonDeleteUpload,
      info,
      className,
      switchName,
      switchOuterName,
      inputTextType,
      maxLength,
      onKeyPress,
      fieldIcon,
      onClickFieldIcon,
      fieldIconActive,
      message,
      fileImage,
      buttonUpload,
      children,
      autoComplete,
      min,
      max
    } = this.props

    const classes = ClassNames(
      'field',
      { [`field-${ui}`]: ui },
      { [`field-fluid`] : fluid },
      { [`is-error`] : error },
      { [`is-success`] : success },
      { [`is-disabled`] : disabled },
      className
    )

    return (
      <FieldWrapper
        className={classes}
      >
        <div className='field-container'>
          { label &&
            <label className='field-label'>
              {label}
            </label>
          }
          <div className='field-group'>
            <div className='field-group-inner'>
              {/* Select field element */}
              {(() => {
                switch (type) {
                  case 'textarea':
                    return (
                      <textarea
                        className='field-value field-textarea'
                        placeholder={placeholder}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                      />
                    )
                  case 'select':
                    return (
                      <select
                        className='field-value field-select'
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                      >
                        {children}
                      </select>
                    )
                  case 'checkbox':
                    return (
                      <div className='field-checkbox'>
                        <input className='field-checkbox-value'
                          type='checkbox'
                          id={id}
                          name={name}
                          value={value}
                          checked={checked}
                          onChange={onChange}
                        />
                        <label className='field-checkbox-label'
                          htmlFor={id}
                        >
                          <span className='field-checkbox-icon'>
                            <span className='field-checkbox-icon-checked'>
                              {checkboxCheckedIcon}
                            </span>
                          </span>
                          <span className='field-checkbox-icon-label'>
                            {checkboxLabel}
                          </span>
                        </label>
                      </div>
                    )
                  case 'radio':
                    return (
                      <div className='field-radio'>
                        <input className='field-radio-value'
                          type='radio'
                          id={id}
                          name={name}
                          value={value}
                          checked={checked}
                          onChange={onChange}
                        />
                        <label className='field-radio-label'
                          htmlFor={id}
                        >
                          <span className='field-radio-icon'>
                            <span className='field-radio-icon-checked'>
                              {radioCheckedIcon}
                            </span>
                          </span>
                          <span className='field-radio-icon-label'>
                            {radioLabel}
                          </span>
                        </label>
                      </div>
                    )
                  case 'file':
                    return (
                      <div className='field-file'>
                        <div className='field-file-name'>
                          <span className='field-file-name-text'>
                            {fileName}
                          </span>
                        </div>
                        <div className='field-file-button'>
                          <input className='field-file-input'
                            type='file'
                            id={id}
                            name={name}
                            value={value}
                            onChange={onChange}
                            accept={accept}
                          />
                          <div className='field-file-button-browse'>
                            {buttonBrowse}
                          </div>
                        </div>
                        <div className='field-file-button-upload'>
                          {buttonUpload}
                        </div>
                      </div>
                    )
                  case 'fileAvatar':
                    return (
                      <div className='field-file is-avatar'>
                        <div className='field-file-image'>
                          {fileImage}
                        </div>
                        <div className='field-file-button-group'>
                          <div className='field-file-button'>
                            <input className='field-file-input'
                              type='file'
                              id={id}
                              name={name}
                              value={value}
                              onChange={onChange}
                              accept={accept}
                            />
                            <div className='field-file-button-browse'>
                              {buttonBrowse}
                            </div>
                          </div>
                          <div className='field-file-button-delete-upload'>
                            {buttonDeleteUpload}
                          </div>
                        </div>
                      </div>
                    )
                  case 'info':
                    return (
                      <div className='field-info'>
                        <span className='field-info-text'>
                          {info}
                        </span>
                      </div>
                    )
                  case 'switch':
                    return (
                      <div className='field-switch'>
                        <input className='field-switch-input'
                          type='checkbox'
                          id={id}
                          name={name}
                          value={value}
                          checked={checked}
                          onChange={onChange}
                        />
                        <label className='field-switch-body'
                          htmlFor={id}
                        >
                          <span className='field-switch-button' />
                          { switchName &&
                            <span className='field-switch-name'>
                              {switchName}
                            </span>
                          }
                        </label>
                        { switchOuterName &&
                          <span className='field-switch-name-outer'>
                            {switchOuterName}
                          </span>
                        }
                      </div>
                    )
                  case 'upload':
                    return (
                      <div className={ClassNames(
                        'upload-input-wrapper',
                        { 'is-file-selected': this.state.message },
                        )}
                      >
                        <label
                          htmlFor={id}
                          className='upload-input fake'
                        >
                          {this.state.message ? this.state.message : children}
                        </label>

                        {/* {
                          this.state.message &&
                          <Image
                            className='icon-delete-upload'
                            src={ICONS['ic-operation-delete.svg']}
                            alt='icon delete upload'
                            onClick={this.clearUpload}
                          />
                        } */}

                        <input
                          type='file'
                          id={id}
                          className='upload-input real'
                          value={this.state.value}
                          onChange={this.getUploadedFileName}
                        />
                      </div>
                    )
                  default:
                    return (
                      <input
                        className='field-value'
                        type={inputTextType}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        autoComplete={autoComplete}
                        min={min} 
                        max={max}
                      />
                    )
                }
              })()}
              { fieldIcon &&
                <div
                  className={ClassNames(
                    'field-icon',
                    {'clickable': onClickFieldIcon}
                  )}
                  onClick={onClickFieldIcon}
                >
                  { fieldIconActive ?
                    fieldIconActive
                    :
                    fieldIcon
                  }
                </div>
              }
            </div>
            { message &&
              <div className='field-message' id={`${id}-message`}>
                {message}
              </div>
            }
          </div>
          { hint &&
            <div className='field-hint'>
              {hint}
            </div>
          }
        </div>
      </FieldWrapper>
    )
  }

  static defaultProps = {
    inputTextType: 'text',
  }

  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ])
  }
}
