import { ReactNode } from 'react';
import { layoutStyles } from '../utils/styles';
import Footer from './Footer';
import Header from './Header';

type Props = {
  handleSearchInput: (arg: string) => void;
  cart: { id: number; amount: number }[];
  loggedInUser:
    | {}
    | {
        id: number;
        userName: string;
        userPassword: string;
        firstName: string;
        lastName: string;
      };
  setLoggedInUser: (
    arg:
      | {}
      | {
          id: number;
          userName: string;
          userPassword: string;
          firstName: string;
          lastName: string;
        },
  ) => void;
  // firstLetterOfSearch: string;
  // setFirstLetterOfSearch(arg: string): void;
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div css={layoutStyles}>
      <Header
        handleSearchInput={props.handleSearchInput}
        cart={props.cart}
        loggedInUser={props.loggedInUser}
        setLoggedInUser={props.setLoggedInUser}
        // firstLetterOfSearch={props.firstLetterOfSearch}
        // setFirstLetterOfSearch={props.setFirstLetterOfSearch}
      />
      {props.children}
      <Footer />
    </div>
  );
}
