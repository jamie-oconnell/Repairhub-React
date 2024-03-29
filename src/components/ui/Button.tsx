import React, { ReactNode } from "react";

interface Props {
  variant: "primary" | "secondary" | "text" | "icon-text" | "icon-outline" | "icon-secondary" | "icon-transparent";
  type?: "submit" | "button" | "reset";
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled? : boolean
}

const Button = ({
  variant,
  children,
  className,
  type,
  onClick,
  disabled,
  ...other
}: Props) => {
  let classname = "";

  if (variant === "primary") {
    classname =
      "bg-oceanBlue hover:bg-oceanBlueHover border border-oceanBlue text-gray-5 py-2.5 px-4 textstyle-emphasisedbody active:bg-oceanBlueClick focus:outline-none focus-visible:ring-4 focus-visible:border-focus transition";
  }

  if (variant === "secondary") {
    classname =
      "bg-gray-5 border border-gray-10 text-gray-100 py-2.5 px-4 textstyle-emphasisedbody hover:bg-oceanBlue6 hover:border-oceanBlue hover:text-oceanBlue active:bg-oceanBlue10 focus:outline-none focus-visible:ring-4 focus-visible:border-focus transition";
  }

  if (variant === "icon-secondary") {
    classname =
      "bg-gray-5 border border-gray-10 text-gray-100 p-2 hover:bg-oceanBlue6 hover:border-oceanBlue hover:text-oceanBlue active:bg-oceanBlue10 focus:outline-none focus-visible:ring-4 focus-visible:border-focus transition disabled:text-gray-30 disabled:pointer-events-none";
  }

  if (variant === "text") {
    classname =
      "text-oceanBlue textstyle-body focus:outline-none focus-visible:ring-4 focus-visible:border-focus transition";
  }

  if (variant === "icon-text") {
    classname =
      "text-gray-60 p-2 focus:outline-none focus-visible:ring-4 focus-visible:border-focus hover:bg-oceanBlue6 border border-opacity-0 hover:border-opacity-100 border-oceanBlue hover:text-oceanBlue transition";
  }

  if (variant === "icon-transparent") {
    classname =
      "text-gray-60 p-2 focus:outline-none focus-visible:ring-4 focus-visible:border-focus hover:bg-gray-85 border border-opacity-0 border-oceanBlue hover:text-white transition";
  }

  return (
    <button
      {...other}
      className={className ? classname + " " + className : classname}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
