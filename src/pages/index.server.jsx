import {
  ProductProviderFragment,
  useShopQuery,
  flattenConnection,
} from "@shopify/hydrogen";
import gql from "graphql-tag";
import Layout from "../components/Layout.server";
import NotFound from "../components/NotFound.server";
import ProductList from "../components/ProductList.client";

export default function Home() {
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

  if (data?.products.length === 0) {
    return <NotFound />;
  }

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
    products(first: 9) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }
  ${ProductProviderFragment}
`;
