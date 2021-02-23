import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Divider from "../components/ui/Divider";
import TextInput from "../components/ui/TextInput";
import Icon from "../components/ui/Icon";
import useRouter from "../hooks/router";
import AddressAutocomplete from "../components/ui/AddressAutocomplete";
import { useCreateCustomerMutation } from "../generated/graphql";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const validationSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
  countryCode: yup.string(),
  phoneNumber: yup.string(),
  alternatePhoneNumber: yup.string(),
  businessName: yup.string(),
  addressData: yup.object(),
  notes: yup.string()
});

const CreateCustomer = (props: Props) => {
  const router = useRouter();
  const [ createCustomer, { client } ] = useCreateCustomerMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      alternatePhoneNumber: "",
      businessName: "",
      addressData: {},
      notes: ""
    },
    validationSchema: validationSchema,
    onSubmit: async ({ firstName, lastName, email, phoneNumber, alternatePhoneNumber, businessName, notes }) => {
      await createCustomer({
        variables: {
          firstName,
          lastName,
          email,
          phoneNumber,
          alternatePhoneNumber,
          businessName,
          notes
        },
      }).then(() => {
        alert("Created a customer successfully!");
        router.push("/customers");
        client.resetStore();
      }).catch((e) => {
        alert(e);
      });
    },
  });

  return (
    <>
      <PageHeader>
        <div className="container flex items-center">
          <Button
            className="mr-2"
            variant="icon-text"
            onClick={(e) => router.push("/customers")}
          >
            <Icon icon="back" />
          </Button>
          <span className="flex-1">Create Customer</span>
          <Button variant="secondary">Discard</Button>
          <Button
            variant="primary"
            className="ml-2"
            onClick={() => formik.handleSubmit()}
            type="submit"
          >
            Create Customer
          </Button>
        </div>
      </PageHeader>
      <div className="bg-white flex w-full justify-center fill-screen-height">
        <div className="container flex justify-center">
          <form style={{ maxWidth: "732px" }} className={`px-8 lg:px-0`}>
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
                <div className="grid grid-cols-2 gap-2 py-4">
                  <div>
                    <label htmlFor="first-name" className="textstyle-body ">
                      First Name
                    </label>
                    <TextInput
                      id="firstName"
                      placeholder="First Name"
                      className="mt-2"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="textstyle-body ">
                      Last Name
                    </label>
                    <TextInput
                      id="lastName"
                      className="mt-2"
                      placeholder="Last Name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div className="py-4">
                  <label htmlFor="phone" className="textstyle-body ">
                    Phone Number
                  </label>
                  <TextInput 
                    id="phoneNumber" 
                    className="mt-2" 
                    placeholder="Phone" 
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="email" className="textstyle-body ">
                    Email
                  </label>
                  <TextInput 
                    id="email" 
                    className="mt-2" 
                    placeholder="Email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
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
                  <label htmlFor="business-name" className="textstyle-body ">
                    Business Name
                  </label>
                  <TextInput
                    id="businessName"
                    className="mt-2"
                    placeholder="Business Name"
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="alt-phone" className="textstyle-body ">
                    Alternative Phone Number
                  </label>
                  <TextInput
                    id="alternatePhoneNumber"
                    className="mt-2"
                    placeholder="Alt Phone"
                    value={formik.values.alternatePhoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="py-4">
                  <div className="textstyle-body ">Notifications</div>
                  <div className="pt-3 flex items-center">
                    <Checkbox id="notifications-sms" />
                    <label
                      htmlFor="notifications-sms"
                      className="textstyle-body ml-4"
                    >
                      SMS
                    </label>
                  </div>
                  <div className="pt-3 flex items-center">
                    <Checkbox id="notifications-email" />
                    <label
                      htmlFor="notifications-email"
                      className="textstyle-body ml-4"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="py-4">
                  <label htmlFor="notes" className="textstyle-body ">
                    Notes
                  </label>
                  <TextInput
                    id="notes" 
                    className="mt-2" 
                    placeholder="Notes"
                    value={formik.values.notes}
                    onChange={formik.handleChange}
                  />
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
                <AddressAutocomplete />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCustomer;
