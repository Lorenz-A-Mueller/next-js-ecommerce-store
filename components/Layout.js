import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { layoutStyles } from './styles';

export default function Layout(props) {
  useEffect(() => {
    console.log(
      'number of clicked on products in layout',
      props.numberOfClickedOnProducts,
    );
  }, [props.numberOfClickedOnProducts]);
  return (
    <div css={layoutStyles}>
      <Header
        handleSearchInput={props.handleSearchInput}
        numberOfClickedOnProducts={props.numberOfClickedOnProducts}
        cart={props.cart}
        loggedInUser={props.loggedInUser}
        setLoggedInUser={props.setLoggedInUser}
        firstLetterOfSearch={props.firstLetterOfSearch}
        setFirstLetterOfSearch={props.setFirstLetterOfSearch}
      />
      {props.children}
      <Footer />
    </div>
  );
}
