import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  footerAddressStyles,
  footerBaseStyles,
  footerInfoContainerStyles,
  footerLinkContainerStyles,
  footerLogoStyles,
} from './styles.js';

const footerExpandedStyles = (height) => css`
  height: ${height + 'px'};
  width: 100%;
  transition: all 1s ease-out;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;

export default function Footer() {
  const [height, setHeight] = useState(0);

  function handleMouseOver() {
    setHeight(250);
  }

  function handleMouseOut() {
    setHeight(0);
  }

  return (
    <>
      <div
        css={footerExpandedStyles(height)}
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
      >
        <div css={footerLinkContainerStyles}>
          <h2>Pages:</h2>
          <Link href="/products">
            <a>
              <p>Products</p>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <p>Log In</p>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <p>Cart</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p>Home</p>
            </a>
          </Link>
        </div>
        <div css={footerInfoContainerStyles}>
          <h2>About:</h2>
          <Link href="/about">
            <a>
              <p>Learn more about Sprouts</p>
            </a>
          </Link>
          <Link href="/covid">
            <a>
              <p>Current Covid-19 guidelines</p>
            </a>
          </Link>
          <Link href="/career">
            <a>
              <p>Get a job at sprouts!</p>
            </a>
          </Link>
          <Link href="/eco">
            <a>
              <p>What we are doing for the planet</p>
            </a>
          </Link>
        </div>
        <div css={footerLogoStyles}>
          <Image src="/logo.png" width="100px" height="75px" />
        </div>
        <div css={footerAddressStyles}>
          <h3>Sprouts Farmer's Market</h3>
          <p>Some interesting street 101</p>
          <p>101010, some interesting town</p>
          <p>East Virginia, USA</p>
        </div>
      </div>

      <div
        css={footerBaseStyles}
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
      />
    </>
  );
}
