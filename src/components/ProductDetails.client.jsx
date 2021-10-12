import {Product, useProduct, MediaFile} from '@shopify/hydrogen/client';

export default function ProductDetails({product}) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Product product={product} initialVariantId={product.variants.edges[0].node.id}>
        <div className="col-span-2 space-y-4">
          <Product.SelectedVariant.Image className="rounded-xl w-full h-screen object-cover"/>
          <Media />
        </div>
        <div className="col-span-1 space-y-4">
          <Product.Title className="font-bold text-4xl"/>
          <Product.Price className="font-semibold text-2xl" />
          <Product.Metafield namespace="reviews" keyName="rating" className="text-3xl text-yellow-500"/>
          <Options />
          <Product.SelectedVariant.AddToCartButton className="bg-black text-white h-12 w-full rounded-xl text-xl">Add to cart</Product.SelectedVariant.AddToCartButton>
          <Product.SelectedVariant.BuyNowButton className="border border-black h-12 w-full rounded-xl text-xl">Buy it now</Product.SelectedVariant.BuyNowButton>
          <Product.SelectedVariant.ShopPayButton />
          <Product.Description />
        </div>
      </Product>
    </div>
  )
}

function Media() {
  const {media} = useProduct();

  return (
    <ul className="grid grid-cols-2 gap-4">
      {media.map((med) => {
        return <li className="col-span-1"><MediaFile media={med} className="h-full w-full rounded-xl" /></li>
      })}
    </ul>
  )
}

function Options() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  return (
    <ul>
      {options.map((option) => {
        return (
          <li>
            <span className="font-semibold">{option.name}</span>
            <fieldset>
              {option.values.map((value) => {
                const checked = selectedOptions[option.name] === value;

                return (
                  <div>
                    <input
                      type="radio"
                      id={`${option.name}-${value}`}
                      name={option.name}
                      value={value}
                      checked={checked}
                      onChange={() => setSelectedOption(option.name, value)} />
                    <label htmlFor={`${option.name}-${value}`}>{value}</label>
                  </div>
                )
              })}
            </fieldset>
          </li>
        )
      })}
    </ul>
  );
}