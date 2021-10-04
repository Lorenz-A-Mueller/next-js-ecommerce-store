import { css } from '@emotion/react';

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
    grid-gap: 10%;
    margin-left: auto;

    img {
      width: 4vw;
    }
  }
  .cart-icon-container {
    /* background-color: blue; */
    width: 20vw;
    display: flex;

    .cart-icon-image-container {
      width: 60%;
    }

    .cart-icon-text-container {
      p {
        align-self: flex-end;
        color: white;
        font-size: 1.5em;
        margin-left: -7%;
      }
      .cart-icon-text-cartamount-container {
        border-radius: 100%;
        border: solid white 3px;
        width: 40px;
        height: 40px;
        text-align: center;
      }
    }
  }
`;

export const loginContainerStyles = css`
  width: 20vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid black 3px;
  margin-right: auto;
  margin-left: auto;

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
        background-color: rgba(255, 0, 0, 0.7);
        width: 100%;
        &:hover {
          background-color: rgba(255, 0, 0, 1);
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
    background-color: rgba(0, 0, 255, 0.7);
    border-radius: 10px;
    font-family: lora;
    /* margin-top: 5%; */

    &:hover {
      background-color: blue;
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
      background-color: rgba(0, 0, 255, 0.7);
      border-radius: 10px;
      font-family: lora;
      /* margin-top: 5%; */

      &:hover {
        background-color: blue;
      }
    }
  }
`;

export const signUpContainerStyles = css`
  width: 20vw;
  height: 40vh;
  border: solid black 3px;
  margin-right: auto;
  margin-left: auto;

  h1 {
    text-align: center;
  }

  form {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .form-group {
      .validation-error-container {
        color: red;
      }
    }
  }

  input {
    height: 30px;
    font-size: 1em;
    width: 70%;
  }

  button {
    width: 70%;
    font-family: lora;
    height: 30px;
    font-size: 1em;
    border: 0;
    background-color: rgba(0, 0, 255, 0.7);
    border-radius: 10px;
    font-family: lora;
    /* margin-top: 5%; */

    &:hover {
      background-color: blue;
    }
  }
`;

export const footerContainerStyles = css`
  background-color: black;
  height: 10vh;
  width: 100vw;
  color: white;
  max-width: 100%;
`;

export const productsContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: auto;
  overflow-y: scroll;
  padding: 20px;
  padding-left: 80px;

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

  .current-product-image-container {
    img {
      width: 400px;
      margin: 30px;
    }
  }
  .current-product-text-container {
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
      background-color: rgba(0, 0, 255, 0.7);
      border-radius: 10px;
      font-family: lora;
      margin-top: 5%;

      &:hover {
        background-color: blue;
      }
    }
  }
`;

export const cartContainerStyles = css`
  display: flex;
  width: 100vw;
  height: 75vh;
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
      background-color: rgba(0, 0, 255, 0.7);
      margin-top: 10%;
      border-radius: 10px;
      font-family: lora;

      &:hover {
        background-color: blue;
      }
    }
  }
`;
