import React from "react";
import Icon from "./Icon";

interface Props {
  content: number;
  icon: string;
  className?: string;
}

const Badge = ({ content, icon, className }: Props) => {
  return (
    <div className="p-1">
      <span
        className={`relative w-8 h-8 flex justify-center items-center hover:bg-gray-85 ${
          className && className
        }`}
      >
        <Icon icon={icon} className="text-gray-60" />
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-white bg-oceanBlue textstyle-label">
          {content}
        </span>
      </span>
    </div>
  );
};

export default Badge;
