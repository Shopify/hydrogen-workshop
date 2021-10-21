import {Product, useProduct, MediaFile} from '@shopify/hydrogen/client';

export default function ProductDetails({product}) {
  const initialVariant = product.variants.edges[0].node;

  return (
    <Product product={product} initialVariantId={initialVariant.id}>
      <div>
        <Product.SelectedVariant.Image />
        <Gallery />
        <Product.Title />
        <Product.SelectedVariant.Price />
        <Product.SelectedVariant.Price priceType="compareAt"/>
        <Options />
        <Product.SelectedVariant.AddToCartButton>
          Add to cart
        </Product.SelectedVariant.AddToCartButton>
        <Product.SelectedVariant.BuyNowButton>
          Buy it now
        </Product.SelectedVariant.BuyNowButton>
        <Product.Description />
      </div>
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

function Options() {
  const {options, selectedOptions, setSelectedOption} = useProduct();

  return (
    <ul>
      {options.map((option) => {
        return (
          <li>
            <span>{option.name}</span>
            {option.values.map((value) => {
              return (
                <>
                  <input
                    type="radio"
                    value={value}
                    id={value}
                    name={option.name}
                    checked={selectedOptions[option.name] === value}
                    onChange={(event) => setSelectedOption(option.name, event.target.value)}
                  />
                  <label htmlFor={value}>{value}</label>

                </>
              )
            })}
          </li>
        )
      })}
    </ul>
  );
}