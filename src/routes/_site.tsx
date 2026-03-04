import { getFlags } from "#/functions/env.functions.ts";
import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { Show } from "solid-js";

export const Route = createFileRoute("/_site")({
  loader: async () => ({
    flags: await getFlags(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <div class="flex min-h-dvh flex-col content-start items-center gap-4 bg-stone-200 py-4 text-stone-800 dark:bg-stone-800 dark:text-stone-200">
        <header class="grid justify-center">
          <h1 class="font-title text-5xl text-shadow-xs text-teal-800 dark:text-teal-300">
            <Link to="/">Strooware</Link>
          </h1>
        </header>

        <section class="grow">
          <Outlet />
        </section>

        <footer class="grid justify-center gap-2 text-xs">
          <Show when={data().flags.isFreelancing}>
            <aside class="flex flex-col items-center gap-2 text-stone-500">
              <span>KvK 75604442</span>
              <span>Btw NL002240901B10</span>
              <span>IBAN NL16 KNAB 0259 4681 18</span>
            </aside>
          </Show>

          <nav class="flex justify-center">
            <ul class="flex gap-2">
              <li class="rounded bg-stone-300 shadow dark:bg-stone-600">
                <a
                  class="flex items-center gap-1 px-2 py-1"
                  href="https://github.com/strootje/site-strooware"
                  target="_blank"
                >
                  {/* <i class="i-simple:github v-middle inline-block" /> */}
                  <i class="i-solar:code-square-bold v-middle inline-block text-md" />
                  <span>Source</span>
                </a>
              </li>

              <li class="rounded bg-stone-300 shadow dark:bg-stone-600">
                <a
                  class="flex items-center gap-1 px-2 py-1"
                  href="https://stats.strooware.nl/strooware.nl/"
                  target="_blank"
                >
                  {/* <i class="i-simple:plausibleanalytics v-middle inline-block" /> */}
                  <i class="i-solar:graph-up-bold v-middle inline-block text-md" />
                  <span>Analytics</span>
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  },
});
