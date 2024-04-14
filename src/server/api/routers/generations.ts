import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { GenerationResultResponse } from "~/types/pokemon";

const base = process.env.API_BASE;

export const generationRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await fetch(`${base}/generation/`);
    return data.json();
  }),
  url: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(input.url);
      const test = (await data.json()) as GenerationResultResponse;
      return {
        results: test.pokemon_species,
      };
    }),
});
