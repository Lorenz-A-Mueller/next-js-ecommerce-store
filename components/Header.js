import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cart from '../public/cart.png';
import logo from '../public/logo.png';
import { getCookies, setCookies } from '../utils/cookies';
import { headerContainerStyles } from './styles.js';

export default function Header(props) {
  // useEffect(() => {
  //   setCookies('search', search);
  // }, [search]);

  function handleChange(e) {
    const input = e.currentTarget.value;
    props.handleSearchInput(input);
  }

  return (
    <div css={headerContainerStyles}>
      <div className="logo-container">
        <Link href="/">
          <a>
            <Image src={logo} />
          </a>
        </Link>
      </div>

      <div className="searchbar-container">
        <input placeholder="Search..." onChange={(e) => handleChange(e)} />
      </div>
      <div className="login-container">
        <input placeholder="user_name" />
        <input placeholder="password" />
        <div className="button-container">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="cart-container">
        <div className="image-container">
          <Link href="/cart">
            <a>
              <Image src={cart} />
            </a>
          </Link>
        </div>
        <p>Your Cart</p>
      </div>
    </div>
  );
}
