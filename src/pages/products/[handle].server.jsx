import {useParams} from 'react-router-dom';
import gql from 'graphql-tag';
import {useShopQuery, ProductProviderFragment} from '@shopify/hydrogen';
import ProductDetails from '../../components/ProductDetails.client';
import NotFound from '../../components/NotFound.server';

export default function Product() {
  const {handle} = useParams();
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      handle,
      numProductMedia: 10,
      numProductMetafields: 10,
      numProductVariants: 250,
      numProductSellingPlans: 0,
      numProductSellingPlanGroups: 0,
      numProductVariantMetafields: 10,
      numProductVariantSellingPlanAllocations: 10,
    }
  })

  if (data == null || data.product == null){
    return <NotFound />
  }

  return <ProductDetails product={data.product} />
}

const QUERY = gql`
  query ProductDetailsPage(
    $handle: String!
    $numProductMedia: Int!
    $numProductMetafields: Int!
    $numProductVariants: Int!
    $numProductSellingPlans: Int!
    $numProductSellingPlanGroups: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
  ) {
    product (handle: $handle) {
      ...ProductProviderFragment
    }
  }

  ${ProductProviderFragment}
`;