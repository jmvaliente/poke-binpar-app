import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const base = process.env.API_BASE;

const extractNames = (pokemons) => {
  const names = pokemons.map((pokemon) => {
    return { name: pokemon.pokemon.name };
  });
  return names;
};

export const typeRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await fetch(`${base}/type/`);
    return data.json();
  }),
  url: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(input.url);
      const typeData = await data.json();
      if (typeData.pokemon) {
        const pokemonNames = extractNames(typeData.pokemon);
        console.log(pokemonNames);
        return { results: pokemonNames };
      }
      return typeData.data;
    }),
});
