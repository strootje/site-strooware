import { createServerFn } from "@tanstack/solid-start";

export const getFlags = createServerFn()
  .handler(() => ({
    isFreelancing: false,
  }));
