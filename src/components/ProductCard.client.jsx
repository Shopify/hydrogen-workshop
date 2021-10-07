import { Product, Link } from '@shopify/hydrogen/client';

export default function ProductCart({ product }) {
  const initialVariantId = product.variants.edges[0].node.id;

  return (
    <Link to={`/products/${product.handle}`}>
      <Product product={product} initialVariantId={initialVariantId}>
        <Product.Title className="font-semibold" />
        <Product.SelectedVariant.Image
          options={{ width: 300, height: 300, crop: 'center' }}
        />
        <Product.SelectedVariant.Price>
          {({ amount, currencyCode, currencyNarrowSymbol }) => {
            return (
              <span>
                {currencyCode} {currencyNarrowSymbol}
                {amount}
              </span>
            );
          }}
        </Product.SelectedVariant.Price>
      </Product>
    </Link>
  );
}
