import Link from 'next/link';
import { dropDownMenuStyles } from '../utils/styles';

type Props = {
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  handleLogOutClick: () => void;
  loggedInUser:
    | {}
    | {
        id: number;
        userName: string;
        userPassword: string;
        firstName: string;
        lastName: string;
      };
};

export default function DropDownMenu(props: Props) {
  return (
    <div
      css={dropDownMenuStyles}
      onMouseOver={props.handleMouseOver}
      onFocus={props.handleMouseOver}
      onMouseOut={props.handleMouseOut}
      onBlur={props.handleMouseOut}
    >
      <div className="dropdown-link-button">
        <Link
          href={'id' in props.loggedInUser ? '/account' : '/login'}
          passHref
        >
          <a className="button-like-link flex-container-center-content">
            {'id' in props.loggedInUser ? 'Account' : 'Log In'}
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/signup" passHref>
          <a className="button-like-link flex-container-center-content">
            Sign Up
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/cart" passHref>
          <a className="button-like-link flex-container-center-content">
            Your Cart
          </a>
        </Link>
      </div>
      <div className="dropdown-logout-button flex-container-center-content">
        <button onClick={props.handleLogOutClick} className="button-red">
          Log out
        </button>
      </div>
    </div>
  );
}
