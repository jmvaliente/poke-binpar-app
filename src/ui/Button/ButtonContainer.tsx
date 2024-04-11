import type { ButtonContainerProps } from "~/types/pokemon";
import Button from "./Button";

const ButtonContainer = ({ name, handleClick }: ButtonContainerProps) => {
  return (
    <div className="inline-flex rounded-r">
      <Button handleClick={handleClick}>{name}</Button>
    </div>
  );
};

export default ButtonContainer;
