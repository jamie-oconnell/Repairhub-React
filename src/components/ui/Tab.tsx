import React from "react";
import Icon from "./Icon";

interface Props {
  id: string;
  title?: string;
  icon?: string;
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Tab: React.FC<Props> = ({ title, icon, active, onClick, id }) => {
  return (
    <li>
      <button
        id={id}
        onClick={onClick}
        className={`${
          active && "bg-oceanBlue6 text-oceanBlue"
        } px-4 py-2.5 textstyle-emphasisedBody text-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:border-focus`}
      >
        {title && title}
        {icon && <Icon icon={icon} />}
      </button>
    </li>
  );
};

export default Tab;
