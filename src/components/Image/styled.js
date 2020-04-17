import styled from 'styled-components'

// Image Wrapper
// ============================================================
export const ImageWrapper = styled.div`
  /* Parent
  ------------------------------- */
  overflow: hidden;
  position: relative;
  display: inline-block;
  vertical-align: middle;

  /* Childrens
  ------------------------------- */
  .image-ratio-base {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Modifiers
  ------------------------------- */
  &.clickable{
    cursor: pointer;
  }

  &.image-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 84px;

    .image-ratio-base {
      position: relative;
      width: 194px;
      height: 116px;
    }
  }

  &.icon-checked {
    display: flex;
    justify-content: center;
    align-items: center;

    .image-ratio-base {
      position: relative;
      width: 8px;
      height: 6px;
    }
  }

  &.icon-error {
    display: flex;
    justify-content: center;
    align-items: center;

    .image-ratio-base {
      position: relative;
      width: 14px;
      height: 14px;
    }
  }

  &.main-logo {
    width: 77px;
    height: 46px;
  }

  &.icon-notification {
    .image-ratio-base {
      position: relative;
      width: 21px;
      height: 26px;
    }
  }

  &.image-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;

    .image-ratio-base {
      border-radius: 50%;
    }
  }

  &.image-media {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
  }

  &.image-photo {
    width: 100%;
    padding-bottom: 30%;
    border-radius: 6px;
  }

  &.image-cover {
    width: 100%;
    padding-bottom: 25%;
  }

  &.image-gallery {
    width: 100%;
    padding-bottom: 75%;
    border-radius: 6px;
  }

  &.image-preview {
    width: 100%;
    border-radius: 6px;
    max-height: calc(100vh - 300px);

    .image-ratio-base {
      position: relative;
    }
  }

  &.icon-arrow-down {
    margin-left: 10px;

    .image-ratio-base {
      position: relative;
      width: 11px;
      height: 6px;
    }
  }

  &.icon-arrow-up {
    transform: rotate(180deg);
    margin-left: 10px;

    .image-ratio-base {
      position: relative;
      width: 11px;
      height: 6px;
    }
  }

  &.icon-time-notification {
    margin-right: 5px;
    display: flex;

    .image-ratio-base {
      position: relative;
      width: 14px;
      height: 14px;
    }
  }

  &.icon-detail {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 15px;
    }
  }

  &.icon-edit {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 14px;
    }
  }

  &.icon-delete {
    .image-ratio-base {
      position: relative;
      width: 12px;
      height: 15px;
    }
  }

  &.icon-search {
    .image-ratio-base {
      position: relative;
      width: 16px;
      height: 16px;
    }
  }

  &.icon-plus {
    margin-right: 8px;

    .image-ratio-base {
      position: relative;
      width: 16px;
      height: 16px;
    }
  }

  &.icon-total-customers {
    .image-ratio-base {
      position: relative;
      width: 37px;
      height: 37px;
    }
  }

  &.icon-total-partners {
    .image-ratio-base {
      position: relative;
      width: 41px;
      height: 37px;
    }
  }

  &.icon-total-bloggers {
    .image-ratio-base {
      position: relative;
      width: 36px;
      height: 36px;
    }
  }

  &.icon-total-blogs {
    .image-ratio-base {
      position: relative;
      width: 32px;
      height: 37px;
    }
  }

  &.icon-total-bookings {
    .image-ratio-base {
      position: relative;
      width: 36px;
      height: 36px;
    }
  }

  &.icon-total-incomes {
    .image-ratio-base {
      position: relative;
      width: 40px;
      height: 36px;
    }
  }

  &.icon-history {
    .image-ratio-base {
      position: relative;
      width: 17px;
      height: 16px;
    }
  }

  &.icon-facebook {
    margin-right: 8px;

    .image-ratio-base {
      position: relative;
      width: 18px;
      height: 18px;
    }
  }

  &.icon-breadcrumb-notification {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 24px;
    }
  }

  &.icon-breadcrumb-coupon {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 26px;
    }
  }

  &.icon-product {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 15px;
    }
  }

  &.icon-marker {
    .image-ratio-base {

    }
  }

  &.image-star-emptry {
    .image-ratio-base {
      width: 15px;
      height: 14px;
      position: relative;
    }
  }

  &.image-star-full {
    .image-ratio-base {
      position: relative;
      width: 15px;
      height: 14px;
      max-width: none;
    }
  }

  &.icon-profile-default {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1;

    .image-ratio-base {
      position: relative;
      width: auto;
      height: 72px;
    }
  }

  &.icon-photo-default {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-ratio-base {
      position: relative;
      width: auto;
      height: 37px;
    }
  }

  &.icon-profile {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &.icon-photo {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &.icon-profile-delete {
    position: absolute;
    top: 5px;

    .image-ratio-base {
      position: relative;
      width: 10px;
      height: 12px;
    }
  }

  &.icon-preview {
    opacity: 0.7;

    .image-ratio-base {
      position: relative;
      width: auto;
      height: 40px;
    }
  }

  &.icon-photo-plus {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 45px;
    }
  }

  &.icon-breadcrumb-user {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 25px;
    }
  }

  &.icon-item {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 72px;
    }
  }

  &.icon-password {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 10px;
    }
  }

  &.icon-edit-partner {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 15px;
    }
  }

  &.icon-chat {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 15px;
    }
  }

  &.icon-close-preview {
    position: absolute;
    top: -35px;
    right: 0;
    cursor: pointer;

    .image-ratio-base {
      position: relative;
      width: auto;
      height: 15px;
    }
  }

  &.icon-special {
    .image-ratio-base {
      position: relative;
      width: auto;
      height: 25px;
    }
  }

  &.icon-special-label {
    margin-top: -4px;
    margin-right: 5px;

    .image-ratio-base {
      position: relative;
      width: auto;
      height: 25px;
    }
  }
  /* Media queries
  ------------------------------- */
`