import { PRODUCT_BY_HANDLE_QUERY } from '../../graphql/ProductByHandleQuery.js';
import { useShopQuery, RawHtml } from '@shopify/hydrogen';
import BuyNowSection from '../../components/BuyNowSection.client';

export default function HolyPondPage() {
  const { data } = useShopQuery({
    query: PRODUCT_BY_HANDLE_QUERY,
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
      <div
        style={{
          backgroundImage: `url('${data.product.media.edges[0].node.image.originalSrc}')`,
          backgroundPosition: 'center',
        }}
        className="w-screen h-screen text-center"
      >
        <p className="italic semibold text-white opacity-80 text-4xl">
          It's back, and it's better than ever
        </p>
        <p className="text-5xl text-white">Finally.</p>
        <h1 className="text-6xl font-bold">{data.product.title}</h1>
      </div>
      <div className="p-10 space-y-4">
        <RawHtml string={data.product.descriptionHtml} />
        <BuyNowSection variant={data.product.variants.edges[0].node.id} />
      </div>
    </>
  );
}
