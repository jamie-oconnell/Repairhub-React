import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Cell = ({ children }: Props) => {
  return <td className="px-4 py-tableCell text-gray-100">{children}</td>;
};

export default Cell;
