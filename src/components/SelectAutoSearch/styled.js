import styled from 'styled-components'
import { COLORS } from '../../themes'

// Sample using image in style
// url(${require('./../../../themes/images/icons/icon-sample.svg')});

// Wrapper
// ============================================================
export const SelectAutoSearchWrapper = styled.div`
  /* Parent
  ------------------------------- */
  display: flex;

  /* Childrens
  ------------------------------- */
  .select-auto-search-label {
    flex: none;
  }

  .select-auto-search-select {
    flex: 1;
    width: 200px;
  }

  .select-auto-search-message {
  }

  .react-select {}

  .react-select__control {
    cursor: pointer;
    padding-left: 20px;
    border-color: ${COLORS.GRAY_2};
    box-shadow: none;

    &:hover {
      border-color: ${COLORS.GRAY_2};
    }

    &:focus {
      box-shadow: none;
    }

    &--is-focused {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__placeholder {
    margin-right: 0;
    margin-left: 0;

    + [class*='-Input'] {
      margin: 0;
    }
  }

  .react-select__input {
    input {}
  }

  .react-select__single-value {
    margin-right: 0;
    margin-left: 0;
  }

  .react-select__indicators {
    width: 40px;
    height: 40px;
    background-size: 11px 6px;
  }

  .react-select__indicator-separator,
  .react-select__dropdown-indicator {
    /* display: none; */
  }

  .react-select__menu {
    z-index: 2;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 6px;
    box-shadow: 0 0 0 0 transparent;
    z-index: 1099;
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.GRAY_2};
  }

  .react-select__menu-list {
    padding: 10px 0;
  }

  .react-select__option {
    cursor: pointer;
    padding: 7px 20px;
    height: 36px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${COLORS.BLUE_2};
      color: ${COLORS.WHITE};
    }

    &--is-selected {
    }
  }

  .field-form {
    font-size: 14px;

    &.react-select--is-disabled {
      background-color: ${COLORS.GRAY_8};
    }
  }

  /* Modifiers
  ------------------------------- */
  &.select-status {
    .select-auto-search-select {
      width: 250px;
    }
  }

  /*  Modifier state
  -------------------- */
  &.is-error {
    .react-select__control {
      border-color: ${COLORS.RED_1};
      border-width: 2px;
    }

    .select-auto-search-message {
      color: ${COLORS.RED_1};
      font-size: 14px;
      padding-top: 5px;
    }
  }
  /* Media queries
  ------------------------------- */
`
