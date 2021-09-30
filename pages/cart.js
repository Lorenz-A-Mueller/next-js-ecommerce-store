import { css } from '@emotion/react';
import Head from 'next/head';
// import Image from 'next/image';  ?? how to use dynamic sizing with that
import { useEffect, useState } from 'react';
import CartSingleImage from '../components/CartSingleImage';
import { cartContainerStyles } from '../components/styles';
import { getCookies, setCookies } from '../utils/cookies';

export default function Cart(props) {
  const [cart, setCart] = useState([]); // array of objects --> [{"id": "...", "amount": "..."}, {.......}]

  // get all the cookies after first render

  useEffect(() => {
    setCart(getCookies('cart'));
  }, []);

  useEffect(() => {
    console.log(
      'number of clicked on products in cart',
      props.numberOfClickedOnProducts,
    );
  }, [props.numberOfClickedOnProducts]);

  // when cartCookie was changed (item deleted), reset the cookies

  useEffect(() => {
    setCookies('cart', cart);
  }, [cart]);

  // filter the state variable (filter out the one that was clicked on)

  function handleDeleteItemClick(orderId) {
    props.setNumberOfClickedOnProducts((previous) => previous - 1);
    setCart((previous) => {
      return previous.filter((element, index) => {
        return index !== orderId;
      });
    });
  }

  // empty the state var when all are deleted

  function handleDeleteAllClick() {
    setCart([]);
    props.setNumberOfClickedOnProducts(0);
  }

  function updateAmountInCart(idOfProduct, amountOfProduct) {
    setCart(
      cart.map((product) => {
        if (product.id !== idOfProduct) {
          return product;
        } else {
          return { id: product.id, amount: amountOfProduct };
        }
      }),
    );
  }

  return (
    <>
      <Head>
        <title>Sprouts Cart</title>
      </Head>
      <div css={cartContainerStyles}>
        <div className="cart-images-container">
          <h1>Your Cart</h1>
          <div
            className="empty-cart-container"
            style={{ display: cart.length ? 'none' : 'block' }}
          >
            <p>Your Cart is empty... fill it!</p>
          </div>
          {cart.map((chosenProduct, index) => (
            <CartSingleImage
              key={`cart-single-image-container-${props.products[chosenProduct]}`}
              products={props.products}
              chosenProduct={chosenProduct}
              handleDeleteItemClick={handleDeleteItemClick}
              index={index}
              updateAmountInCart={updateAmountInCart}
            />
          ))}

          <div className="delete-all-button-container">
            <button
              onClick={() => handleDeleteAllClick()}
              css={css`
                background-color: ${cart.length
                  ? 'rgba(255, 0, 0, 0.7)'
                  : 'rgba(0, 0, 255, 0.7)'};

                &:hover {
                  background-color: ${cart.length
                    ? 'rgba(255, 0, 0, 1)'
                    : 'rgba(0, 0, 255, 1)'};
                }
              `}
            >
              {cart.length ? 'Delete all' : 'Back to the shop'}
            </button>
          </div>
        </div>
        <div className="total-amount-container">
          <div className="total-amount-text-container">
            <h2>Total Sum: </h2>
            <h2>
              {cart
                .reduce((accumulator, cookieProduct) => {
                  return (accumulator =
                    accumulator +
                    cookieProduct.amount *
                      props.products[cookieProduct.id - 1].price);
                }, 0)
                .toFixed(2)}
              €
            </h2>
          </div>
          <button>Buy Now!</button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { products } = await import('../utils/products');
  return {
    props: {
      products, // short for products: products
    },
  };
}
