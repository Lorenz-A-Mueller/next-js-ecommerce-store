import { css, keyframes } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cart from '../public/cart.png';
import logo from '../public/logo.png';
import { headerContainerStyles } from './styles.js';

export default function Header(props) {
  const [startAnimation, setStartAnimation] = useState(false);

  function handleChange(e) {
    const input = e.currentTarget.value;
    props.handleSearchInput(input);
  }

  useEffect(() => {
    setStartAnimation(true);
    setTimeout(() => {
      setStartAnimation(false);
    }, 1000);
  }, [props.cart]);

  // ******

  const bounce = keyframes`
    from, 20%, 53%, 80%, to {
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0,-4px,0);
    }
  `;

  // ****

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
        <div
          className="cart-icon-image-container"
          css={css`
            animation-name: ${startAnimation ? bounce : null};
            animation-duration: 1s;
            animation-timing-function: ease;
            animation-iteration-count: infinite;
          `}
        >
          <Link href="/cart">
            <a>
              <Image src={cart} />
            </a>
          </Link>
        </div>
        <div className="cart-icon-text-container">
          <p className="cart-icon-text-cartamount-container">
            {props.cart.length}
          </p>
          <p>Your Cart</p>
        </div>
      </div>
    </div>
  );
}
