import { useShop, Helmet } from "@shopify/hydrogen/client";

export default function Head({ shopName }) {
  const { locale } = useShop();
  const lang = locale.split(/[-_]/)[0];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{shopName}</title>
    </Helmet>
  );
}
