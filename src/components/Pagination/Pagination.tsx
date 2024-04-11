import ButtonContainer from "~/ui/Button/ButtonContainer";
import SearchBarContainer from "~/ui/SearchBar/SearchBarContainer";

const Pagination = () => {
  return (
    <div className="inline-flex gap-1">
      <SearchBarContainer />
      <ButtonContainer name="Prev" />
      <ButtonContainer name="Next" />
    </div>
  );
};

export default Pagination;
