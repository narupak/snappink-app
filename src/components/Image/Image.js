import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ImageWrapper
} from './styled'

/**
 * Image description:
 * - image
 */

export class Image extends React.PureComponent {
  render() {
    const {
      src,
      alt,
      id,
      className,
      onClick
    } = this.props

    const classes = ClassNames(
      'image',
      { [`clickable`]: onClick },
      className
    )

    return (
      <ImageWrapper
        className={classes}
        onClick={onClick}
      >
        <img className='image-ratio-base'
          src={src}
          alt={alt}
          id={id}
        />
      </ImageWrapper>
    )
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ])
  }
}
