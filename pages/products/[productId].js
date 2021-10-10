import Head from 'next/head';
import { useState } from 'react';
import { productIdStyles } from '../../components/styles';

export default function Product(props) {
  const [amount, setAmount] = useState(1);

  function handleChange(e) {
    if (e.currentTarget.value > 9) {
      setAmount(9);
    } else if (e.currentTarget.value < 0) {
      setAmount(1);
    } else {
      if (
        // if dec. point is entered, round the number down immediately
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
    setTimeout(() => {
      window.location.href = '/products';
    }, 700);
  }
  function handleLostFocus(e) {
    if (e.currentTarget.value === '0' || e.currentTarget.value === '') {
      setAmount(1);
    }
  }

  return (
    <>
      <Head>
        <title>Sprouts Product - {props.currentProduct.productName}</title>
      </Head>
      <div css={productIdStyles} className="fill-middle-area">
        <div className="productId-image-container">
          <img
            src={`/product_images/${props.currentProduct.productId}.jpeg`}
            alt={props.currentProduct.productName}
          />
        </div>
        <div className="productId-text-container">
          <h1>{props.currentProduct.productName}</h1>
          <p>
            {props.currentProduct.productDesc
              ? props.currentProduct.productDesc
              : ''}
          </p>
          <div className="productId-text-priceinfo-container flex-container-center-content">
            <h2>
              €{(props.currentProduct.productPrice / 100).toFixed(2)}/
              {props.currentProduct.productSize}
            </h2>
            <div className="amount-container flex-container-center-content">
              <p>Select Amount:</p>
              <div className="select-amount-container flex-container-center-content">
                <input
                  type="number"
                  onChange={(e) => handleChange(e)}
                  value={amount}
                  max="9"
                  min="0"
                  step="1"
                  onBlur={(e) => handleLostFocus(e)}
                />
                <p>
                  {props.currentProduct.productSize}
                  {amount > 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <p>
              Amounts to:
              <span>
                €
                {((amount * props.currentProduct.productPrice) / 100).toFixed(
                  2,
                )}
              </span>
            </p>
          </div>
          <button
            onClick={() =>
              handleOnClick(props.currentProduct.productId, amount)
            }
          >
            Add to Cart!
          </button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { getProduct } = await import('../../utils/database');

  // const idFromUrl = context.query.productId;
  // const currentProduct = products.find((product) => idFromUrl === product.id);

  const currentProduct = await getProduct(context.query.productId);

  return {
    props: {
      currentProduct,
    },
  };
}
