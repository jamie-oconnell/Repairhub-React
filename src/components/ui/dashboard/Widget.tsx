import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Widget = ({ children }: Props) => {
  return <div className="bg-white">{children}</div>;
};

export default Widget;
