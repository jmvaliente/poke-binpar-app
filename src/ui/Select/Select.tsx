import type { SelectProps } from "~/types/pokemon";

const Select = ({ data }: SelectProps) => {
  const { name, url } = data;
  return <option value={url}>{name}</option>;
};
export default Select;
