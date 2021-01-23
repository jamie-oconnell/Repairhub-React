import Divider from "../Divider";
import Header from "./WidgetHeader";
import { ReactNode } from "react";
import Button from "../Button";
import Icon from "../Icon";

interface Props {
  className?: string;
  i?: string;
  style?: { [x: string]: string };
  children?: ReactNode[] | string;
  updateWidget?: Function;
}

const Widget = ({
  className,
  style = {},
  children,
  updateWidget,
  i,
  ...rest
}: Props) => {
  return (
    <div
      className={`bg-white border border-gray-10 p-6 flex flex-col ${
        className && className
      }`}
      style={style}
      {...rest}
    >
      <Header name="Test" subHeading="Testing" />
      <Divider />
      <div className="flex flex-1 justify-center items-center">
        <div>
          <Button
            variant="icon-text"
            onClick={() => updateWidget && updateWidget(i, "small")}
          >
            <Icon icon="smallBlock" />
          </Button>
          <Button
            variant="icon-text"
            onClick={() => updateWidget && updateWidget(i, "medium")}
          >
            <Icon icon="mediumBlock" />
          </Button>
          <Button
            variant="icon-text"
            onClick={() => updateWidget && updateWidget(i, "large")}
          >
            <Icon icon="largeBlock" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Widget;
