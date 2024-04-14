import type { SearchBarProps } from "~/types/pokemon";
import { useStore } from "~/store/pokemonStore";

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const storage = useStore((state) => state);
  return (
    <form className="flex items-center">
      <div className="relative w-full">
        <input
          value={storage.search}
          type="text"
          id="voice-search"
          className="block w-full rounded-l border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search Pokemon"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        ></button>
      </div>
    </form>
  );
};

export default SearchBar;
