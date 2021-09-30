import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
// import Image from 'next/image';  ?? how to use dynamic sizing with that
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CartSingleImage from '../components/CartSingleImage';
import Layout from '../components/Layout';
import { cartContainerStyles } from '../components/styles';

export default function Cart(props) {
  const [cartCookie, setCartCookie] = useState([]); // array of objects --> [{"id": "...", "amount": "..."}, {.......}]

  // get all the cookies after first render

  useEffect(() => {
    setCartCookie(JSON.parse(Cookies.get('cart')));
  }, []);

  // when cartCookie was changed (item deleted), reset the cookies

  useEffect(() => {
    Cookies.set('cart', JSON.stringify(cartCookie));
    console.log('Cookies after Update: ', Cookies.get('cart'));
  }, [cartCookie]);

  // filter the state variable (filter out the one that was clicked on)

  function handleDeleteItemClick(orderId) {
    setCartCookie((previous) => {
      return previous.filter((element, index) => {
        return index !== orderId;
      });
    });
  }

  // empty the state var when all are deleted

  function handleDeleteAllClick() {
    setCartCookie([]);
  }

  function updateAmountInCart(idOfProduct, amountOfProduct) {
    // if (amountOfProduct === '0' || amountOfProduct === '') {
    // //   alert('yes');
    // }
    console.log('idOfProduct: ', idOfProduct);
    console.log('amountOfProduct: ', amountOfProduct);
    console.log('cartCookie', cartCookie);

    setCartCookie(
      cartCookie.map((product) => {
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
      <Layout>
        <div css={cartContainerStyles}>
          <div className="cart-images-container">
            <h1>Your Cart</h1>
            <div
              className="empty-cart-container"
              style={{ display: cartCookie.length ? 'none' : 'block' }}
            >
              <p>Your Cart is empty... fill it!</p>
            </div>
            {cartCookie.map((chosenProduct, index) => (
              <CartSingleImage
                key={`cart-single-image-container-${props.products[chosenProduct]}`}
                products={props.products}
                chosenProduct={chosenProduct}
                handleDeleteItemClick={handleDeleteItemClick}
                index={index}
                updateAmountInCart={updateAmountInCart}
                setCartCookie={setCartCookie}
                cartCookie={cartCookie}
              />

              // <div
              //   className="cart-single-image-container"
              //   key={`cart-single-image-container-${props.products[chosenProduct]}`}
              // >
              //   <div className="cart-single-image-image-container">
              //     <img
              //       src={props.products[chosenProduct.id - 1].image}
              //       alt={props.products[chosenProduct.id - 1].name}
              //       key={`cart-image-${props.products[chosenProduct.id - 1]}`}
              //     />
              //   </div>
              //   <div className="cart-single-image-text-container">
              //     <h2>{props.products[chosenProduct.id - 1].name}</h2>
              //     <div className="cart-single-image-text-amount-container">
              //       <input
              //         type="number"
              //         value={chosenProduct.amount}
              //         onChange={() => handleOnChange()}
              //       />
              //       <p>{props.products[chosenProduct.id - 1].size}</p>
              //     </div>
              //   </div>
              //   <div className="cart-single-image-price-container">
              //     <p>
              //       {(
              //         chosenProduct.amount *
              //         props.products[chosenProduct.id - 1].price
              //       ).toFixed(2)}
              //       €
              //     </p>
              //   </div>
              //   <div className="cart-single-image-delete-button-container">
              //     <button
              //       title="Delete this product from your cart"
              //       onClick={() => handleDeleteItemClick(index)}
              //     />
              //   </div>
              // </div>
            ))}

            <div className="delete-all-button-container">
              <button
                onClick={() => handleDeleteAllClick()}
                css={css`
                  background-color: ${cartCookie.length
                    ? 'rgba(255, 0, 0, 0.7)'
                    : 'rgba(0, 0, 255, 0.7)'};

                  &:hover {
                    background-color: ${cartCookie.length
                      ? 'rgba(255, 0, 0, 1)'
                      : 'rgba(0, 0, 255, 1)'};
                  }
                `}
              >
                {cartCookie.length ? 'Delete all' : 'Back to the shop'}
              </button>
            </div>
          </div>
          <div className="total-amount-container">
            <div className="total-amount-text-container">
              <h2>Total Sum: </h2>
              <h2>
                {cartCookie
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
      </Layout>
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
