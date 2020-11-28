import { ReactNode } from "react";

interface Props {
  type: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

const Button = ({ type, children, className, ...other }: Props) => {
  let classname = "";

  if (type === "primary") {
    classname =
      "bg-oceanBlue hover:bg-oceanBlueHover text-gray-5 py-2.5 px-4 textstyle-emphasisedbody active:bg-oceanBlueClick";
  }

  if (type === "secondary") {
    classname =
      "bg-gray-5 border border-gray-10 text-gray-100 py-2.5 px-4 textstyle-emphasisedbody hover:bg-oceanBlue6 hover:border-oceanBlue hover:text-oceanBlue active:bg-oceanBlue10";
  }

  return (
    <button
      {...other}
      className={className ? classname + " " + className : classname}
    >
      {children}
    </button>
  );
};

export default Button;
