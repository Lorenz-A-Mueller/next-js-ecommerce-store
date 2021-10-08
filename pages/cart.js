import { css } from '@emotion/react';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CartSingleImage from '../components/CartSingleImage';
import {
  cartContainerStyles,
  redirectionToCheckoutContainerStyles,
} from '../components/styles';
import buffering from '../public/buffering.gif';
import stripe_logo from '../public/stripe_logo.png';
import { setCookies } from '../utils/cookies';

export default function Cart(props) {
  const [redirectingToCheckout, setRedirectingToCheckout] = useState(false);
  const [redirectingToLogin, setRedirectingToLogin] = useState(false);
  console.log('redirectingToLoginCART', redirectingToLogin);

  console.log(props.cart);
  function handleDeleteItemClick(orderId) {
    props.setCart((previous) => {
      return previous.filter((element, index) => {
        return index !== orderId;
      });
    });
  }

  // empty the state var when all are deleted

  function handleDeleteAllClick() {
    props.setCart([]);
  }

  function updateAmountInCart(idOfProduct, amountOfProduct) {
    props.setCart(
      props.cart.map((product) => {
        if (product.id !== idOfProduct) {
          return product;
        } else {
          return { id: product.id, amount: amountOfProduct };
        }
      }),
    );
    console.log('props.cart', props.cart);
  }

  const stripeLoader = loadStripe(props.pk);

  const handleBuyClick = async () => {
    if (!props.loggedInUser.id) {
      setRedirectingToLogin(true);
      setCookies('redirectingToLogin', true);
      window.location.href = '/login';
      return;
    }

    setRedirectingToCheckout(true);

    const stripeClient = await stripeLoader;
    const { sessionId } = await fetch('api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems: props.cart.map((singleItem) => {
          return {
            price: props.priceArray[singleItem.id - 1],
            quantity: singleItem.amount,
          };
        }),
      }),
    }).then((res) => res.json());
    stripeClient.redirectToCheckout({ sessionId });
  };

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
            css={css`
              display: ${props.cart.length ? 'none' : 'block'};
            `}
          >
            <p>Your Cart is empty... fill it!</p>
          </div>
          {props.cart.map((chosenProduct, index) => (
            <CartSingleImage
              key={`cart-single-image-container-${chosenProduct.id}`}
              products={props.products}
              chosenProduct={chosenProduct}
              handleDeleteItemClick={handleDeleteItemClick}
              index={index}
              updateAmountInCart={updateAmountInCart}
            />
          ))}

          <div className="delete-all-button-container">
            <Link href={!props.cart.length ? '/' : '/cart'}>
              <a>
                <button
                  onClick={() => handleDeleteAllClick()}
                  css={css`
                    background-color: ${props.cart.length
                      ? 'rgba(255, 0, 0, 0.7)'
                      : 'rgba(0, 0, 255, 0.7)'};

                    &:hover {
                      background-color: ${props.cart.length
                        ? 'rgba(255, 0, 0, 1)'
                        : 'rgba(0, 0, 255, 1)'};
                    }
                  `}
                >
                  {props.cart.length ? 'Delete all' : 'Back to the shop'}
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div
          className="total-amount-container"
          css={css`
            display: ${props.cart.length ? 'flex' : 'none'};
          `}
        >
          <div className="total-amount-text-container">
            <h2>Total Sum: </h2>
            <h2>
              {(
                props.cart.reduce((accumulator, cookieProduct) => {
                  return (accumulator =
                    accumulator +
                    cookieProduct.amount *
                      props.products[cookieProduct.id - 1].productPrice);
                }, 0) / 100
              ).toFixed(2)}
              €
            </h2>
          </div>
          <button
            onClick={
              () => handleBuyClick()
              // redirectToCheckout(props.quantity, props.mode, props.productKeys)
            }
          >
            Buy Now!
          </button>
        </div>
      </div>
      <div
        css={redirectionToCheckoutContainerStyles}
        style={{ display: redirectingToCheckout ? 'flex' : 'none' }}
      >
        <div className="redirection-to-checkout-text-container">
          <h2>You are being redirected to our partner</h2>
          <Image src={stripe_logo} width="150px" height="112px" />
        </div>
        <div className="redirection-to-checkout-buffer-container">
          <Image src={buffering} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../utils/database');
  const products = await getProducts();

  const priceArray = [
    process.env.PRICE1,
    process.env.PRICE2,
    process.env.PRICE3,
    process.env.PRICE4,
    process.env.PRICE5,
    process.env.PRICE6,
    process.env.PRICE7,
    process.env.PRICE8,
    process.env.PRICE9,
    process.env.PRICE10,
    process.env.PRICE11,
    process.env.PRICE12,
    process.env.PRICE13,
    process.env.PRICE14,
    process.env.PRICE15,
    process.env.PRICE16,
    process.env.PRICE17,
    process.env.PRICE18,
    process.env.PRICE19,
    process.env.PRICE20,
    process.env.PRICE21,
    process.env.PRICE22,
    process.env.PRICE23,
    process.env.PRICE24,
  ];

  return {
    props: {
      pk: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      products, // short for products: products
      priceArray,
    },
  };
}
