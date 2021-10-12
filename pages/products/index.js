import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { productsIndexStyles } from '../../components/styles';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Sprouts Farmer's Market Products</title>
      </Head>
      <div css={productsIndexStyles} className="fill-middle-area">
        {props.products.map((product) => (
          <Link
            href={`/products/${product.productId}`}
            key={`product-id${product.productId}`}
          >
            <a
              className="link-no-decoration"
              data-cy={`product-${product.productId}`}
            >
              <div
                className="product-tile"
                key={`product-id${product.productId}`}
                css={css`
                  display: ${product.productName
                    .toLowerCase()
                    .startsWith(props.search.toLowerCase()) || !props.search
                    ? 'flex'
                    : 'none'};
                `}
              >
                <div className="product-name-container">
                  {product.productName}
                </div>

                <img
                  src={`/product_images/${product.productId}.jpeg`}
                  alt={product.productName}
                />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../../utils/database');
  const products = await getProducts();
  return {
    props: {
      products, // short for products: products
    },
  };
}
