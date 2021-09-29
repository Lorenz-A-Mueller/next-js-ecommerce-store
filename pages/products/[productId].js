import Layout from '../../components/Layout';
import { currentProductContainerStyles } from '../../components/styles';

export default function Product(props) {
  return (
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
          <button>Add to Cart!</button>
        </div>
      </div>
    </Layout>
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
