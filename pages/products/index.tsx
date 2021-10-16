import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { productsIndexStyles } from '../../utils/styles';

type Props = {
  products: {
    productId: number;
    productName: string;
    productPrice: number;
    productSize: string;
    productDesc: string;
  }[];
  search: string;
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Sprouts Farmer's Market Products</title>
      </Head>
      <main>
        <div css={productsIndexStyles}>
          {props.products.map((product) => (
            <Link
              href={`/products/${product.productId}`}
              key={`product-id${product.productId}`}
              passHref
            >
              <a
                className="link-no-decoration"
                data-cy={`product-${product.productId}`}
                aria-label={`link to product ${product.productName}`}
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
      </main>
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
