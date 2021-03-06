import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { footerBaseStyles, footerExpandedStyles } from '../utils/styles';

const showExpandedFooterStyles = (height: number) => css`
  height: ${height + 'px'};
  transition: all 1s ease-out;
  overflow: hidden;
`;

export default function Footer() {
  const [height, setHeight] = useState(0);

  function handleMouseOver() {
    setHeight(200); // expanded Footer height
  }

  function handleMouseOut() {
    setHeight(0);
  }

  return (
    <>
      <div css={showExpandedFooterStyles(height)}>
        <div
          css={footerExpandedStyles}
          className="flex-container-center-content"
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          onMouseOut={handleMouseOut}
          onBlur={handleMouseOut}
        >
          <div className="footer-link-container">
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
          <div className="footer-info-container">
            <h2>About:</h2>
            <Link href="/about">
              <a>
                <p>Learn more about us</p>
              </a>
            </Link>
            <Link href="/covid">
              <a>
                <p>Current Covid-19 guidelines</p>
              </a>
            </Link>
            <Link href="/career">
              <a>
                <p>Get a job at ToH!</p>
              </a>
            </Link>
            <Link href="/eco">
              <a>
                <p>What we are doing for the planet</p>
              </a>
            </Link>
          </div>
          <div className="footer-logo-container">
            <Image
              src="/logo.png"
              width="100px"
              height="75px"
              alt="Sprouts logo"
            />
          </div>
          <div className="footer-address-container">
            <h3>Taste of Health</h3>
            <p>Some interesting street 101</p>
            <p>101010, some interesting town</p>
            <p>East Virginia, USA</p>
          </div>
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
