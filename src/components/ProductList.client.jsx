import ProductCard from "./ProductCard.client";

export default function ProductList({ products }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
