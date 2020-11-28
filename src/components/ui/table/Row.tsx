import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Row = ({ children }: Props) => {
  return <tr className="border border-gray-10">{children}</tr>;
};

export default Row;
