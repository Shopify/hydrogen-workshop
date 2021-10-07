import {
  useShopQuery,
  flattenConnection,
  ProductProviderFragment,
} from '@shopify/hydrogen';
import ProductCard from '../components/ProductCard.client';
import gql from 'graphql-tag';

export default function Index() {
  const { data } = useShopQuery({
    query: QUERY,
  });

  const products = data.products ? flattenConnection(data.products) : [];
  console.log(products);

  return (
    <>
      {products.map((product) => {
        return (
          <ul key={product.id}>
            <ProductCard product={product} />
          </ul>
        );
      })}
    </>
  );
}

const QUERY = gql`
  query IndexContent(
    $numProducts: Int = 5
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 10
    $numProductVariantMetafields: Int = 0
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
  ) {
    products(first: $numProducts) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }

  ${ProductProviderFragment}
`;
