import { Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { globalStyles } from '../components/styles';
import { getCookies, setCookies } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  // cookies won't exist when node reads the file (reads it first), so don't setCart then. Only when the file is read for the client-side.

  useEffect(() => {
    if (getCookies('cart')) {
      setCart(getCookies('cart'));
    }
    if (getCookies('loggedInUser')) {
      setLoggedInUser(getCookies('loggedInUser'));
    }
  }, []);

  // update cookies to reflect the state of cart/loggedInUser when it is altered
  useEffect(() => {
    setCookies('loggedInUser', loggedInUser);
  }, [loggedInUser]);

  useEffect(() => {
    setCookies('cart', cart);
  }, [cart]);

  // *******

  function handleSearchInput(input) {
    setSearch(input);
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <title>Sprouts Farmer's Market</title>
      </Head>
      <Layout
        handleSearchInput={handleSearchInput}
        cart={cart}
        setCart={setCart}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      >
        <Component // to all the pages
          {...pageProps}
          handleSearchInput={handleSearchInput}
          search={search}
          cart={cart}
          setCart={setCart}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const { users } = await import('../utils/database');

  return {
    props: {
      users,
    },
  };
}

export default MyApp;

// cannot use getServerSideProps in _app.js, nor in the components! Only in pages.
