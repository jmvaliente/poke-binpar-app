import type { PokemonListProps } from "~/types/pokemon";
import CardContainer from "~/ui/Card/CardContainer";

const PokemonList = ({ pokemonData }: PokemonListProps) => {
  if (!pokemonData.isSuccess) return null;
  const pokemonResult = pokemonData.data?.results;
  if (!pokemonResult) return null;
  return (
    <div className=" grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
      {pokemonResult.map((pokemon) => (
        <CardContainer key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
