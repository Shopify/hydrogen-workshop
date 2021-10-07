import { Product } from '@shopify/hydrogen/client';

export default function ProductDetails({ product }) {
  const initialVariant = product.variants.edges[0].node;

  return (
    <Product product={product} initialVariantId={initialVariant.id}>
      <Product.Title />
      <Product.SelectedVariant.Image />
      <Product.SelectedVariant.Price />
      <Product.Description />
    </Product>
  );
}
