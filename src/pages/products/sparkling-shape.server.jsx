import {MediaFile, RawHtml, useShopQuery, ProductProviderFragment, flattenConnection} from '@shopify/hydrogen';
import gql from 'graphql-tag';

export default function SparklingShape() {
  const { data } = useShopQuery({
    query: QUERY,
    variables: {
      handle: 'sparkling-shape',
      numProductMedia: 10,
      numProductMetafields: 10,
      numProductVariants: 20,
      numProductSellingPlans: 0,
      numProductSellingPlanGroups: 0,
      numProductVariantMetafields: 0,
      numProductVariantSellingPlanAllocations: 0,
    },
  });

  return (
    <>
      <p>{data.product.title}</p>
      <MediaFile media={flattenConnection(data.product.media)[0]}/>
      <RawHtml string={data.product.descriptionHtml}/>
    </>
  )
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