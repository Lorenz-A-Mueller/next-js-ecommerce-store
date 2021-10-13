import Link from 'next/link';
import { dropDownMenuStyles } from './styles';

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
        <Link href={'id' in props.loggedInUser ? '/account' : '/login'}>
          <a className="flex-container-center-content">
            <button onClick={props.handleMouseOut}>
              {'id' in props.loggedInUser ? 'Account' : 'Log In'}
            </button>
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/signup">
          <a
            style={{ display: 'id' in props.loggedInUser ? 'none' : 'flex' }}
            className="flex-container-center-content"
          >
            <button onClick={props.handleMouseOut}>Sign Up</button>
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/cart">
          <a className="flex-container-center-content">
            <button onClick={props.handleMouseOut}>Your Cart</button>
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
