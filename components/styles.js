import { css } from '@emotion/react';

const buttonBlue = 'rgba(39, 136, 244, 0.7)';
const buttonBlueHovered = 'rgba(39, 136, 244, 1)';
const buttonBlueOpaque = 'rgba(39, 136, 244, 0.9)';
const buttonRed = 'rgba(255, 22, 48, 0.6)';
const buttonRedHovered = 'rgba(255, 22, 48, 1)';
const backgroundGray = 'rgba(218, 223, 225, 0.8)';
const blackBorder = 'solid black 3px';

export const globalStyles = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    font-family: lora;
  }

  button {
    border: 0;
    border-radius: 10px;
    font-family: lora;
    &:hover {
      cursor: pointer;
    }
  }

  .button-blue {
    background-color: ${buttonBlue};
    &:hover {
      background-color: ${buttonBlueHovered};
    }
  }

  .button-red {
    background-color: ${buttonRed};
    &:hover {
      background-color: ${buttonRedHovered};
    }
  }

  .flex-container-center-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fill-middle-area {
    width: 100vw;
    height: 80vh;
    overflow: hidden;
  }

  .background-image-cover {
    background-size: cover;
    background-repeat: no-repeat;
  }

  .link-no-decoration {
    color: black;
    text-decoration: none;
  }

  .redirection-fill-screen {
    top: 15vh;
    height: 80vh;
    width: 100vw;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
`;

export const layoutStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

export const headerStyles = css`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 15vh;
  width: 100vw;

  .logo-container {
    width: 14vw;
  }
  .searchbar-container {
    width: 40vw;
    margin-left: auto;

    input {
      width: 100%;
      height: 40%;
      font-size: 2em;
      border-radius: 20px;
      text-indent: 60px;
      background: #fff url('/magnify.png') no-repeat 10px center;
      background-size: contain;
    }
  }
  .login-container {
    width: 10vw;
    flex-direction: column;
    grid-gap: 10%;
    margin-left: auto;
    padding: 10px;
    font-size: 1.2em;

    img {
      width: 5vw;
    }
  }
  .cart-icon-container {
    width: 10vw;

    .cart-icon-image-container {
      width: 65%;
    }

    .cart-icon-text-container {
      p {
        color: white;
        font-size: 1.5em;
        margin-left: -7%;
      }
      .cart-icon-text-cartamount-container {
        position: relative;
        left: -18px;
        top: 20px;
        border-radius: 100%;
        border: solid white 3px;
        width: 40px;
        height: 40px;
        text-align: center;
        margin-left: auto;
      }
    }
  }
`;

export const dropDownMenuStyles = css`
  display: flex;
  flex-direction: column;
  background-color: black;
  top: 15vh;
  width: 10vw;
  padding: 5px;
  border-radius: 0 0 10px 10px;

  .dropdown-link-button {
    margin-top: 10px;
    height: 20px;
    width: 100%;
    a {
      height: 20px;
      width: 100%;
      align-items: flex-start;
      color: white;
      text-decoration: none;
      button {
        width: 80%;
        color: white;
      }
    }
  }
  .dropdown-logout-button {
    margin-top: 10px;
    height: 20px;
    width: 100%;
    align-items: flex-start;
    button {
      width: 80%;
    }
  }
`;

/*!!!!!!!!

export const footerBaseStyles = css`
  background-color: black;
  height: 5vh;
  width: 100vw;
  /* color: white; */
  max-width: 100%;
`;

export const footerLinkContainerStyles = css`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 5%;

  a {
    color: white;
  }

  h2 {
    margin-bottom: 10px;
  }
`;
export const footerInfoContainerStyles = css`
  display: flex;
  flex-direction: column;
  color: white;
  h2 {
    margin-bottom: 10px;
    text-align: center;
  }

  a {
    color: white;
  }
`;

export const footerLogoStyles = css`
  margin-right: -15%;
`;
export const footerAddressStyles = css`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const indexStyles = css`
  background-image: url('/home_background.jpg');
  align-items: flex-start;
  font-size: 2em;

  .hero {
    margin-top: 33vh;
    justify-content: flex-start;
    flex-direction: column;

    button {
      position: absolute;
      top: 67vh;
      left: 52vw;
      font-size: 1.5em;
      padding: 5px;
    }
  }
`;

export const productsIndexStyles = css`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 20px;
  padding-left: 80px;

  .product-tile {
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 160px;
    margin-top: 20px;
    margin-right: 20px;
    border: ${blackBorder};
    overflow: hidden;
    &:hover {
      margin-top: 12px;
      box-shadow: 4px 4px black;
    }

    .product-name-container {
      margin-left: 3px;
      margin-top: 5px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const productIdStyles = css`
  display: flex;
  justify-content: flex-start;
  overflow-y: scroll;

  .productId-image-container {
    img {
      width: 400px;
      margin: 30px;
    }
  }
  .productId-text-container {
    margin-top: 5vh;
    width: 25vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: ${blackBorder};
    padding-left: 30px;

    > p {
      margin-top: 5%;
    }

    .productId-text-priceinfo-container {
      margin-top: auto;
      height: 18%;
      flex-direction: column;
      align-items: start;
      .amount-container {
        justify-content: flex-start;
        width: 250px;
        .select-amount-container {
          justify-content: flex-start;
          input {
            width: 60px;
            height: 30px;
            font-size: 1em;
            margin-left: 20px;
            margin-right: 10px;
          }
        }
      }
      p {
        margin-top: auto;
        span {
          font-weight: bold;
        }
      }
    }
    button {
      width: 100%;
      height: 50px;
      font-size: 2em;
      margin-top: 5%;
    }
  }
`;

/* cart.js */
export const cartStyles = css`
  display: flex;
  overflow-y: scroll;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0)
    ),
    url('/cart_background.jpeg');

  .cart-images-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 30%;
    margin: 3% 0% 3% 2%;
    text-align: center;

    .empty-cart-container {
      margin: 5% 0%;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
      height: 40px;
    }

    /* CartSingleImage Component */
    .cart-single-image-container {
      border: ${blackBorder};
      border-bottom: solid black 1.5px;

      &:nth-last-child(2) {
        border-bottom: ${blackBorder};
      }
      .cart-single-image-image-container {
        width: 40%;
        img {
          height: 100px;
        }
      }
      .cart-single-image-text-container {
        flex-direction: column;
        align-items: flex-start;
        width: 40%;
        text-align: left;

        .cart-single-image-text-amount-container {
          justify-content: flex-start;

          input {
            width: 35%;
            font-size: 1em;
          }

          p {
            margin-left: 5px;
          }
        }
      }
      .cart-single-image-delete-button-container {
        margin-right: 10px;
        button {
          width: 40px;
          height: 40px;
          margin-right: 10%;
          background-image: url('/red_x.jpg');
          background-size: cover;
          background-position: center;
          &:hover {
            border: ${blackBorder};
            padding: 3px;
            margin-left: calc(10%-20px);
          }
        }
      }
      .cart-single-image-price-container {
        margin-right: 10px;
        font-weight: bold;
      }
    }
  }
  /* cart.js */
  .delete-all-button-container {
    height: 50px;
    margin-top: 5%;
    a {
      width: 100%;
      button {
        width: 100%;
        height: 50px;
        font-size: 2em;
      }
    }
  }
  .total-amount-container {
    flex-direction: column;
    justify-content: flex-start;
    width: 20%;
    height: 160px;
    margin: calc(3% + 60px) 0 3% 2%;
    text-align: center;
    border: ${blackBorder};
    padding: 10px;

    .total-amount-text-container {
      justify-content: space-between;
    }

    button {
      height: 50px;
      font-size: 2em;
      margin-top: 10%;
    }
  }
