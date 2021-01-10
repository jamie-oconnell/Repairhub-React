import { useState, MouseEvent } from "react";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import TabPane from "../components/ui/TabPane";
import Tab from "../components/ui/Tab";
import Tabs from "../components/ui/Tabs";
import useRouter from "../hooks/router";
import Divider from "../components/ui/Divider";
import { useGetCustomerQuery } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<RouterProps> {}

type RouterProps = {
  id: string;
};

const Customer = ({ match }: Props) => {
  const router = useRouter();
  const id = match.params.id;
  const { data } = useGetCustomerQuery({ variables: { id } });
  const [active, setActive] = useState(0);
  const changeTab = (e: MouseEvent<HTMLButtonElement>) => {
    const index = parseInt((e.target as HTMLButtonElement).id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const onBack = () => {
    console.log(router.history);
    if (router.history.length > 1) {
      router.history.goBack();
    } else {
      router.push("/customers");
    }
  };

  return (
    <>
      <PageHeader>
        <div className="container flex items-center">
          <Button variant="icon-text" onClick={onBack}>
            <Icon icon="back" />
          </Button>
          <div className="flex-1 ml-2">{data?.customer?.name}</div>
          <Button variant="secondary">Edit Customer</Button>
        </div>
      </PageHeader>
      <PageHeader>
        <Tabs>
          <Tab
            onClick={changeTab}
            title="Personal Information"
            active={active === 0}
            id={"0"}
          />
          <Tab
            onClick={changeTab}
            title="Tickets"
            active={active === 1}
            id={"1"}
          />
          <Tab
            onClick={changeTab}
            title="Sales"
            active={active === 2}
            id={"2"}
          />
          <Tab
            onClick={changeTab}
            title="Devices"
            active={active === 3}
            id={"3"}
          />
        </Tabs>
      </PageHeader>
      <TabPane active={active === 0}>
        <div className="bg-white flex w-full justify-center fill-screen-height-dual">
          <div className="container flex justify-center">
            <div style={{ maxWidth: "732px" }} className={`px-8 lg:px-0`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 py-8">
                <div>
                  <div className="textstyle-emphasisedbody">
                    General Information
                  </div>
                  <div className="textstyle-body text-gray-60">
                    Form section description or help text
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <div>
                      <div className="textstyle-body text-gray-60">
                        Customer Name
                      </div>
                      <div className="mt-1 textstyle-body">
                        {data?.customer?.name}
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="textstyle-body text-gray-60">
                      Phone Number
                    </div>
                    <div className="mt-1 textstyle-body">
                      {data?.customer?.phoneNumber}
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="textstyle-body text-gray-60">
                      Email Address
                    </div>
                    <div className="mt-1 textstyle-body">
                      {data?.customer?.email}
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="grid grid-cols-1 sm:grid-cols-2 py-8">
                <div>
                  <div className="textstyle-emphasisedbody">
                    Additional Information
                  </div>
                  <div className="textstyle-body text-gray-60">
                    Form section description or help text
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <div className="textstyle-body text-gray-60">
                      Business Name
                    </div>
                    <div className="mt-1 textstyle-body">
                      {data?.customer?.businessName}
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="textstyle-body text-gray-60">
                      Alternative Phone Number
                    </div>
                    <div className="mt-1 textstyle-body">
                      {data?.customer?.alternatePhoneNumber}
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="textstyle-body text-gray-60">
                      Notifications
                    </div>
                    <div className="mt-1 textstyle-body">SMS, Email</div>
                  </div>
                  <div className="py-4">
                    <div className="textstyle-body text-gray-60">Notes</div>
                    <div className="mt-1 textstyle-body">
                      And resentment rides high, but emotions won't grow. And
                      we're changing our ways, taking different roads.
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="textstyle-body text-gray-60">Address</div>
                    <div className="mt-1 textstyle-body">
                      {data?.customer?.addressData?.address1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane active={active === 1}>Pane 2</TabPane>
      <TabPane active={active === 2}>Pane 2</TabPane>
      <TabPane active={active === 3}>Pane 2</TabPane>
    </>
  );
};

export default Customer;
