import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const base = process.env.API_BASE;

export const pokemonRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await fetch(`${base}/pokemon`);
    return data.json();
  }),
  byName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(`${base}/pokemon/${input.name}`);
      return data.json();
    }),
  pokemonSpecies: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(`${base}/pokemon-species/${input.name}`);
      return data.json();
    }),
  url: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(input.url);
      return data.json();
    }),
});
