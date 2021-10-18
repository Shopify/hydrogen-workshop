import { useParams } from 'react-router-dom';
import { PRODUCT_BY_HANDLE_QUERY } from '../../graphql/ProductByHandleQuery.js';
import { useShopQuery } from '@shopify/hydrogen';
import ProductDetails from '../../components/ProductDetails.client';
import NotFound from '../../components/NotFound.server';

export default function Product() {
  const { handle } = useParams();
  const { data } = useShopQuery({
    query: PRODUCT_BY_HANDLE_QUERY,
    variables: {
      handle,
      numProductMedia: 10,
      numProductMetafields: 10,
      numProductVariants: 20,
      numProductSellingPlans: 0,
      numProductSellingPlanGroups: 0,
      numProductVariantMetafields: 0,
      numProductVariantSellingPlanAllocations: 0,
    },
  });

  if (data.product == null) {
    return <NotFound />;
  }

  return <ProductDetails product={data.product} />;
}
