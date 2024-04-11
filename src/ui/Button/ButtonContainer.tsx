import type { ButtonContainerProps } from "~/types/pokemon";
import Button from "./Button";

const ButtonContainer = ({ name }: ButtonContainerProps) => {
  return (
    <div className="inline-flex rounded-r">
      <Button>{name}</Button>
    </div>
  );
};

export default ButtonContainer;
