import type { PokemonDataTypes } from "~/types/pokemon";

export const extractTypesNames = (pokemons: PokemonDataTypes[]) => {
  const names = pokemons.map((pokemon) => {
    return { name: pokemon.pokemon.name };
  });
  return names;
};
