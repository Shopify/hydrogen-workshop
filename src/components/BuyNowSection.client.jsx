import {BuyNowButton} from '@shopify/hydrogen/client'

export default function BuyNowSection({variant}) {
  return (
    <BuyNowButton
      variantId={variant}
      quantity={1}
      className="rounded-lg bg-black text-white px-10 py-2"
    >
      Buy it now
    </BuyNowButton>
  )
}