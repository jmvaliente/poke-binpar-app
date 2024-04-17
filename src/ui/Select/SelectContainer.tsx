import type { SelectContainerProps } from "~/types/pokemon";
import Select from "./Select";
import { useStore } from "~/store/pokemonStore";
import { extractFilterId } from "~/utils/extract.id";

const SelectContainer = ({ data, filterType }: SelectContainerProps) => {
  const storage = useStore((state) => state);
  const handleType = useStore((state) => state.updateType);
  const handleGeneration = useStore((state) => state.updateGeneration);

  const handleChangeFilter = (url: string) => {
    const filterId = extractFilterId(url);

    const isTypeFilter = filterType === "type";
    const isGenerationFilter = filterType === "generation";
    const noIdProvided = !filterId;

    if (isTypeFilter) handleType(filterId);
    if (isGenerationFilter) handleGeneration(filterId);
    if (noIdProvided) url === "type" ? handleType("") : handleGeneration("");
  };

  return (
    <div className="relative h-10 w-72 min-w-[200px]">
      <select
        className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 placeholder-shown:borde peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all focus:border-gray-900 "
        onChange={(event) => handleChangeFilter(event.target.value)}
      >
        <option value={filterType}>All</option>
        {data.results.map((data, index) => {
          const isSelected =
            Number(storage[filterType as keyof typeof storage]) === index + 1;
          return <Select key={data.name} data={data} selected={isSelected} />;
        })}
      </select>
    </div>
  );
};
export default SelectContainer;
