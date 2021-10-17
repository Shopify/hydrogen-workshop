import {
  Link,
  ProductProvider,
  ProductTitle,
  SelectedVariantImage,
  SelectedVariantPrice,
} from "@shopify/hydrogen/client";

export default function ProductCard({ product }) {
  if (!product) return null;

  const firstVariant = product.variants?.edges[0]?.node;

  return (
    <ProductProvider product={product} initialVariantId={firstVariant.id}>
      <Link to={`/products/${product.handle}`}>
        <SelectedVariantImage className="rounded-md mb-2 m:auto object-cover" />
        <ProductTitle className="text-gray-900 font-medium" />
      </Link>
      <div className="flex items-center">
        <SelectedVariantPrice className="text-gray-900">
          {({ currencyCode, amount, currencyNarrowSymbol }) => {
            return (
              <span>{`${currencyCode} ${currencyNarrowSymbol}${amount}`}</span>
            );
          }}
        </SelectedVariantPrice>
        <SelectedVariantPrice
          priceType="compareAt"
          className="text-gray-400 line-through"
        >
          {({ amount, currencyNarrowSymbol }) => {
            return <span>{`${currencyNarrowSymbol}${amount}`}</span>;
          }}
        </SelectedVariantPrice>
      </div>
    </ProductProvider>
  );
}
