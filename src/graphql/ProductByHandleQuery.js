import gql from 'graphql-tag';
import { ProductProviderFragment } from '@shopify/hydrogen';

export const PRODUCT_BY_HANDLE_QUERY = gql`
query ProductDetailsQuery(
  $handle: String!,
  $numProductMedia: Int!,
  $numProductMetafields: Int!,
  $numProductVariants: Int!,
  $numProductSellingPlans: Int!,
  $numProductSellingPlanGroups: Int!,
  $numProductVariantMetafields: Int!,
  $numProductVariantSellingPlanAllocations: Int!
  ) {
  product (handle: $handle) {
    ...ProductProviderFragment
  }
}
${ProductProviderFragment}
`