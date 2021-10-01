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
            href={`/products/${product.id}`}
            key={`product-id${product.id}`}
          >
            <a>
              <div
                className="product-tile"
                key={`product-id${product.id}`}
                css={css`
                  display: ${product.name
                    .toLowerCase()
                    .startsWith(props.search.toLowerCase()) || !props.search
                    ? 'flex'
                    : 'none'};
                `}
              >
                <div className="product-name-container">{product.name}</div>

                <img src={`/${product.image}`} alt={product.name} />
              </div>
            </a>
          </Link>
        ))}
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
