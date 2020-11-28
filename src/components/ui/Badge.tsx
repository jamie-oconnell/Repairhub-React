import React from "react";
import Icon from "./Icon";

interface Props {
  content: number;
  icon: string;
  className?: string;
}

const Badge = ({ content, icon, className }: Props) => {
  return (
    <span className={`relative inline-block ${className && className}`}>
      <Icon icon={icon} className="text-gray-60" />
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-white transform translate-x-1/4 -translate-y-1/4 bg-oceanBlue textstyle-label">
        {content}
      </span>
    </span>
  );
};

export default Badge;
