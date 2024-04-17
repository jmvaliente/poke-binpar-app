import type { GenerationResults } from "~/types/pokemon";
import SelectContainer from "~/ui/Select/SelectContainer";
import { api } from "~/utils/api";

const Filter = () => {
  const generation = api.generation.all.useQuery();
  if (!generation.isSuccess) return null;
  return (
    <SelectContainer
      data={generation.data as GenerationResults}
      filterType="generation"
    />
  );
};
export default Filter;
