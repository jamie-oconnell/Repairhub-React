import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  isSelected?: boolean;
}

const CustomRow = ({ children, isSelected, ...rest }: Props) => {
  return (
    <tr className={`border border-gray-10 ${isSelected && "bg-oceanBlue6"}`} {...rest}>
      {children}
    </tr>
  );
};

export default CustomRow;
