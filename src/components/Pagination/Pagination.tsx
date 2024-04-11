import type { PaginationProps } from "~/types/pokemon";
import ButtonContainer from "~/ui/Button/ButtonContainer";
import SearchBarContainer from "~/ui/SearchBar/SearchBarContainer";

const Pagination = ({ pokemons, handleSetUrl }: PaginationProps) => {
  const handleNext = () => {
    const url = pokemons.data?.next;
    if (url) {
      handleSetUrl(url);
    }
  };
  const handlePrev = () => {
    const url = pokemons.data?.previous;
    if (url) {
      handleSetUrl(url);
    }
  };

  return (
    <div className="inline-flex gap-1">
      <SearchBarContainer />
      <ButtonContainer name="Prev" handleClick={handlePrev} />
      <ButtonContainer name="Next" handleClick={handleNext} />
    </div>
  );
};

export default Pagination;