`;
/* cart.js */
export const redirectionToCheckoutStyles = css`
  flex-direction: column;
  background-color: ${buttonBlueOpaque};

  .redirection-to-checkout-text-container {
    width: 80%;
    display: flex;
    h2 {
      font-size: 3em;
      margin-right: 30px;
    }
  }
  .redirection-to-checkout-buffer-container {
    margin-top: -200px;
    height: 100px;
  }
`;

/* login.js */
export const loginStyles = css`
  align-items: flex-start;

  .login-box {
    width: 20vw;
    height: 40vh;
    margin-top: 20vh;
    flex-direction: column;
    justify-content: space-around;
    border: ${blackBorder};

    input {
      height: 30px;
      font-size: 1em;
      width: 70%;
    }

    .sign-up-container {
      width: 70%;
      justify-content: space-between;

      a {
        width: 35%;
        button {
          width: 100%;
        }
      }
    }
    .invalid-input-text {
      font-size: 14px;
      color: red;
      max-width: 70%;
      font-weight: bold;
    }

    button {
      width: 70%;
      height: 30px;
      font-size: 1em;
    }
  }
`;

/* login.js */
export const redirectionFromCartStyles = css`
  display: flex;
  background-color: ${backgroundGray};

  .redirection-from-cart-text-container {
    width: 20vw;
    height: 20vh;
    background-color: ${buttonBlueOpaque};
    border-radius: 10px;
  }
