import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageHeader = ({ children }: Props) => {
  return (
    <div
      className="bg-white flex justify-center py-4 px-8 border-b border-gray-10 h-head"
    >
      <div className="container flex items-center">{children}</div>
    </div>
  );
};

export default PageHeader;
