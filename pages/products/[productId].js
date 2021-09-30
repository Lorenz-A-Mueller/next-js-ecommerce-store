import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { currentProductContainerStyles } from '../../components/styles';
import plus_one from '../../public/plus_one.png';
import { getCookies, setCookies } from '../../utils/cookies';

export default function Product(props) {
  const startValue = 1;
  const [amount, setAmount] = useState(
    props.currentProduct.size === 'kg' ? startValue.toPrecision(3) : startValue,
  );
  const [clickedOnProducts, setClickedOnProducts] = useState([]);
  const [hasClicked, setHasClicked] = useState(false);

  function handleChange(e) {
    if (e.currentTarget.value > 9) {
      setAmount(9);
    } else if (e.currentTarget.value < 0) {
      setAmount(1);
    } else {
      if (
        props.currentProduct.size !== 'kg' && // if dec. point is entered (if size not 'kg'), round the number down immediately
        e.currentTarget.value.length > 2
      ) {
        setAmount(Math.floor(e.currentTarget.value));
      } else {
        setAmount(e.currentTarget.value);
      }
    }
  }

  useEffect(() => {
    if (typeof Cookies.get('cart') !== 'undefined') {
      setClickedOnProducts(getCookies('cart')); // when loading new product site, build the state var from the cookies
    }
  }, []);

  useEffect(() => {
    console.log('clicked on products in useEffect ', clickedOnProducts); // update the Cookies based on the state var
    setCookies('cart', clickedOnProducts);
  }, [clickedOnProducts]);

  function handleOnClick(currentProductId, currentProductAmount) {
    // update the state var when clicked
    setClickedOnProducts((previous) => {
      return previous.concat({
        id: currentProductId,
        amount: currentProductAmount,
      });
    });
    console.log('clickedOnProducts ', clickedOnProducts);

    setHasClicked(true);
    setTimeout(() => {
      setHasClicked(false);
    }, 2000);
    props.setNumberOfClickedOnProducts((previous) => previous + 1);
  }

  return (
    <>
      <Head>
        <title>Sprouts Product - {props.currentProduct.name}</title>
      </Head>
      <div css={currentProductContainerStyles}>
        <div className="current-product-image-container">
          <img
            src={`/${props.currentProduct.image}`}
            alt={props.currentProduct.name}
          />
        </div>
        <div className="current-product-text-container">
          <h1>{props.currentProduct.name}</h1>
          <p>{props.currentProduct.desc ? props.currentProduct.desc : ''}</p>
          <h2>
            €{props.currentProduct.price}/{props.currentProduct.size}
          </h2>
          <div className="amount-container">
            <p>Enter Amount:</p>
            <div className="select-amount-container">
              <input
                type="number"
                onChange={(e) => handleChange(e)}
                value={amount}
                max="9"
                min="0"
                step={props.currentProduct.size === 'kg' ? '0.01' : '1'}
              />
              <p>
                {props.currentProduct.size}
                {props.currentProduct.size !== 'kg' && amount > 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <p>€{(amount * props.currentProduct.price).toFixed(2)}</p>
          <button
            onClick={() => handleOnClick(props.currentProduct.id, amount)}
          >
            Add to Cart!
          </button>
        </div>
      </div>
      <div
        className="plus-one-container"
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          display: ${hasClicked ? 'block' : 'none'};
        `}
      >
        <Image src={plus_one} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../utils/products');

  const idFromUrl = context.query.productId;

  const currentProduct = products.find((product) => idFromUrl === product.id);

  return {
    props: {
      currentProduct,
    },
  };
}
