import { css } from '@emotion/react';
// import Image from 'next/image';  ?? how to use dynamic sizing with that
import Link from 'next/link';
import Layout from '../components/Layout';
import { productsContainerStyles } from '../components/styles';

// import Head from 'next/head';
// import Image from 'next/image';

export default function Home(props) {
  return (
    <Layout>
      <div css={productsContainerStyles}>
        {props.products.map((product) => (
          <div className="product-tile" key={`product-id${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <a>{product.name}</a>
            </Link>
            <img src={`/${product.image}`} alt={product.name} />
          </div>
        ))}
      </div>
    </Layout>
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
