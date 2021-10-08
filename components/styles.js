import { css } from '@emotion/react';

const buttonBlue = 'rgba(39, 136, 244, 0.7)';
const buttonBlueHovered = 'rgba(39, 136, 244, 1)';
const buttonBlueOpaque = 'rgba(39, 136, 244, 0.9)';
const buttonRed = 'rgba(255, 22, 48, 0.6)';
const buttonRedHovered = 'rgba(255, 22, 48, 1)';

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
`;
export const layoutStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  padding: 0;
`;

export const headerContainerStyles = css`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 15vh;
  width: 100vw;
  max-width: 100%;
  padding: 0;

  .logo-container {
    /* background-color: pink; */
    width: 14vw;
  }
  .searchbar-container {
    /* background-color: blue; */
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    input {
      width: 100%;
      height: 40%;
      font-size: 2em;
      border-radius: 20px;
      text-indent: 60px;
      background-image: url('/magnify.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 10px center;
      background-color: white;
    }
  }
  .login-container {
    width: 10vw;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 10%;
    margin-left: auto;
    padding: 10px;
    font-size: 1.2em;

    img {
      width: 5vw;
    }
  }
  .cart-icon-container {
    /* background-color: blue; */
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;

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
  /* position: absolute; */
  top: 15vh;
  width: 10vw;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .dropdown-link-button {
    margin-top: 10px;
    height: 20px;
    width: 100%;
    a {
      height: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      color: white;
      text-decoration: none;
      button {
        width: 80%;
        border: 0;
        border-radius: 10px;
        background-color: ${buttonBlue};
        color: white;

        &:hover {
          background-color: ${buttonBlueHovered};
          cursor: pointer;
        }
      }
    }
  }
  .dropdown-logout-button {
    margin-top: 10px;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      background-color: ${buttonRed};
      border-radius: 10px;
      border: 0;
      width: 80%;

      &:hover {
        background-color: ${buttonRedHovered};
        cursor: pointer;
      }
    }
  }
`;

export const loginContainerStyles = css`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const loginBoxStyles = css`
  width: 20vw;
  height: 40vh;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid black 3px;

  input {
    height: 30px;
    font-size: 1em;
    width: 70%;
  }

  .sign-up-container {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 35%;

      button {
        background-color: ${buttonRed};
        width: 100%;
        &:hover {
          background-color: ${buttonRedHovered};
        }
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
    font-family: lora;
    height: 30px;
    font-size: 1em;
    border: 0;
    background-color: ${buttonBlue};
    border-radius: 10px;
    font-family: lora;
    /* margin-top: 5%; */

    &:hover {
      background-color: ${buttonBlueHovered};
    }
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      width: 70%;
      font-family: lora;
      height: 30px;
      font-size: 1em;
      border: 0;
      background-color: ${buttonBlue};
      border-radius: 10px;
      font-family: lora;
      /* margin-top: 5%; */

      &:hover {
        background-color: ${buttonBlueHovered};
      }
    }
  }
`;

export const signUpContainerStyles = css`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const signUpBoxStyles = css`
  width: 60vw;
  height: 55vh;
  border: solid black 3px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 50%;
    height: 70%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(4, 10% 3%) 24% 24%;
    grid-gap: 3%;
    margin-top: 30px;
    background-color: pink;

    .validation-error-container {
      color: white;
      background-color: red;
      border-radius: 5px;
    }

    .label-email {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .validation-error-container-email {
      grid-column: 2/3;
      grid-row: 2/3;
      color: red;
    }

    .label-firstName {
      grid-column: 1 / 2;
      grid-row: 3/ 4;
    }

    .validation-error-container-firstName {
      grid-column: 2/3;
      grid-row: 4/5;
      color: red;
    }

    .label-lastName {
      grid-column: 1 / 2;
      grid-row: 5 / 6;
    }
    .validation-error-container-lastName {
      grid-column: 2/3;
      grid-row: 6/7;
      color: red;
    }

    .label-password {
      grid-column: 1 / 2;
      grid-row: 7/ 8;
    }

    .validation-error-container-password {
      grid-column: 2/3;
      grid-row: 8/9;
      color: red;
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
      align-self: center;
    }
  }

  input {
    height: 30px;
    font-size: 1em;
    width: 100%;
  }

  button {
    width: 70%;
    font-family: lora;
    height: 30px;
    font-size: 1em;
    border: 0;
    background-color: ${buttonBlue};
    border-radius: 10px;
    font-family: lora;
    /* margin-left: auto; */
    /* margin-right: auto; */
    /* margin-top: 5%; */

    &:hover {
      background-color: ${buttonBlueHovered};
    }
  }
`;

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

export const homeContainerStyles = css`
  width: 100vw;
  height: 80vh;
  background-image: url('/home_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  font-size: 2em;
  overflow: hidden;

  .hero {
    margin-top: 33vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    .hero-image-link-text-container a {
      color: black;
    }
    p {
      position: absolute;
      top: 67vh;
      left: 52vw;
      font-size: 1.5em;
      background-color: ${buttonBlue};
      border-radius: 10px;
      padding: 5px;

      &:hover {
        background-color: ${buttonBlueHovered};
      }
    }
  }
`;

