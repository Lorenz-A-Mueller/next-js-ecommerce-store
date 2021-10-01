import { Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { globalStyles } from '../components/styles';
import { getCookies, setCookies } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  // cookies won't exist when node reads the file (reads it first), so don't setCart then. Only when the file is read for the client-side.

  useEffect(() => {
    if (getCookies('cart')) {
      setCart(getCookies('cart'));
    }
  }, []);

  // update cookies to reflect the state of cart when it is altered

  useEffect(() => {
    setCookies('cart', cart);
  }, [cart]);

  function handleSearchInput(input) {
    setSearch(input);
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <title>Sprouts Farmer Market</title>
      </Head>
      <Layout
        handleSearchInput={handleSearchInput}
        cart={cart}
        setCart={setCart}
      >
        <Component // to all the pages
          {...pageProps}
          handleSearchInput={handleSearchInput}
          search={search}
          cart={cart}
          setCart={setCart}
        />
      </Layout>
    </>
  );
}

export default MyApp;
