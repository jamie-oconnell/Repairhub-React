import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const Body = ({children}: Props) => {
return <tbody className="">{children}</tbody>;
};

export default Body;
