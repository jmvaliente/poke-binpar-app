import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const base = process.env.API_BASE;

export const pokemonRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await fetch(`${base}/pokemon?limit=20`);
    return data.json();
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(`${base}/pokemon/${input.id}`);
      return data.json();
    }),
  byName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(`${base}/pokemon-species/${input.name}`);
      return data.json();
    }),
});
