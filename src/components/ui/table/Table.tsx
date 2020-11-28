import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Table = ({ children, ...other }: Props) => {
  return (
    <table className="bg-white w-full border border-gray-10 textstyle-body" {...other}>
      {children}
    </table>
  );
};

export default Table;
