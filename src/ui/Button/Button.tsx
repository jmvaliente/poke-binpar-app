import type { ButtonProps } from "~/types/pokemon";

const Button = ({ children, handleClick, disabled }: ButtonProps) => {
  const isNext = children === "Next";
  return (
    <button
      disabled={disabled} // Explicitly specify the type as boolean
      onClick={handleClick}
      className={`${isNext && "rounded-r"} bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400`}
    >
      {children}
    </button>
  );
};

export default Button;
