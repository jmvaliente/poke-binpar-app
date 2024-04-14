import type { generationResults } from "~/types/pokemon";
import SelectContainer from "~/ui/Select/SelectContainer";
import { api } from "~/utils/api";

const FilterType = () => {
  const types = api.type.all.useQuery();
  if (!types.isSuccess) return null;
  return <SelectContainer data={types.data as generationResults} />;
};

export default FilterType;
