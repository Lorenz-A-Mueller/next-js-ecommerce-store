import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cart from '../public/cart.png';
import logo from '../public/logo.png';
import { headerContainerStyles } from './styles.js';

export default function Header(props) {
  // useEffect(() => {
  //   setCookies('search', search);
  // }, [search]);

  function handleChange(e) {
    const input = e.currentTarget.value;
    props.handleSearchInput(input);
  }

  useEffect(() => {
    alert('in header');
    console.log(
      'number of clicked on products in header',
      props.numberOfClickedOnProducts,
    );
  }, [props.numberOfClickedOnProducts]);

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
      <div className="cart-icon-container">
        <div className="cart-icon-image-container">
          <Link href="/cart">
            <a>
              <Image src={cart} />
            </a>
          </Link>
        </div>
        <div className="cart-icon-text-container">
          <p>Your Cart</p>
          <p>Number:{props.numberOfClickedOnProducts}</p>
        </div>
      </div>
    </div>
  );
}
