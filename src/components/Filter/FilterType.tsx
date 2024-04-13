import SelectContainer from "~/ui/Select/SelectContainer";
import { api } from "~/utils/api";

const FilterType = () => {
  const types = api.type.all.useQuery();
  if (!types.isSuccess) return null;
  return <SelectContainer generation={types.data} />;
};

export default FilterType;
