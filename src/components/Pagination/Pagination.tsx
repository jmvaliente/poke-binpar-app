import type { PokemonListProps } from "~/types/pokemon";
import ButtonContainer from "~/ui/Button/ButtonContainer";

const Pagination = ({ pokemonData }: PokemonListProps) => {
  return (
    <>
      <ButtonContainer name="Prev" url={pokemonData.data?.previous} />
      <ButtonContainer name="Next" url={pokemonData.data?.next} />
    </>
  );
};

export default Pagination;
