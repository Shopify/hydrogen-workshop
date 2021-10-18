import { Product, MediaFile, useProduct } from '@shopify/hydrogen/client';

export default function ProductDetails({ product }) {
  const initialVariantId = product.variants.edges[0].node.id;

  return (
    <Product product={product} initialVariantId={initialVariantId}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Product.SelectedVariant.Image className="rounded-lg" />
          <Media />
        </div>
        <div>
          <Product.Title className="font-bold text-3xl" />
          <div className="space-x-2 text-xl font-semibold my-4">
            <Product.SelectedVariant.Price as="span" />
            <Product.SelectedVariant.Price
              priceType="compareAt"
              className="line-through text-gray-400"
              as="span"
            />
          </div>
          <Options />
          <Product.SelectedVariant.AddToCartButton className="rounded-lg bg-black text-white px-10 py-2 font-semibold my-4">
            Add to cart
          </Product.SelectedVariant.AddToCartButton>
          <Product.Description />
        </div>
      </div>
    </Product>
  );
}

function Media() {
  const { media } = useProduct();

  return (
    <ul className="mt-2 grid grid-cols-2 gap-2">
      {media.map((mediaFile) => {
        return (
          <li>
            <MediaFile
              media={mediaFile}
              options={{ width: 300, height: 300, crop: 'center' }}
              className="rounded-lg"
            />
          </li>
        );
      })}
    </ul>
  );
}

function Options() {
  const { options, selectedOptions, setSelectedOption } = useProduct();

  if (options.length == 1 && options[0].name == 'Title') {
    return null;
  }

  return options.map(({ name, values }) => {
    return (
      <div>
        <span>{name}</span>
        <ul>
          {values.map((val) => {
            return (
              <li>
                <label htmlFor={val}>{val}</label>
                <input
                  name={name}
                  type="radio"
                  value={val}
                  id={val}
                  onChange={() => setSelectedOption(name, val)}
                  checked={selectedOptions[name] == val}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}
