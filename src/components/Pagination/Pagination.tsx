import type { PokemonListProps } from "~/types/pokemon";
import ButtonContainer from "~/ui/Button/ButtonContainer";
import SearchBarContainer from "~/ui/SearchBar/SearchBarContainer";

const Pagination = ({ pokemonData }: PokemonListProps) => {
  return (
    <div className="inline-flex gap-1">
      <SearchBarContainer />
      <ButtonContainer name="Prev" url={pokemonData.data?.previous} />
      <ButtonContainer name="Next" url={pokemonData.data?.next} />
    </div>
  );
};

export default Pagination;
