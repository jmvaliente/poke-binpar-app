import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { PokemonDataTypes, TypeDataTypes } from "~/types/pokemon";
import { extractTypesNames } from "~/utils/extractTypesNames";

const base = process.env.API_BASE;

export const typeRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await fetch(`${base}/type/`);
    return data.json();
  }),
  url: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(input.url);
      const typeData = (await data.json()) as TypeDataTypes;
      if (typeData.pokemon) {
        const pokemonNames = extractTypesNames(
          typeData.pokemon,
        ) as unknown as PokemonDataTypes[];
        return { results: pokemonNames };
      }
      return null;
    }),
});
