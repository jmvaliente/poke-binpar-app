import type { SelectContainerProps } from "~/types/pokemon";
import Select from "./Select";
import { useStore } from "~/store/pokemonStore";
import type { ChangeEvent } from "react";

const SelectContainer = ({ data }: SelectContainerProps) => {
  const handleChangeFilter = useStore((state) => state.updateFilter);
  const storage = useStore((state) => state);

  const extractOptionName = (e: ChangeEvent<HTMLSelectElement>) =>
    e.target.options[e.target.selectedIndex]?.text ?? "";

  return (
    <div className="relative h-10 w-72 min-w-[200px]">
      <select
        className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 placeholder-shown:borde peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all focus:border-gray-900 "
        onChange={(event) =>
          handleChangeFilter(event.target.value, extractOptionName(event))
        }
      >
        <option value={""}>All</option>
        {data.results.map((data) => {
          const isSelected = storage.filter === data.name;
          return <Select key={data.name} data={data} selected={isSelected} />;
        })}
      </select>
    </div>
  );
};
export default SelectContainer;
