import { useStore } from "~/store/pokemonStore";
import SearchBar from "./SearchBar";

const SearchBarContainer = () => {
  const handleSearch = useStore((state) => state.updateSearch);
  return <SearchBar handleSearch={handleSearch} />;
};

export default SearchBarContainer;
