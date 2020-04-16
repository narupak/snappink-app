import {
  css
} from 'styled-components'
import {
  // COLORS,
  FONTS
} from '../variables'

// Text default style
// ============================================================
const DEFAULT_PROPS = css`
  font-weight: normal;
  vertical-align: middle;
  text-transform: none;
`

export const TYPOGRAPHYS = {
  FRIST_1: css`
    ${DEFAULT_PROPS};
    font-size: ${FONTS.SIZES.FIRST_1};
  `,
}

// console.log('test' + COLORS.BLACK)
