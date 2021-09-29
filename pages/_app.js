import { Global } from '@emotion/react';
import Head from 'next/head';
import { globalStyles } from '../components/styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <title>Sprouts Farmer Market</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
