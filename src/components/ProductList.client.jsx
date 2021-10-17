import { Product, useProduct, MediaFile } from "@shopify/hydrogen/client";
import ProductCard from "./ProductCard.client";

export default function ProductList({ products }) {
  if (products.length === 0) {
    <div>No products available.</div>;
  }

  const productsMarkup = products.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
      {productsMarkup}
    </div>
  );
}
