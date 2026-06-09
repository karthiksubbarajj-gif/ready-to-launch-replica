import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    tsr: {
      generatedRouteTree: "src/routeTree.gen.js",
      disableTypes: true,
    },
  },
});
