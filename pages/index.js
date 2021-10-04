import { css } from '@emotion/react';
import Head from 'next/head';
// import Image from 'next/image';  ?? how to use dynamic sizing with that
import Link from 'next/link';
import { productsContainerStyles } from '../components/styles';

// import Head from 'next/head';
// import Image from 'next/image';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Sprouts Farmer Market Homepage</title>
      </Head>
      <div css={productsContainerStyles}>
        {props.products.map((product) => (
          <Link
            href={`/products/${product.productId}`}
            key={`product-id${product.productId}`}
          >
            <a>
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
  const { getProducts } = await import('../utils/database');
  const products = await getProducts();
  return {
    props: {
      products, // short for products: products
    },
  };
}
