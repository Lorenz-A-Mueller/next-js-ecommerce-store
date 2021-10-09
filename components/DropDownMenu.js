import Link from 'next/link';
import { dropDownMenuStyles } from './styles';

export default function DropDownMenu(props) {
  return (
    <div
      css={dropDownMenuStyles}
      onMouseOver={props.handleMouseOver}
      onFocus={props.handleMouseOver}
      onMouseOut={props.handleMouseOut}
      onBlur={props.handleMouseOut}
    >
      <div className="dropdown-link-button">
        <Link href={props.loggedInUser.id ? '/account' : '/login'}>
          <a className="flex-container-center-content">
            <button onClick={props.handleMouseOut} className="button-blue">
              {props.loggedInUser.id ? 'Account' : 'Log In'}
            </button>
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/signup">
          <a
            style={{ display: props.loggedInUser.id ? 'none' : 'flex' }}
            className="flex-container-center-content"
          >
            <button onClick={props.handleMouseOut} className="button-blue">
              Sign Up
            </button>
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/cart">
          <a className="flex-container-center-content">
            <button onClick={props.handleMouseOut} className="button-blue">
              Your Cart
            </button>
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
