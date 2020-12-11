import { useState, MouseEvent } from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import TabPane from "../components/ui/TabPane";
import Tab from "../components/ui/Tab";
import Tabs from "../components/ui/Tabs";
import LayoutWithSidebar from "../components/layout/LayoutWithSidebar";

interface Props {}

const Customer = (props: Props) => {
  const [active, setActive] = useState(0);
  const changeTab = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    const index = parseInt((e.target as HTMLButtonElement).id, 0)
    if (index !== active){
      setActive(index)
    }
  };
  return (
    <LayoutWithSidebar>
      <PageHeader>
        <div className="container flex items-center">
          <Button variant="text">
            <Icon icon="back" />
          </Button>
          <span className="flex-1">James Ford</span>
          <Button variant="secondary">Edit Customer</Button>
        </div>
      </PageHeader>
      <PageHeader>
        <Tabs>
          <Tab
            onClick={changeTab}
            title="Tab 1"
            active={active === 0}
            id={"0"}
          ></Tab>
          <Tab
            onClick={changeTab}
            title="Tab 2"
            active={active === 1}
            id={"1"}
          ></Tab>
        </Tabs>
      </PageHeader>
      <TabPane active={active === 0}>Pane 1</TabPane>
      <TabPane active={active === 1}>Pane 2</TabPane>
    </LayoutWithSidebar>
  );
};

export default Customer;
