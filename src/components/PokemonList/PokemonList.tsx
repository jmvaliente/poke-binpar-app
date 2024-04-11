import type { PokemonListProps } from "~/types/pokemon";
import CardContainer from "~/ui/Card/CardContainer";

const PokemonList = ({ pokemons }: PokemonListProps) => {
  if (pokemons.isLoading) return null;
  if (pokemons.isSuccess) {
    return (
      <>
        {pokemons.data!.results.map((pokemon) => (
          <CardContainer key={pokemon.name} pokemon={pokemon} />
        ))}
      </>
    );
  }
};

export default PokemonList;
