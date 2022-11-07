import { type inferAsyncReturnType } from "@trpc/server";

import { prisma } from "../db/client";

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async () => {
  return {
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async () => {
  // Get the session from the server using the unstable_getServerSession wrapper function

  return await createContextInner();
};

export type Context = inferAsyncReturnType<typeof createContext>;
