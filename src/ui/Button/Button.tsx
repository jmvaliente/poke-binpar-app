import type { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  const isNext = children === "Next";
  return (
    <button
      className={`${isNext && "rounded-r"} bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400`}
    >
      {children}
    </button>
  );
};

export default Button;
