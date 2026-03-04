import { Plausible } from "#/components/plausible.tsx";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/solid-router";
import { HydrationScript } from "solid-js/web";
import "virtual:uno.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: Object.entries({
          "width": "device-width",
          "initial-scale": "1.0",
          "viewport-fit": "cover",
        }).map((kv) => kv.join("=")).join(","),
      },
      {
        title: "strooware",
      },
    ],

    links: [
      {
        rel: "icon",
        href: "/favicon.svg",
      },
    ],
  }),

  component: () => (
    <html>
      <head>
        <HeadContent />
        <HydrationScript />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <Plausible.Init domain="strooware.nl" />
      </body>
    </html>
  ),
});
