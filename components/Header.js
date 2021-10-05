import { css, keyframes } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cart from '../public/cart.png';
import login from '../public/login.png';
import logo from '../public/logo.png';
import DropDownMenu from './DropDownMenu';
import { headerContainerStyles } from './styles.js';

const dropDownMenuTransitionStyles = (height) => css`
  height: ${height + 'px'};
  transition: all 0.5s ease-out;
  overflow: hidden;
  position: absolute;
  top: 15vh;
  /* background-color: green; */
`;
// *****

export default function Header(props) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [height, setHeight] = useState(0);

  console.log('props.loggedInUser', props.loggedInUser);
  console.log('props.loggedInUser.firstName', props.loggedInUser.firstName);

  function handleChange(e) {
    const input = e.currentTarget.value;
    props.handleSearchInput(input);
  }

  function handleFocus() {
    if (window.location.href !== window.location.origin + '/products') {
      // redirect user to the products page if they type in a search elsewhere
      window.location.href = '/products';
    }
  }

  useEffect(() => {
    setStartAnimation(true);
    setTimeout(() => {
      setStartAnimation(false);
    }, 1000);
  }, [props.cart]);

  function handleMouseOver() {
    setHeight(130);
  }

  function handleMouseOut() {
    setHeight(0);
  }

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

  function handleLogOutClick() {
    props.setLoggedInUser({});
    setHeight(0);
  }
  // *****

  return (
    // <>

    <div css={headerContainerStyles}>
      <div className="logo-container">
        <Link href="/">
          <a>
            <Image src={logo} />
          </a>
        </Link>
      </div>

      <div className="searchbar-container">
        <input
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
          onFocus={handleFocus}
        />
      </div>
      <div
        className="login-container"
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
      >
        <Link href={props.loggedInUser.id ? '/account' : '/login'}>
          <a>
            <Image src={login} />
          </a>
        </Link>
        {props.loggedInUser.id && (
          <p style={{ color: 'white' }}>
            Hello, {props.loggedInUser.firstName}
          </p>
        )}
        {!props.loggedInUser.id && <p style={{ color: 'white' }}>Log in</p>}
        <div css={dropDownMenuTransitionStyles(height)}>
          <DropDownMenu
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver}
            handleLogOutClick={handleLogOutClick}
            setLoggedInUser={props.setLoggedInUser}
          />
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
        </div>
      </div>
    </div>
    // </>
  );
}
