import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  [x: string]: any;
}

const Header = ({ children, ...rest }: Props) => {
  return (
    <th
      className="textstyle-tableheader text-gray-60 px-4 py-tableCell text-left"
      {...rest}
    >
      {children}
    </th>
  );
};

export default Header;
