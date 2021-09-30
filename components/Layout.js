import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { layoutStyles } from './styles';

export default function Layout(props) {
  return (
    <div css={layoutStyles}>
      <Header handleSearchInput={props.handleSearchInput} />
      {props.children}
      <Footer />
    </div>
  );
}
