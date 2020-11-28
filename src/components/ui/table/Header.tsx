import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const Header = ({children}: Props) => {
return <th className="textstyle-tableheader text-gray-60 px-4 py-tableCell text-left">{children}</th>;
};

export default Header;
