import Head from 'next/head';
import { useState } from 'react';
import { currentProductContainerStyles } from '../../components/styles';

export default function Product(props) {
  const startValue = 1;
  const [amount, setAmount] = useState(
    props.currentProduct.size === 'kg' ? startValue.toPrecision(3) : startValue,
  );
  // const [clickedOnProducts, setClickedOnProducts] = useState(
  //   getCookies('cart'),
  // );

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

  function handleOnClick(currentProductId, currentProductAmount) {
    // test whether product with same id is already in cart
    // if so, replace it with a new object with the combined amounts (and restrict it to 9)
    const oldProduct = props.cart.find((productAlreadyInCart) => {
      return productAlreadyInCart.id === currentProductId;
    });
    if (oldProduct) {
      const oldProductIndex = props.cart.findIndex((productAlreadyInCart) => {
        return productAlreadyInCart.id === currentProductId;
      });
      const copyOfCart = [...props.cart];
      let newAmount =
        parseFloat(oldProduct.amount) + parseFloat(currentProductAmount);
      if (newAmount > 9) newAmount = 9;
      copyOfCart.splice(oldProductIndex, 1, {
        id: currentProductId,
        amount: newAmount,
      });
      props.setCart(copyOfCart);
    } else {
      props.setCart((previous) => {
        return previous.concat({
          id: currentProductId,
          amount: currentProductAmount,
        });
      });
    }
  }
  function handleLostFocus(e) {
    if (e.currentTarget.value === '0' || e.currentTarget.value === '') {
      setAmount(1);
    }
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
          <div className="current-product-text-priceinfo-container">
            <h2>
              €{props.currentProduct.price}/{props.currentProduct.size}
            </h2>
            <div className="amount-container">
              <p>Select Amount:</p>
              <div className="select-amount-container">
                <input
                  type="number"
                  onChange={(e) => handleChange(e)}
                  value={amount}
                  max="9"
                  min="0"
                  step={props.currentProduct.size === 'kg' ? '0.01' : '1'}
                  onBlur={(e) => handleLostFocus(e)}
                />
                <p>
                  {props.currentProduct.size}
                  {props.currentProduct.size !== 'kg' && amount > 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <p>
              Amounts to:{' '}
              <span>€{(amount * props.currentProduct.price).toFixed(2)}</span>
            </p>
          </div>
          <button
            onClick={() => handleOnClick(props.currentProduct.id, amount)}
          >
            Add to Cart!
          </button>
        </div>
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
