import Head from 'next/head';
import Link from 'next/link';
import { setCookies } from '../utils/cookies';
import { successStyles } from '../utils/styles';

setCookies('cart', []);

export default function Success() {
  return (
    <>
      {/* <Head>
        <title>Sprouts Farmer's Market - Thanks for buying</title>
      </Head> */}
      <div
        css={successStyles}
        className="fill-middle-area flex-container-center-content background-image-cover"
      >
        <div className="success-text">
          <h1>Success!</h1>
          <h2>Thank you for ordering at Sprouts!</h2>
          <p>A verification e-mail has been sent to your address.</p>
        </div>
        <Link href="/">
          <a>
            <button className="button-red">Back to the shop</button>
          </a>
        </Link>
      </div>
    </>
  );
}
