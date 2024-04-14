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
    <div>
      <select
        onChange={(event) =>
          handleChangeFilter(event.target.value, extractOptionName(event))
        }
      >
        <option>All</option>
        {data.results.map((data) => {
          const isSelected = storage.filter === data.name;
          return <Select key={data.name} data={data} selected={isSelected} />;
        })}
      </select>
    </div>
  );
};
export default SelectContainer;
