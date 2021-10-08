import Link from 'next/link';
import { successContainerStyles } from '../components/styles';
import { setCookies } from '../utils/cookies';

setCookies('cart', []);

export default function Success() {
  return (
    <div css={successContainerStyles}>
      <div className="success-text">
        <h1>Success!</h1>
        <h2>Thank you for ordering at Sprouts!</h2>
        <p>A verification e-mail has been sent to your address.</p>
      </div>
      <Link href="/">
        <a>
          <button>Back to the shop</button>
        </a>
      </Link>
    </div>
  );
}
