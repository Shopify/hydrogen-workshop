import {
  useShopQuery,
  ProductProviderFragment,
  flattenConnection,
} from "@shopify/hydrogen";
import Layout from "../components/Layout.server";
import ProductList from "../components/ProductList.client";

import gql from "graphql-tag";

export default function Index() {
  const { data } = useShopQuery({
    query: QUERY,
    variables: {
      numProductMedia: 10,
      numProductMetafields: 10,
      numProductVariants: 250,
      numProductSellingPlans: 0,
      numProductSellingPlanGroups: 0,
      numProductVariantMetafields: 10,
      numProductVariantSellingPlanAllocations: 10,
    },
  });

  const products = flattenConnection(data.products);

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
}

const QUERY = gql`
  query HomeQuery(
    $numProductMedia: Int!
    $numProductMetafields: Int!
    $numProductVariants: Int!
    $numProductSellingPlans: Int!
    $numProductSellingPlanGroups: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
  ) {
    products(first: 10) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }

  ${ProductProviderFragment}
`;
