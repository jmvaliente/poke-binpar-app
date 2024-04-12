import type { PokemonListProps } from "~/types/pokemon";
import CardContainer from "~/ui/Card/CardContainer";

const PokemonList = ({ pokemonData }: PokemonListProps) => {
  if (pokemonData.isSuccess) {
    const pokemonResult =
      pokemonData.data?.results ?? pokemonData.data.pokemon_species;
    return (
      <>
        {pokemonResult.map((pokemon) => (
          <CardContainer key={pokemon.name} pokemon={pokemon} />
        ))}
      </>
    );
  }
};

export default PokemonList;