`;

/* signup.js */

export const signUpStyles = css`
  align-items: flex-start;

  .sign-up-box {
    width: 60vw;
    height: 55vh;
    border: ${blackBorder};
    margin-top: 10vh;
    flex-direction: column;
    justify-content: flex-start;

    form {
      width: 50%;
      height: 70%;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: repeat(4, 10% 3%) 24% 24%;
      grid-gap: 3%;
      margin-top: 30px;

      .validation-error-container {
        color: red;
      }

      .label-email {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      .validation-error-container-email {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      .label-firstName {
        grid-column: 1 / 2;
        grid-row: 3/ 4;
      }

      .validation-error-container-firstName {
        grid-column: 2/3;
        grid-row: 4/5;
      }

      .label-lastName {
        grid-column: 1 / 2;
        grid-row: 5 / 6;
      }
      .validation-error-container-lastName {
        grid-column: 2/3;
        grid-row: 6/7;
      }

      .label-password {
        grid-column: 1 / 2;
        grid-row: 7/ 8;
      }

      .validation-error-container-password {
        grid-column: 2/3;
        grid-row: 8/9;
      }

      .label-newsletter {
        grid-column: 1 / 2;
        grid-row: 9/ 10;
      }

      #email {
        grid-column: 2/ 3;
        grid-row: 1/ 2;
      }

      #firstName {
        grid-column: 2 / 3;
        grid-row: 3/ 4;
      }

      #lastName {
        grid-column: 2 / 3;
        grid-row: 5 / 6;
      }
      #password {
        grid-column: 2/ 3;
        grid-row: 7/ 8;
      }

      #newsletter {
        grid-column: 2 / 3;
        grid-row: 9 / 10;
        width: 40px;
        align-self: center;
      }

      .sign-up-button {
        grid-column: 1/3;
        grid-row: 10/11;
        justify-self: center;
      }
    }
    input {
      height: 30px;
      font-size: 1em;
      width: 100%;
    }

    button {
      width: 70%;
      height: 30px;
      font-size: 1em;
    }
  }
`;

export const redirectionFromSignupContainerStyles = css`
  background-color: ${backgroundGray};

  .redirection-from-signup-text-container {
    width: 20vw;
    height: 20vh;
    background-color: ${buttonBlueOpaque};
    border-radius: 10px;
  }
`;

/* success.js */
export const successStyles = css`
  background-image: url('/success_background.jpg');
  flex-direction: column;
  justify-content: flex-start;

  .success-text {
    flex-direction: column;
    align-items: flex-start;
    margin: 30vh 10vw 0 0;
    color: white;
    text-align: center;
    background-color: ${buttonBlue};
    height: 200px;
    width: 30%;
    border-radius: 10px;
  }

  a {
    margin: 1% 10vw 0 0;
    width: 30%;
    button {
      width: 100%;
      color: white;
      height: 40px;
      font-size: 1.5em;
    }
  }
`;

export const accountStyles = css`
  align-items: flex-start;
  overflow-y: scroll;

  .account-box {
    width: 40vw;
    height: 70vh;
    border: ${blackBorder};
    margin-top: 10vh;
    flex-direction: column;
    justify-content: flex-start;

    form {
      width: 60%;
      height: 70%;
      display: grid;
      grid-template-columns: 48.5% 48.5%;
      grid-template-rows: repeat(4, 4vh 2vh) 5vh 5vh 5vh;
      grid-gap: 3%;
      margin-top: 30px;

      .validation-error-container {
        color: red;
      }

      .label-email {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      .validation-error-container-email {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      .label-firstName {
        grid-column: 1 / 2;
        grid-row: 3/ 4;
      }

      .validation-error-container-firstName {
        grid-column: 2/3;
        grid-row: 4/5;
      }

      .label-lastName {
        grid-column: 1 / 2;
        grid-row: 5 / 6;
      }
      .validation-error-container-lastName {
        grid-column: 2/3;
        grid-row: 6/7;
      }

      .label-password {
        grid-column: 1 / 2;
        grid-row: 7/ 8;
      }

      .validation-error-container-password {
        grid-column: 2/3;
        grid-row: 8/9;
      }

      .label-newsletter {
        grid-column: 1 / 2;
        grid-row: 9/ 10;
      }

      #email {
        grid-column: 2/ 3;
        grid-row: 1/ 2;
      }

      #firstName {
        grid-column: 2 / 3;
        grid-row: 3/ 4;
      }

      #lastName {
        grid-column: 2 / 3;
        grid-row: 5 / 6;
      }
      #password {
        grid-column: 2/ 3;
        grid-row: 7/ 8;
      }

      #newsletter {
        grid-column: 2 / 3;
        grid-row: 9 / 10;
        width: 40px;
        align-self: center;
      }

      .save-button {
        grid-column: 1/3;
        grid-row: 10/11;
        width: 100%;
        justify-self: center;
        height: 30px;
        font-size: 1em;
      }
    }

    input {
      height: 30px;
      font-size: 1em;
      width: 100%;
    }

    .delete-account-button {
      width: 60%;
      height: 30px;
      font-size: 1em;
    }
  }
`;
