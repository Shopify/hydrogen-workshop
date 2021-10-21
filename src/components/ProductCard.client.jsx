import {
  SelectedVariantImage,
  SelectedVariantPrice,
  ProductProvider,
  ProductTitle,
  Link,
} from "@shopify/hydrogen/client";

export default function ProductCard({ product }) {
  const firstVariant = product.variants.edges[0].node;

  return (
    <ProductProvider product={product} initialVariantId={firstVariant.id}>
      <div className="mb-6">
        <Link to={`/products/${product.handle}`}>
          <SelectedVariantImage />
          <ProductTitle className="py-2 font-medium" />
          <SelectedVariantPrice className="text-gray-600" />
        </Link>
      </div>
    </ProductProvider>
  );
}
