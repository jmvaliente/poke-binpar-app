import type { SelectProps } from "~/types/pokemon";

const Select = ({ generation }: SelectProps) => {
  const { name, url } = generation;
  return <option value={url}>{name}</option>;
};
export default Select;
