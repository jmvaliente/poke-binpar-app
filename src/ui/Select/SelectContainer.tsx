import type { SelectContainerProps } from "~/types/pokemon";
import Select from "./Select";
import { useStore } from "~/store/pokemonStore";

const SelectContainer = ({ data }: SelectContainerProps) => {
  const handleChangeFilter = useStore((state) => state.updateUrl);
  return (
    <div>
      <select onChange={(event) => handleChangeFilter(event.target.value)}>
        {data.results.map((data) => (
          <Select key={data.name} data={data} />
        ))}
      </select>
    </div>
  );
};
export default SelectContainer;
