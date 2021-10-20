import { useShopQuery, Link } from "@shopify/hydrogen";
import gql from "graphql-tag";
import CartSection from './CartSection.client';

export default function Layout({ children }) {
  const { data } = useShopQuery({
    query: QUERY,
  });

  return (
    <>
      <div className="absolute top-0 left-0">
        <a
          href="#mainContent"
          className="p-4 focus:block sr-only focus:not-sr-only"
        >
          Skip to content
        </a>
      </div>
      <div className="min-h-screen max-w-screen">
        <div className="my-10 flex items-center justify-center">
          <h1 className="mr-6">
            <Link
              className="font-bold uppercase text-2x-l tracking-widest"
              to="/"
            >
              {data.shop.name}
            </Link>
          </h1>
          <CartSection />
        </div>
        <main className="mx-auto max-w-7xl px-6">{children}</main>
      </div>
    </>
  );
}

const QUERY = gql`
  query ShopQuery {
    shop {
      name
    }
  }
`;
