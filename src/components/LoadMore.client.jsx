import { useServerState } from "@shopify/hydrogen/client";

export default function LoadMore({ children, current }) {
  const { setServerState } = useServerState();

  return (
    <div>
      {children}
      <div className="py-10 text-center">
        <button
          onClick={() => {
            setServerState("first", current + 4);
          }}
          className="bg-black text-white py-2 px-4"
        >
          Load more
        </button>
      </div>
    </div>
  );
}
