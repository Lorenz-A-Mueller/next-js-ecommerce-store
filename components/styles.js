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
      font-size: 2em;
    }
  }
  .login-container {
    width: 15vw;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 10%;
    margin-left: auto;

    .button-container {
      display: flex;
      justify-content: space-between;

      button {
        width: 40%;
      }
    }
  }
  .cart-container {
    /* background-color: blue; */
    width: 20vw;
    display: flex;

    .image-container {
      width: 60%;
    }

    p {
      align-self: flex-end;
      color: white;
      font-size: 1.5em;
      margin-left: -7%;
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

  .product-tile {
    display: flex;
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
    width: 30vw;
    height: 60vh;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      width: 40%;
    }
  }
`;
