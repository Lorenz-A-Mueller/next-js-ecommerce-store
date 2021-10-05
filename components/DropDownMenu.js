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
        <Link href="/login">
          <a>
            <button onClick={props.handleMouseOut}>Log In</button>
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/signup">
          <a>
            <button onClick={props.handleMouseOut}>Sign Up</button>
          </a>
        </Link>
      </div>
      <div className="dropdown-link-button">
        <Link href="/cart">
          <a>
            <button onClick={props.handleMouseOut}>Your Cart</button>
          </a>
        </Link>
      </div>
      <div className="dropdown-logout-button">
        <button onClick={props.handleLogOutClick}>Log out</button>
      </div>
    </div>
  );
}
