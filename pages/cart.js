import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';  ?? how to use dynamic sizing with that
import CartSingleImage from '../components/CartSingleImage';
import { cartContainerStyles } from '../components/styles';

export default function Cart(props) {
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
          <button>Buy Now!</button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../utils/database');
  const products = await getProducts();
  return {
    props: {
      products, // short for products: products
    },
  };
}
