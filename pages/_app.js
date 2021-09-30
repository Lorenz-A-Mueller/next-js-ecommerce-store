import { Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { globalStyles } from '../components/styles';
import { getCookies, setCookies } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState('');
  const [numberOfClickedOnProducts, setNumberOfClickedOnProducts] = useState(0);
  console.log('get cookies', getCookies('cart'));

  console.log('number of clicked on products: ', numberOfClickedOnProducts);

  useEffect(() => {
    if (typeof getCookies('cart') !== 'undefined') {
      // why necessary????
      setNumberOfClickedOnProducts(getCookies('cart').length);
    }
  }, [numberOfClickedOnProducts]);

  console.log(
    'number of clicked on products in app: ',
    numberOfClickedOnProducts,
  );

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
        numberOfClickedOnProducts={numberOfClickedOnProducts}
      >
        <Component // to all the pages
          {...pageProps}
          setNumberOfClickedOnProducts={setNumberOfClickedOnProducts}
          handleSearchInput={handleSearchInput}
          search={search}
        />
      </Layout>
    </>
  );
}

export default MyApp;
