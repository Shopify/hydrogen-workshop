import { useShopQuery, Link } from "@shopify/hydrogen";
import gql from "graphql-tag";

export default function Layout({ children }) {
  const { data } = useShopQuery({ query: QUERY });

  return (
    <div>
      <div className="abolute top-0 left-0">
        <a
          href="#mainContent"
          className="focus:block focus:not-sr-only sr-only"
        >
          Skip to content
        </a>
      </div>
      <header className="my-10 text-center">
        <h1 className="font-bold uppercase tracking-wider text-2x-l">
          <Link to="/">{data.shop.name}</Link>
        </h1>
      </header>
      <main id="mainContent" className="mx-auto max-w-7xl px-6">
        {children}
      </main>
    </div>
  );
}

const QUERY = gql`
  query ShopNameQuery {
    shop {
      name
    }
  }
`;
