import { routeTree } from "#/route-tree.gen.ts";
import { createRouter } from "@tanstack/solid-router";

export const getRouter = () => {
  const router = createRouter({
    scrollRestoration: true,
    routeTree,

    defaultViewTransition: true,
  });

  return router;
};
