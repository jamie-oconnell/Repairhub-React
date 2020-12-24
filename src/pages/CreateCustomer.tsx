import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Divider from "../components/ui/Divider";
import TextInput from "../components/ui/TextInput";
import Textarea from "../components/ui/Textarea";
import Icon from "../components/ui/Icon";
import LayoutWithSidebar from "../components/layout/LayoutWithSidebar";
import useRouter from "../hooks/router";

interface Props {}

const CreateCustomer = (props: Props) => {
  const router = useRouter();
  return (
    <LayoutWithSidebar>
      <PageHeader>
        <div className="container flex items-center">
          <Button className="mr-2" variant="icon-text" onClick={(e) => router.push("/customers")}>
            <Icon icon="back" />
          </Button>
          <span className="flex-1">Create Customer</span>
          <Button variant="secondary">Discard</Button>
          <Button variant="primary" className="ml-2">
            Create Customer
          </Button>
        </div>
      </PageHeader>
      <div className="bg-white flex w-full justify-center fill-screen-height">
        <div className="container flex justify-center">
          <div style={{ maxWidth: "732px" }}>
            <div className="grid grid-cols-2 py-8">
              <div>
                <div className="textstyle-emphasisedbody">
                  General Information
                </div>
                <div className="textstyle-body text-gray-60">
                  Form section description or help text
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-2 py-4">
                  <div>
                    <label htmlFor="first-name" className="textstyle-body ">
                      First Name
                    </label>
                    <TextInput
                      id="first-name"
                      placeholder="First Name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="textstyle-body ">
                      Last Name
                    </label>
                    <TextInput
                      id="last-name"
                      className="mt-2"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="py-4">
                  <label htmlFor="phone" className="textstyle-body ">
                    Phone Number
                  </label>
                  <TextInput id="phone" className="mt-2" placeholder="Phone" />
                </div>
                <div className="py-4">
                  <label htmlFor="email" className="textstyle-body ">
                    Email
                  </label>
                  <TextInput id="email" className="mt-2" placeholder="Email" />
                </div>
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-2 py-8">
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
                  <label htmlFor="business-name" className="textstyle-body ">
                    Business Name
                  </label>
                  <TextInput
                    id="business-name"
                    className="mt-2"
                    placeholder="Business Name"
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="alt-phone" className="textstyle-body ">
                    Alternative Phone Number
                  </label>
                  <TextInput
                    id="alt-phone"
                    className="mt-2"
                    placeholder="Alt Phone"
                  />
                </div>
                <div className="py-4">
                  <div className="textstyle-body ">Notifications</div>
                  <div>
                    <Checkbox id="notifications-sms" />
                    <label
                      htmlFor="notifications-sms"
                      className="textstyle-body "
                    >
                      SMS
                    </label>
                  </div>
                  <div>
                    <Checkbox id="notifications-email" />
                    <label
                      htmlFor="notifications-email"
                      className="textstyle-body "
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="py-4">
                  <label htmlFor="notes" className="textstyle-body ">
                    Notes
                  </label>
                  <Textarea id="notes" className="mt-2" placeholder="Notes" />
                </div>
                <div className="py-4">
                  <label htmlFor="address" className="textstyle-body ">
                    Address
                  </label>
                  <TextInput
                    id="address"
                    icon="address"
                    className="mt-2"
                    placeholder="Address"
                  />
                </div>
                <Button variant="text">Enter Address Manually</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default CreateCustomer;
