import {Product, useProduct, MediaFile} from '@shopify/hydrogen/client';

export default function ProductDetails({product}) {
  const initialVariant = product.variants.edges[0].node;

  return (
    <Product product={product} initialVariantId={initialVariant.id}>
      <Product.SelectedVariant.Image />
      <Gallery />
      <Product.Title />
      <Product.SelectedVariant.Price />
      <Product.SelectedVariant.Price priceType="compareAt"/>
      <Product.SelectedVariant.AddToCartButton>
        Add to cart
      </Product.SelectedVariant.AddToCartButton>
      <Product.SelectedVariant.BuyNowButton>
        Buy it now
      </Product.SelectedVariant.BuyNowButton>
      <Product.Description />
    </Product>
  )
}

function Gallery() {
  const {media} = useProduct();

  return (
    <ul>
      {media.map((productMedia) => {
        return (
          <li>
            <MediaFile media={productMedia} options={{
              width: 100,
              height: 100,
              crop: 'center'
            }}/>
          </li>
        )
      })}
    </ul>
  );
}