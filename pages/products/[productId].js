import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { currentProductContainerStyles } from '../../components/styles';

export default function Product(props) {
  const startValue = 1;
  const [amount, setAmount] = useState(
    props.currentProduct.size === 'kg' ? startValue.toPrecision(3) : startValue,
  );
  return (
    <>
      <Head>
        <title>Sprouts Product - {props.currentProduct.name}</title>
      </Head>
      <Layout>
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
                  // placeholder="Enter Amount"
                  onChange={(e) => setAmount(e.currentTarget.value)}
                  value={amount}
                  max="9"
                  min="1"
                  step={props.currentProduct.size === 'kg' ? '0.01' : '1'}
                />
                <p>
                  {props.currentProduct.size}
                  {props.currentProduct.size !== 'kg' && amount > 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <p>€{(amount * props.currentProduct.price).toFixed(2)}</p>
            <button>Add to Cart!</button>
          </div>
        </div>
      </Layout>
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
