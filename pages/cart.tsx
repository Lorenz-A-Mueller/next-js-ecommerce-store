import { css } from '@emotion/react';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import CartSingleImage from '../components/CartSingleImage';
import buffering from '../public/buffering.gif';
import stripe_logo from '../public/stripe_logo.png';
import { setCookies } from '../utils/cookies.js';
import { getTotalCartValue } from '../utils/math';
import { cartStyles, redirectionToCheckoutStyles } from '../utils/styles';

type Cart =
  | {
      id: number;
      amount: number;
    }[]
  | [];

type Props = {
  cart: Cart;
  loggedInUser:
    | {}
    | {
        id: number;
        userName: string;
        userPassword: string;
        firstName: string;
        lastName: string;
      };
  setCart: Dispatch<SetStateAction<Cart>>;
  pk: string;
  priceArray: string[];
  products: {
    productId: number;
    productName: string;
    productPrice: number;
    productSize: string;
    productDesc: string;
  }[];
};

export default function ProductCart(props: Props) {
  const [redirectingToCheckout, setRedirectingToCheckout] = useState(false);
  const router = useRouter();

  function handleDeleteItemClick(orderId: number) {
    props.setCart((previous) => {
      return previous.filter((element, index) => {
        return index !== orderId;
      });
    });
  }

  function handleDeleteAllClick() {
    props.setCart([]);
  }

  const stripeLoader = loadStripe(props.pk);

  const handleBuyClick = async () => {
    if (!('id' in props.loggedInUser)) {
      // setRedirectingToLogin(true);
      setCookies('redirectingToLogin', true);
      router.push('/login');
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
    stripeClient!.redirectToCheckout({ sessionId });
  };

  return (
    <>
      <Head>
        <title>Sprouts Farmer's Market - Cart</title>
      </Head>
      <div css={cartStyles} className="fill-middle-area background-image-cover">
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
              data-cy={`cart-single-image-container-${chosenProduct.id}`}
              products={props.products}
              chosenProduct={chosenProduct}
              handleDeleteItemClick={handleDeleteItemClick}
              index={index}
              cart={props.cart}
              setCart={props.setCart}
            />
          ))}

          <div className="delete-all-button-container flex-container-center-content">
            <Link href={!props.cart.length ? '/products' : '/cart'}>
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
          <div className="total-amount-text-container flex-container-center-content">
            <h2>Total Sum: </h2>
            <h2>{getTotalCartValue(props.cart, props.products)}€</h2>
          </div>
          <button onClick={() => handleBuyClick()} data-cy="link-to-checkout">
            Buy Now!
          </button>
        </div>
      </div>
      <div
        css={redirectionToCheckoutStyles}
        className="fill-middle-area redirection-fill-screen"
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
