import { ReactNode } from "react";

interface Props {
  className?: string;
  key?: string;
  style?: { [x: string]: string };
  children?: ReactNode[] | string;
}

const Widget = ({ className, style = {}, children, ...rest }: Props) => {
  return (
    <div
      className={`bg-white ${className && className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Widget;
