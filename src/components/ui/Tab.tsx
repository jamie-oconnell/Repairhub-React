import React from "react";

type Props = {
  title: string;
  index: number;
};

const Tab: React.FC<Props> = ({ title, index }) => {
  return (
    <li>
      <button>{title}</button>
    </li>
  );
};

export default Tab;