export const productsContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: auto;
  overflow-y: scroll;
  padding: 20px;
  padding-left: 80px;
  height: 80vh;

  .product-tile {
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 160px;
    max-width: 100%;
    /* background-color: white; */
    margin-top: 20px;
    margin-right: 20px;
    border: solid black 3px;
    overflow: hidden;

    &:hover {
      margin-top: 12px;
      box-shadow: 4px 4px black;
    }

    .product-name-container {
      margin-left: 3px;
      margin-top: 5px;
      color: black;
      font-weight: bold;
      text-align: center;
    }

    img {
      width: 100%;
      background-color: transparent;
    }
  }
`;

export const currentProductContainerStyles = css`
  display: flex;
  justify-content: flex-start;
  height: 80vh;
  overflow-y: scroll;

  .current-product-image-container {
    img {
      width: 400px;
      margin: 30px;
    }
  }
  .current-product-text-container {
    margin-top: 5vh;
    width: 25vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: solid black 3px;
    padding-left: 30px;

    > p {
      margin-top: 5%;
    }

    .current-product-text-priceinfo-container {
      margin-top: auto;
      height: 18%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .amount-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 250px;

        .select-amount-container {
          display: flex;
          align-items: center;

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
      border: 0;
      background-color: ${buttonBlue};
      border-radius: 10px;
      font-family: lora;
      margin-top: 5%;

      &:hover {
        background-color: blue;
        cursor: pointer;
      }
    }
  }
`;

export const cartContainerStyles = css`
  display: flex;
  width: 100vw;
  height: 80vh;
  overflow-y: scroll;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0)
    ),
    url('/cart_background.jpeg');

  background-size: cover;

  .cart-images-container {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 2%;
    justify-content: flex-start;
    margin-top: 3%;
    margin-bottom: 3%;
    text-align: center;

    .empty-cart-container {
      margin-top: 5%;
      margin-bottom: 5%;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
      height: 40px;
    }

    /* background-color: green; */

    .cart-single-image-container {
      display: flex;
      justify-content: center;
      border: solid black 3px;
      border-bottom: solid black 1.5px;
      align-items: center;

      &:nth-last-child(2) {
        border-bottom: solid black 3px;
      }
      .cart-single-image-image-container {
        /* background-color: yellow; */
        width: 40%;
        img {
          height: 100px;
          margin-left: auto;
        }
      }

      .cart-single-image-text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
        margin-left: auto;

        h2 {
          text-align: left;
        }

        .cart-single-image-text-amount-container {
          display: flex;
          align-items: center;
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
          font-family: lora;

          &:hover {
            cursor: pointer;
            border: solid black 3px;
            padding: 3px;
            margin-left: calc(10%-20px);
          }
        }
      }
      .cart-single-image-price-container {
        margin-right: 10px;
        p {
          font-weight: bold;
        }
      }
    }
  }
  .delete-all-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    margin-top: 5%;
    background-color: transparent;
    font-family: lora;

    a {
      width: 100%;
      button {
        width: 100%;
        height: 50px;
        font-size: 2em;
        border: 0;
        font-family: lora;
      }
    }
  }
  .total-amount-container {
    /* background-color: pink; */
    flex-direction: column;
    width: 20%;
    height: 160px;
    margin-left: 2%;
    justify-content: flex-start;
    margin-bottom: 3%;
    text-align: center;
    border: solid black 3px;
    margin-top: calc(3% + 60px);
    padding: 10px;

    .total-amount-text-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }

    button {
      width: 100%;
      height: 50px;
      font-size: 2em;
      border: 0;
      background-color: ${buttonBlue};
      margin-top: 10%;
      border-radius: 10px;
      font-family: lora;

      &:hover {
        background-color: ${buttonBlueHovered};
        cursor: pointer;
      }
    }
  }
`;

export const redirectionToCheckoutContainerStyles = css`
  position: absolute;
  width: 100vw;
  height: 80vh;
  top: 15vh;
  left: 0;
  background-color: ${buttonBlueOpaque};
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .redirection-to-checkout-text-container {
    width: 80%;
    display: flex;
    h2 {
      font-size: 3em;
      margin-right: 30px;
    }
  }
  .redirection-to-checkout-buffer-container {
    /* margin-top: auto; */
    margin-top: -200px;
    height: 100px;
  }
`;
export const redirectionToLoginContainerStyles = css`
  position: absolute;
  width: 40vw;
  height: 40vh;
  top: 30vh;
  left: 30;
  background-color: ${buttonBlueOpaque};
  color: white;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const successContainerStyles = css`
  height: 80vh;
  width: 100vw;
  background-image: url('/success_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .success-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30vh;
    margin-right: 10vw;
    color: white;
    text-align: center;
    background-color: ${buttonBlue};
    height: 200px;
    width: 30%;
    border-radius: 10px;

    h2 {
      margin-bottom: auto;
    }

    p {
      margin-bottom: auto;
    }
  }

  a {
    margin-top: 1%;
    margin-right: 10vw;
    width: 30%;
    button {
      width: 100%;

      border-radius: 10px;
      border: 0;
      background-color: ${buttonRed};
      color: white;
      height: 40px;
      font-size: 1.5em;
      font-family: lora;

      &:hover {
        background-color: ${buttonRedHovered};
        cursor: pointer;
      }
    }
  }
`;
