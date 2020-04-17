import styled, {
  // css
} from 'styled-components'
import {
  COLORS,
  MIXINS
} from '../../themes'

// Field Wrapper
// ============================================================
export const FieldWrapper = styled.div`
  /* Parent
  ------------------------------- */
  display: inline-block;

  /* Childrens
  ------------------------------- */
  .field-container {
    display: flex;
  }

  .field-label {
    flex: none;
  }

  .field-group-inner {
    position: relative;
  }

  .field-value,
  .field-file-name,
  .field-info-text {
    ${MIXINS.PLACEHOLDER(COLORS.GRAY_1)};
    color: ${COLORS.BLUE_2};
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${COLORS.WHITE};
    border-radius: 5px;
    border: 1px solid ${COLORS.GRAY_2};
    height: 42px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &.field-textarea {
      resize: none;
    }

    &.field-select {
      cursor: pointer;
    }
  }

  .field-icon {
    pointer-events: none;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &.clickable {
      pointer-events: auto;
      cursor: pointer;
    }
  }

  .field-checkbox,
  .field-radio {
    cursor: pointer;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .field-checkbox-label,
  .field-radio-label {
    display: flex;
    align-items: center;
  }

  .field-checkbox-value,
  .field-radio-value {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:checked {
      + .field-checkbox-label,
      + .field-radio-label {
        .field-checkbox-icon,
        .field-radio-icon {
          background-color: ${COLORS.PINK_1};
          border-color: ${COLORS.PINK_1};
        }

        .field-checkbox-icon-checked,
        .field-radio-icon-checked {
          visibility: visible;
          opacity: 1;
        }

        .field-checkbox-icon-label,
        .field-radio-icon-label {
          color: ${COLORS.BLUE_2};
        }
      }
    }
  }

  .field-checkbox-icon,
  .field-radio-icon {
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${COLORS.WHITE};
    border-radius: 5px;
    border: 1px solid ${COLORS.GRAY_2};
  }

  .field-radio-icon {
    border-radius: 50%;
  }

  .field-checkbox-icon-checked,
  .field-radio-icon-checked {
    visibility: hidden;
    opacity: 0;
    position : absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .field-checkbox-icon-label,
  .field-radio-icon-label {
    transition: all 0.3s ease;
    flex: none;
    color: ${COLORS.BLUE_2};
    margin-left: 15px;
  }

  .field-file {
    display: flex;
    align-items: center;

    .field-file-name {
      display: none;
    }
  }

  .field-file-input {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    font-size: 100px; /* Area for clickable */

    &:focus {
      outline: none;
    }

    &::-webkit-file-upload-button {
      cursor: pointer;
    }
  }

  .field-file-button {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    flex: none;



    .field-file-input {
      z-index: 9;
      font-size: 175px;
    }
  }

  .field-switch {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
  }

  .field-switch-input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:checked {
      + .field-switch-body {
        background-color: ${COLORS.GREEN_1};

        .field-switch-button {
          transform: translate(30px, -50%);
          background-color: ${COLORS.WHITE};
        }
      }
    }
  }

  .field-switch-body {
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex: none;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 32px;
    /* border:  2px solid ${COLORS.BLACK}; */
    background-color: ${COLORS.GRAY_2};
    border-radius: 16px;
  }

  .field-switch-button {
    pointer-events: none;
    transition: all 0.3s ease;
    transform: translateY(-50%);
    position: absolute;
    z-index: 2;
    top: 50%;
    display: block;

    left: 4px;
    width: 26px;
    height: 26px;

    background-color: ${COLORS.WHITE};
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
  }

  /* Modifiers
  ------------------------------- */
  &.fluid {
    width: 100%;

    .field-group {
      width: 100%;
    }
  }

  &.field-login {
    margin-bottom: 20px;

    &.forgot-password {
      max-width: 500px;
    }

    .field-value,
    .field-file-name,
    .field-info-text {
      /* border-color: ${COLORS.TRANSPARENT}; */
    }
  }

  &.field-search {
    .field-value {
      min-width: 315px;
      padding-left: 50px;
    }

    .field-icon {
      width: 50px;
      height: 40px;
      top: 1px;
      left: 1px;
    }
  }

  &.field-form {
    .field-value,
    .field-file-name,
    .field-info-text {
      &.field-textarea {
        min-height: 125px;
        padding-top: 10px;
      }
    }
  }

  &.field-circle {
    .field-checkbox-icon {
      border-color: ${COLORS.GRAY_8};
      background-color: ${COLORS.GRAY_8};
      border-radius: 50%;
    }
  }

  &.field-limit {
    padding-top: 10px;
  }

  &.field-bg-default {
    .field-checkbox-icon {
      border-color: ${COLORS.GRAY_8};
      background-color: ${COLORS.GRAY_8};
    }
  }

  &.field-chat {
    .field-value,
    .field-file-name,
    .field-info-text {
      &.field-textarea {
        min-height: 125px;
        padding: 0;
        border: none;
      }
    }
  }
  /*  Modifier state
  -------------------- */
  &.is-error {
    .field-value,
    .field-file-name {
      border-color: ${COLORS.RED_1};
      border-width: 2px;
    }

    .field-message {
      color: ${COLORS.RED_1};
      font-size: 14px;
      padding-top: 5px;
    }
  }

  &.is-disabled {
    .field-value,
    .field-file-name,
    .field-icon,
    .field-checkbox-value,
    .field-checkbox-icon {
      pointer-events: none;
      background-color: ${COLORS.GRAY_8};
    }

    .field-value,
    .field-file,
    .field-switch {
      pointer-events: none;
      cursor: none;
    }
  }

  &.field {
    &.is-error {
      .field-icon {
        position: absolute;
        right: 10px;
        top: 15px;
      }
    }
  }

  &.field-login {
    &.is-error {
      .field-icon {
        position: absolute;
        right: 10px;
        top: 15px;
      }
    }
  }

  &.field-password {
    .field-icon {
      position: absolute;
      right: 20px;
      top: 10px;
    }
  }

  /* Media queries
  ------------------------------- */
  @media (max-width: 1649.98px) {
    &.field-search {
      .field-value {
        min-width: 250px;
      }
    }
  }
`