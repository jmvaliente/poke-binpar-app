import type { SelectContainerProps } from "~/types/pokemon";
import Select from "./Select";
import { useStore } from "~/store/pokemonStore";

const SelectContainer = ({ generation }: SelectContainerProps) => {
  const handleChangeFilter = useStore((state) => state.updateUrl);
  return (
    <div>
      <select onChange={(event) => handleChangeFilter(event.target.value)}>
        {generation.results.map((generation) => (
          <Select key={generation.name} generation={generation} />
        ))}
      </select>
    </div>
  );
};
export default SelectContainer;
