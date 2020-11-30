import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon"
import TabPane from "../components/ui/TabPane";
import Tabs from "../components/ui/Tabs";

interface Props {}

const Customer = (props: Props) => {
  return (
    <>
      <PageHeader>
        <div className="container flex items-center">
          <Button type="text">
            <Icon icon="back" />
          </Button>
          <span className="flex-1">James Ford</span>
          <Button type="secondary">Edit Customer</Button>
        </div>
      </PageHeader>
      <PageHeader>
        <Tabs>
          
        </Tabs>
      </PageHeader>
    </>
  );
};

export default Customer;
