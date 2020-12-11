import React from "react";

interface Props {
  id: string;
  title: string;
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Tab: React.FC<Props> = ({ title, active, onClick, id }) => {
  return (
    <li>
      <button
        id={id}
        onClick={onClick}
        className={`${
          active && "bg-oceanBlue6 text-oceanBlue"
        } px-4 py-2.5 textstyle-emphasisedBody text-gray-100`}
      >
        {title}
      </button>
    </li>
  );
};

export default Tab;
