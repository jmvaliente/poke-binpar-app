import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type {
  ChainType,
  EvolutionChainDataTypes,
  SpeciesDataTypes,
} from "~/types/pokemon";
import { extractEvolutions } from "~/utils/extractEvolutions";

const base = process.env.API_BASE;

export const evolutionRouter = createTRPCRouter({
  byName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const pokemonSpecies = await fetch(
        `${base}/pokemon-species/${input.name}`,
      );
      const pokemonSpeciesData =
        (await pokemonSpecies.json()) as SpeciesDataTypes;
      if (pokemonSpeciesData.evolution_chain?.url) {
        const evolutionChain = await fetch(
          pokemonSpeciesData.evolution_chain.url,
        );

        const evolutionChainData =
          (await evolutionChain.json()) as EvolutionChainDataTypes;
        const evolutions = extractEvolutions(
          evolutionChainData.chain,
        ) as unknown as ChainType;
        return { results: evolutions };
      }
      return null;
    }),
});
