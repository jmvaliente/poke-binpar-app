import { z } from "zod";
import {
  getPokemonByGeneration,
  getPokemonByGenerationAndType,
  getPokemonByType,
} from "~/helpers/pokemonFilterHelpers";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const filterRouter = createTRPCRouter({
  generationFilter: publicProcedure
    .input(z.object({ generation: z.string() }))
    .query(async ({ input }) => {
      const pokemons = await getPokemonByGeneration(input.generation);
      return { results: pokemons };
    }),
  typeFilter: publicProcedure
    .input(z.object({ type: z.string() }))
    .query(async ({ input }) => {
      const pokemons = await getPokemonByType(input.type);
      return { results: pokemons };
    }),
  byTypeGeneration: publicProcedure
    .input(z.object({ type: z.string(), generation: z.string() }))
    .query(async ({ input }) => {
      const pokemons = await getPokemonByGenerationAndType(
        input.generation,
        input.type,
      );
      return { results: pokemons };
    }),
});
