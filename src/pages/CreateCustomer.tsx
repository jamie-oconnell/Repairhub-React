import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Divider from "../components/ui/Divider";
import TextInput from "../components/ui/TextInput";
import Textarea from "../components/ui/Textarea";
import Icon from "../components/ui/Icon"

interface Props {}

const CreateCustomer = (props: Props) => {
  return (
    <>
      <PageHeader>
        <div className="container flex items-center">
          <Button type="text"><Icon icon="back" /></Button>
          <span className="flex-1">Create Customer</span>
          <Button type="secondary">Discard</Button>
          <Button type="primary" className="ml-2">
            Create Customer
          </Button>
        </div>
      </PageHeader>
      <div className="bg-white flex min-h-screen w-full justify-center py-8">
        <div className="container flex justify-center">
          <div style={{ maxWidth: "732px" }}>
            <div className="grid grid-cols-2">
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
                    <label htmlFor="first-name" className="textstyle-body">
                      First Name
                    </label>
                    <TextInput id="first-name" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="textstyle-body">
                      Last Name
                    </label>
                    <TextInput id="last-name" />
                  </div>
                </div>
                <div className="py-4">
                  <label htmlFor="phone" className="textstyle-body">
                    Phone Number
                  </label>
                  <TextInput id="phone" />
                </div>
                <div className="py-4">
                  <label htmlFor="email" className="textstyle-body">
                    Email
                  </label>
                  <TextInput id="email" />
                </div>
              </div>
            </div>
            <Divider />
            <div className="grid grid-cols-2 pt-8">
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
                  <label htmlFor="business-name" className="textstyle-body">
                    Business Name
                  </label>
                  <TextInput id="business-name" />
                </div>
                <div className="py-4">
                  <label htmlFor="alt-phone" className="textstyle-body">
                    Alternative Phone Number
                  </label>
                  <TextInput id="alt-phone" />
                </div>
                <div className="py-4">
                  <div className="textstyle-body">Notifications</div>
                  <div>
                    <Checkbox id="sms" />
                    <label htmlFor="sms" className="textstyle-body">
                      SMS
                    </label>
                  </div>
                  <div>
                    <Checkbox id="email" />
                    <label htmlFor="email" className="textstyle-body">
                      Email
                    </label>
                  </div>
                </div>
                <div className="py-4">
                  <label htmlFor="notes" className="textstyle-body">
                    Notes
                  </label>
                  <Textarea id="notes" />
                </div>
                <div className="py-4">
                  <label htmlFor="address" className="textstyle-body">
                    Address
                  </label>
                  <TextInput id="address" icon="address" />
                </div>
                <Button type="text">Enter Address Manually</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCustomer;
