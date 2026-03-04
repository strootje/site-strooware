import { getFlags } from "#/functions/env.functions.ts";
import { createFileRoute, Link } from "@tanstack/solid-router";
import { Show } from "solid-js";

export const Route = createFileRoute("/_site/")({
  loader: async () => ({
    flags: await getFlags(),
  }),

  component: () => {
    const data = Route.useLoaderData();

    return (
      <>
        <nav>
          <ul class="flex flex-col items-center gap-2">
            <li class="w-full rounded-xl bg-stone-50 text-center dark:bg-stone-700">
              <a class="inline-block px-4 py-2" href="https://strootje.com" target="_blank">
                <span>View my work</span>
              </a>
            </li>

            <li class="w-full rounded-xl bg-stone-50 text-center dark:bg-stone-700">
              <a class="inline-block px-4 py-2" href="https://linkedin.com/in/bas-stroosnijder/" target="_blank">
                <span>Find me on LinkedIn</span>
              </a>
            </li>

            <Show when={data().flags.isFreelancing}>
              <li class="w-full rounded-xl bg-stone-50 text-center dark:bg-stone-700">
                <Link class="inline-block px-4 py-2" to="/terms">
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </Show>
          </ul>
        </nav>
      </>
    );
  },
});
