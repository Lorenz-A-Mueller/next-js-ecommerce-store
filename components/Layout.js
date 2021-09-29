import Footer from './Footer';
import Header from './Header';
import { layoutStyles } from './styles';

export default function Layout(props) {
  return (
    <div css={layoutStyles}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
