import {
  createGlobalStyle
} from 'styled-components'
import {
  // COLORS,
  // BREAKPOINTS,
  // FONTS,
} from '../../themes'
import { COLORS } from '../variables';

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Global
//
// * login
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

export const GlobalStyle = createGlobalStyle`

  .Toastify {
    .Toastify__toast {
      min-height: 50px;
      text-align: center;
      border-radius: 6px;
    }
    .Toastify__toast--default {
      background: ${COLORS.PINK_1};
      color: ${COLORS.WHITE};
    }
    .Toastify__toast--info {
      background: ${COLORS.PINK_1};
    }
    .Toastify__toast--success {
      background: ${COLORS.GREEN_1};
    }
    .Toastify__toast--warning {
      background: ${COLORS.YELLOW_1};
    }
    .Toastify__toast--error {
      background: ${COLORS.RED_1};
    }
  }

  .loading {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    width: 100%;
    top: 0;
  }

  .login-page {
    height: 100vh;
    background: rgb(251,239,239);
    background: linear-gradient(0deg, rgba(251,239,239,1) 0%, rgba(251,239,239,1) 50%, rgba(255,255,255,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .forgot-password-page {
    height: 100vh;
    background: rgb(251,239,239);
    background: linear-gradient(0deg, rgba(251,239,239,1) 0%, rgba(251,239,239,1) 50%, rgba(255,255,255,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;


    .title {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 47px;
    }

    .description {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }

  .bubble-notification {
    background-color: ${COLORS.RED_1};
    border-radius: 30px;
    width: 18px;
    height: 12px;
    font-size: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    right: 0;
    top: -1px;
  }

  .topbar-line-separator {
    width: 1px;
    height: 30px;
    margin-left: 71px;
    margin-right: 71px;
    background-color: ${COLORS.BLUE_2};
  }

  .editerwrappper {
    .toolbar {
      border-color: ${COLORS.GRAY_2};
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    .editor {
      overflow: auto;
      height: 250px;
      border: 1px solid ${COLORS.GRAY_2};
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 40px;
    right: 0;
    width: 180px;
    overflow: hidden;
    border: 1px solid ${COLORS.BLUE_2};
    border-radius: 10px;
    background-color: ${COLORS.WHITE};
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .dropdown-item {
    height: 42px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 10px 14px 11px 18px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: rgba(245, 152, 164, 0.35);
    }
  }

  .card-stat-section {
    margin-left: -30px;

    .items {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .header-title {
    background-color: ${COLORS.PINK_1};
    color: ${COLORS.WHITE};
    height: 50px;
    padding : 13px 30px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 4px;
    margin-bottom: 29px;
    margin-top: 30px;
  }

  .form {
    font-size: 16px;

    .field-middle {
      display: flex;
      justify-content: center;
    }

    .columns {
      display: flex;
      flex-wrap: wrap;
      margin-left: -30px;
      margin-bottom: 30px;
      position: relative;

      &.mb-0 {
        margin-bottom: 0;
      }

      &.mb-18 {
        margin-bottom: 18px;
      }

      &.mt-15-de {
        margin-top: -15px;
      }
    }

    .column {
      padding-left: 30px;

      .field-labal {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 10px;

        &.text-left {
          justify-content: flex-start;
        }

        &.mb-5 {
          margin-bottom: 5px;
        }
        
        &.font-14 {
          font-size: 14px;
        }
      }

      .field-hint {
        height: 100%;
        display: flex;
        margin-left: -15px;
        padding-top: 10px;
      }

      &.is-2 {
        width: 16.666666666666668%;
      }

      &.is-3 {
        width: 25%;
      }

      &.is-4 {
        width: 33.333333333333333%;
      }

      &.is-5 {
        width: 41.666666666666664%;
      }

      &.is-6 {
        width: 50%;
      }

      &.is-7 {
        width: 58.333333333333333%;
      }

      &.is-8 {
        width: 66.666666666666667%;
      }

      &.is-9 {
        width: 75%;
      }

      &.is-10 {
        width: 83.333333333333333%;
      }

      &.is-11 {
        width: 91.6666666666666667%;
      }

      &.is-12 {
        width: 100%;
      }
    }
  }

  .photo-preview {
    position: relative;

    .photo-overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .photo-overlay {
      background-color: rgba(0, 0, 0, 0.37);
      position: absolute;
      z-index: 5;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      .photo-overlay {
        opacity: 1;
      }
    }
  }

  .gallery-wrapper {
    position: relative;
    margin-left: -30px;
    display: flex;
    flex-wrap: wrap;
  }

  .gallery-upload {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    margin-bottom: 30px;

    .gallery-cover {
      background-color: ${COLORS.GRAY_6};
      border: 1px solid ${COLORS.GRAY_2};
      border-radius: 6px;
      width: 200px;
      height: 113px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;

      &:hover {
        .gallery-overlay {
          opacity: 1;
        }
      }
    }

    .gallery-overlay {
      background-color: rgba(0, 0, 0, 0.37);
      position: absolute;
      z-index: 5;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      opacity: 0;
      transition: all 0.3s ease;
    }
  }

  .gallery-description {
    display: flex;
    font-size: 12px;
    color: ${COLORS.RED_1};
    margin-top: 8px;

    .detail {
      padding-left: 5px;
    }
  }

  /* Media queries
  ------------------------------- */
  @media (min-width: 1610px) {
    .card-stat-section {
      .items {
        padding-right: 20%;
      }
    }

    .forgot-password-page {
      padding: 125px 190px;
    }
  }
`;
