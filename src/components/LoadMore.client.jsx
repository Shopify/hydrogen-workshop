import { useEffect } from "react";
import { useServerState } from "@shopify/hydrogen/client";
import { useIntersection } from "@shopify/react-intersection-observer";

export default function LoadMore({ children, hasMore, current }) {
  const { setServerState } = useServerState();
  const [intersection, intersectionRef] = useIntersection();

  const loadMoreButtonMarkup = hasMore ? (
    <div className="text-center my-10" ref={intersectionRef}>
      <button
        onClick={() => {
          setServerState("max", current + 4);
        }}
        className="m-auto py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-black"
      >
        Load more products
      </button>
    </div>
  ) : null;

  useEffect(() => {
    if (intersection.isIntersecting && hasMore) {
      setServerState("max", current + 2);
    }
  }, [hasMore, intersection, setServerState]);

  return (
    <div>
      {children}
      {loadMoreButtonMarkup}
    </div>
  );
}
