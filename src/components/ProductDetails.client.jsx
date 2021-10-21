import {Product, useProduct, MediaFile} from '@shopify/hydrogen/client';

export default function ProductDetails({product}) {
  const initialVariant = product.variants.edges[0].node;

  return (
    <Product product={product} initialVariantId={initialVariant.id}>
      <div className="grid grid-cols-3">
        <div className="col-span-2 mr-4">
          <Product.SelectedVariant.Image className="rounded-lg"/>
          <Gallery />
        </div>
        <div className="space-y-2">
          <Product.Title className="text-3xl font-semibold"/>
          <Product.SelectedVariant.Price>
            {(price) => {
              return (
                <>
                  <span className="text-xs text-gray-400 mr-2">{price.currencyCode}</span>
                  <span>{price.currencyNarrowSymbol}</span>
                  <span>{price.parts.map((part) => part.value).join('')}</span>
                </>
              );
            }}
          </Product.SelectedVariant.Price>
          <Product.SelectedVariant.Price priceType="compareAt"/>
          <Options />
          <Product.SelectedVariant.AddToCartButton className="bg-black text-white px-6 py-2 rounded-lg">
            Add to cart
          </Product.SelectedVariant.AddToCartButton>
          <Product.SelectedVariant.BuyNowButton className="border border-black px-6 py-2 rounded-lg">
            Buy it now
          </Product.SelectedVariant.BuyNowButton>
          <Product.Description />
        </div>
      </div>
    </Product>
  )
}

function Gallery() {
  const {media} = useProduct();

  return (
    <ul className="grid grid-cols-4 gap-2 mt-2">
      {media.map((productMedia) => {
        return (
          <li>
            <MediaFile className="rounded-lg" media={productMedia} options={{
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