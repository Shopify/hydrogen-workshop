import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { ProductProviderFragment, useShopQuery } from '@shopify/hydrogen';
import ProductDetails from '../../components/ProductDetails.client';

export default function Product() {
  const { handle } = useParams();
  const { data } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  });
  console.log('handle', handle);
  console.log('data', data);
  if (data == null || data.productByHandle == null) {
    return <p>Not found</p>;
  }

  return <ProductDetails product={data.productByHandle} />;
}

const QUERY = gql`
  query ProductPage(
    $handle: String!
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 10
    $numProductVariantMetafields: Int = 0
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
  ) {
    productByHandle(handle: $handle) {
      ...ProductProviderFragment
    }
  }

  ${ProductProviderFragment}
`;
