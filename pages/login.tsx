import { css, keyframes } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { getCookies, setCookies } from '../utils/cookies';
import { loginStyles, redirectionFromCartStyles } from '../utils/styles';

type User = {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
};

type Props = {
  users: User[];
  setLoggedInUser: (arg: User) => void;
};

// ******

const shake = keyframes`
    from, 20%, 53%, 80%, to {
      transform: translate(0);
    }
    40%, 43% {
      transform: translate(-30px);
    }
    70% {
      transform: translate(30px);
    }
    90% {
      transform: translate(-10px);
    }
  `;

// ****

export default function Login(props: Props) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validInput, setValidInput] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    console.log('getCookies in LOGIN', getCookies('redirectToLogin'));
    if (getCookies('redirectingToLogin') === true) {
      setShowInfo(true);
      setTimeout(() => {
        setShowInfo(false);
        setCookies('redirectingToLogin', false);
      }, 2000);
    }
  }, [props]);

  function handleNameChange(e: React.FormEvent<HTMLInputElement>) {
    setUserName(e.currentTarget.value);
  }
  function handlePasswordChange(e: React.FormEvent<HTMLInputElement>) {
    setUserPassword(e.currentTarget.value);
  }

  // check whether userName is in database; if so, look for its index.
  // set doesPasswordMatch to false. If an index has been found, check whether the password of the user in the database matches the input.

  useEffect(() => {
    const doesNameExist = props.users.some((savedUser) => {
      return userName === savedUser.userName;
    });

    let savedUserIndex;
    if (doesNameExist) {
      savedUserIndex = props.users.findIndex((savedUser) => {
        return userName === savedUser.userName;
      });
    }
    let doesPasswordMatch = false;
    if (savedUserIndex || savedUserIndex === 0) {
      doesPasswordMatch = props.users[savedUserIndex].password === userPassword;
    }

    if (doesNameExist && doesPasswordMatch) {
      // alert('yes');
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [userName, userPassword, props.users]);

  // *** when clicked and all ok, set loggedInUser, otherwise, display Error and start shake animation

  function handleClick() {
    if (validInput) {
      const savedUserIndex = props.users.findIndex((savedUser) => {
        return userName === savedUser.userName;
      });
      props.setLoggedInUser(props.users[savedUserIndex]);
      setTimeout(() => {
        Router.push('/cart');
      }, 1000);
    } else {
      setShowErrorMessage(true);
      setStartAnimation(true);
      setTimeout(() => {
        setStartAnimation(false);
      }, 400);
    }
  }

  return (
    <>
      <Head>
        <title>Sprouts Farmer's Market - Log In</title>
      </Head>
      <main>
        <div css={loginStyles} className="flex-container-center-content">
          <div
            css={css`
              animation-name: ${startAnimation ? shake : null};
              animation-duration: 0.3s;
              animation-timing-function: ease;
              animation-iteration-count: 1;
            `}
          >
            <div className="login-box flex-container-center-content">
              <h1>Login</h1>
              <label htmlFor="user_name">e-mail:</label>
              <input
                placeholder="my.address@gmail.com"
                id="user_name"
                onChange={(e) => handleNameChange(e)}
                value={userName}
                data-cy="user-name-input"
              />
              <label htmlFor="password">password:</label>
              <input
                id="password"
                onChange={(e) => handlePasswordChange(e)}
                value={userPassword}
                type="password"
                data-cy="user-password-input"
              />

              <p className="invalid-input-text">
                {showErrorMessage ? 'Invalid username/password' : ''}
              </p>
              <button
                className="login-button"
                onClick={handleClick}
                data-cy="log-in-button"
              >
                Log In
              </button>
              <div className="sign-up-container flex-container-center-content">
                <p>No account yet? </p>
                <Link href="/signup" passHref>
                  <a className="button-like-link button-red">Sign Up</a>
                </Link>
              </div>
              <p>Forgot Password?</p>
            </div>
          </div>
          <div
            css={redirectionFromCartStyles}
            style={{ display: showInfo ? 'flex' : 'none' }}
            className="redirection-fill-screen"
          >
            <div className="redirection-from-cart-text-container flex-container-center-content">
              <h2>Please Log In!</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { getUsers } = await import('../utils/database');
  const users = await getUsers();

  return {
    props: {
      users,
    },
  };
}
