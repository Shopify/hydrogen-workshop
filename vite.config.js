import { defineConfig } from "vite";
import hydrogen from "@shopify/hydrogen/plugin";

import shopifyConfig from "./shopify.config";

export default defineConfig({
  plugins: [fixHostHeader(), hydrogen(shopifyConfig)],
});

function fixHostHeader() {
  return {
    name: "fix-host-header",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        /**
         * For some reason, the host header has `https://` prepended to it.
         * Also, it's `undefined` for the initial page request.
         * We should probably file a bug, unless it's legit.
         */
        req.headers.host = (req.headers.host ?? "localhost:3000").replace(
          /^https?:\/\//,
          ""
        );

        next();
      });
    },
  };
}
