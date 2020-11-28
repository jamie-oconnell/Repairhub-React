import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Head = ({children}: Props) => {
return <thead>{children}</thead>;
};

export default Head;
