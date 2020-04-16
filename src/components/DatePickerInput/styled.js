import styled, {
  // css
} from 'styled-components'
import { COLORS , ICONS  } from '../../themes'

// Wrapper (Fix width 100% in flex container)
// ============================================================
export const DatePickerWrapper = styled.div`
  /* Parent
  ------------------------------- */
  /* background-color: ${COLORS.WHITE};
  border-width: 1px;
  border-color: ${COLORS.GRAY_2};
  border-style: solid;
  border-radius: 6px;
  overflow: hidden;
  color: ${COLORS.BLUE_2}; */

  /* Childrens
  ------------------------------- */
  .date-picker-select {
    display: flex;
    background-color: ${COLORS.WHITE};
    border-width: 1px;
    border-color: ${COLORS.GRAY_2};
    border-style: solid;
    border-radius: 6px;
    overflow: hidden;
    color: ${COLORS.BLUE_2};
  }

  .date-picker-message {

  }

  .react-datepicker-wrapper {
    display: flex;
    width: 100%;

    .input-date{

      ::placeholder {

      }
    }

    .react-datepicker__input-container {
      input {
        cursor: pointer;
        min-height: 42px;
        padding: 0 0 0 20px;
        border: 0;
        color: ${COLORS.BLUE_2};
        font-size: 14px;
        width: 100%;

        ::placeholder {
          font-size: 14px;
          color: ${COLORS.BLUE_2};
        }
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 40px;
        background: url(${ICONS['time-ico.svg']}) no-repeat 10px center;
        background-size: 14px;
        display: flex;
        pointer-events: none;
      }
    }
  }

  .react-datepicker-popper {
    z-index: 2;

    .react-datepicker {
      padding: 0;
      box-shadow: 0 2px 3px rgba(0,0,0,0.05);
      border: 1px solid ${COLORS.GRAY_2};
      color: ${COLORS.BLUE_2};
      display: flex;
    }

    .react-datepicker__triangle {
      border: 1px solid ${COLORS.GRAY_2};
    }

    .react-datepicker__header {
      background-color: ${COLORS.GRAY_5};
      border-bottom: 1px solid ${COLORS.GRAY_2};

      .react-datepicker__year-dropdown-container--select {
        /* position: relative; */

        &::after {
          content: '';
          /* position: absolute;
          width: 11px;
          height: 6px;
          background-size: contain;
          background-repeat: no-repeat;
          right: 0;
          top: 50%;
          transform: translateY(-50%); */
        }
      }

      .react-datepicker__month-dropdown-container--select {
        /* position: relative;
        width: 90px;
        text-align: left;
        margin-right: 10px; */

        &::after {
          content: '';
          /* position: absolute;
          width: 11px;
          height: 6px;
          background-size: contain;
          background-repeat: no-repeat;
          right: 0;
          top: 50%;
          transform: translateY(-50%); */
        }
      }
    }

    .react-datepicker__current-month {
      /* height: 28px;
      line-height: 28px;
      margin-bottom: 5px; */

      &.react-datepicker__current-month--hasYearDropdown {
        /* display: none */
      }

      &.react-datepicker__current-month--hasMonthDropdown {
        /* display: none */
      }
    }

    .react-datepicker-time__header {
      color: ${COLORS.BLUE_2};
    }

    .react-datepicker__day-name {
      /* width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 34px;
      margin: 0; */
    }

    .react-datepicker__day--today {
      /* border-radius: 5px; */
      color: ${COLORS.PINK_1};
    }

    .react-datepicker__day--selected {
      border-radius: 50%;
      background-color: ${COLORS.BLUE_2};
      color: ${COLORS.WHITE};
    }

    .react-datepicker__day--in-selecting-range {
      border-radius: 50%;
    }

    .react-datepicker__day--in-range {
      border-radius: 50%;
    }

    .react-datepicker__day {
      /* width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 34px;
      margin: 0; */

      &:hover {
        border-radius: 50%;
      }
    }

    .react-datepicker__day--keyboard-selected {
      border-radius: 50%;
      background-color: ${COLORS.PINK_1};
      color: ${COLORS.WHITE};

      &:hover {
        border-radius: 50%;
      }
    }


    .react-datepicker__time-name {
      /* width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 34px;
      margin: 0; */
    }

    .react-datepicker__day-names {
      /* display: flex;
      margin: 0.4rem 0.4rem 0 0.4rem; */
    }

    .react-datepicker__week {
      /* display: flex; */
    }

    .react-datepicker__day--outside-month {
      /* pointer-events: none; */
    }

    .react-datepicker__navigation {
      /* display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      height: 19px;
      width: 19px;
      top: 12px; */

      &:after {
        /* position: absolute;
        content: '';
        width: 8px;
        height: 12px;
        background-size: contain;
        background-repeat: no-repeat;
        top: 6px; */
      }
    }

    .react-datepicker__navigation--previous {
      &:after {
        width: 100%;
        height: 100%;
        top: 0;
      }
    }

    .react-datepicker__navigation--next {
      /* right: 95px; */

      &:after {
        /* width: 100%;
        height: 100%;
        top: 0; */
      }
    }

    .react-datepicker__month-dropdown-container {

    }

    .react-datepicker__month-select {
      /* border: 0;
      height: 28px;
      line-height: 28px;
      text-align-last: right; */

      option {
      }

      /* -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: ''; */
    }

    .react-datepicker__year-select {
      /* border: 0;
      height: 28px;
      line-height: 28px;
      width: 50px; */

      option {

      }

      /* -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: ''; */
    }

    .react-datepicker__time-container {
      .react-datepicker__time {
        padding: 0;

        .react-datepicker__time-box {
          overflow-x: unset;

          ul {
            &.react-datepicker__time-list {
              padding: 0 6px;
              box-sizing: border-box;

              li {
                &.react-datepicker__time-list-item {
                  padding: 0;
                  line-height: 34px;
                  height: 34px;
                  margin-bottom: 6px;
                  border-radius: 5px;
                  transition: all 0.3s ease;

                  &.react-datepicker__time-list-item--selected {
                    background-color: ${COLORS.PINK_1};
                  }

                  &:hover {
                    border-radius: 5px;
                  }
                }
              }

              &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: ${COLORS.GRAY_4};
              }

              &::-webkit-scrollbar {
                width: 4px;
                background-color: ${COLORS.GRAY_4};
              }

              &::-webkit-scrollbar-thumb {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: ${COLORS.BLUE_2};
              }
            }
          }
        }
      }
    }

    .react-datepicker__time-list-item {

    }
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before {

  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before {

  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {

  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before, .react-datepicker__month-read-view--down-arrow::before, .react-datepicker__month-year-read-view--down-arrow::before {

  }


  /* Modifiers
  ------------------------------- */
  &.date {
    .react-datepicker-wrapper {
      .react-datepicker__input-container {
        &:after {
          background: url(${ICONS['booking-menu-ico.svg']}) no-repeat 10px center;
          background-size: 14px;
          display: flex;
          pointer-events: none;
        }
      }
    }
  }
  /*  Modifier state
  -------------------- */
  &.is-error {
    .date-picker-select {
      border-color: ${COLORS.RED_1};
      border-width: 2px;
    }

    .date-picker-message {
      color: ${COLORS.RED_1};
      font-size: 14px;
      padding-top: 5px;
    }
  }
  /* Media queries
  ------------------------------- */
`