import {Product} from '@shopify/hydrogen/client';

export default function ProductDetails({product}) {
  return (
    <Product product={product}>
      <Product.Title />
      <Product.Price />
      <Product.SelectedVariant.AddToCartButton />
      <Product.SelectedVariant.BuyNowButton />
      <Product.SelectedVariant.ShopPayButton />
      <Product.Description />
    </Product>
  )
}