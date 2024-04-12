import type { ButtonContainerProps } from "~/types/pokemon";
import { useStore } from "~/store/pokemonStore";
import Button from "./Button";

const ButtonContainer = ({ name, url }: ButtonContainerProps) => {
  const handleClick = useStore((state) => state.updateUrl);
  return (
    <div className="inline-flex rounded-r">
      <Button handleClick={() => handleClick(url!)}>{name}</Button>
    </div>
  );
};

export default ButtonContainer;
