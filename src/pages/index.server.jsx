import {
  ProductProviderFragment,
  useShopQuery,
  flattenConnection,
} from "@shopify/hydrogen";
import gql from "graphql-tag";
import Layout from "../components/Layout.server";
import NotFound from "../components/NotFound.server";
import ProductList from "../components/ProductList.client";
import LoadMore from "../components/LoadMore.client";

export default function Home({ max = 4 }) {
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
      max,
    },
  });

  if (data?.products.length === 0) {
    return <NotFound />;
  }

  const products = flattenConnection(data.products);

  return (
    <Layout>
      <LoadMore
        current={data.products.edges.length}
        hasMore={data.products.pageInfo.hasNextPage}
      >
        <ProductList products={products} />
      </LoadMore>
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
    $max: Int!
  ) {
    products(first: $max) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
  ${ProductProviderFragment}
`;
