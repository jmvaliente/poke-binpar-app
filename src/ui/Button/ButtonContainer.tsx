import type { ButtonContainerProps } from "~/types/pokemon";
import { useStore } from "~/store/pokemonStore";
import Button from "./Button";

const ButtonContainer = ({ name, url }: ButtonContainerProps) => {
  const handleClick = useStore((state) => state.updateUrl);
  const isDisabled = !Boolean(url);
  return (
    <div className="inline-flex rounded-r">
      <Button handleClick={() => handleClick(url!)} disabled={isDisabled}>
        {name}
      </Button>
    </div>
  );
};

export default ButtonContainer;
