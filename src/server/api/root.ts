import { pokemonRouter } from "~/server/api/routers/pokemon";
import { generationRouter } from "~/server/api/routers/generations";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { evolutionRouter } from "./routers/evolution";
import { typeRouter } from "./routers/type";
import { filterRouter } from "./routers/filter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pokemon: pokemonRouter,
  generation: generationRouter,
  evolution: evolutionRouter,
  type: typeRouter,
  filter: filterRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
