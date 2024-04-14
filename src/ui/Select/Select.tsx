import type { SelectProps } from "~/types/pokemon";

const Select = ({ data, selected }: SelectProps) => {
  const { name, url } = data;
  return (
    <option value={url} key={name} selected={selected}>
      {name}
    </option>
  );
};
export default Select;
