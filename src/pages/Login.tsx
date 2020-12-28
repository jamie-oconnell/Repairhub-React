import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";

interface Props {}

const validationSchema = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
});

const Login = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ username, password }) => {
      const response = await login({
        variables: {
          username,
          password,
        },
      });

      console.log(response);
      if (response?.data) {
        //@ts-ignore
        setAccessToken(response?.data?.loginUser.accessToken)
      }
    },
  });
  const [login] = useLoginMutation();
  return (
    <div className="h-screen bg-white grid grid-cols-2">
      <div></div>
      <div className="flex justify-center content-center">
        <form onSubmit={formik.handleSubmit}>
          <span className="textstyle-header text-gray-100">Sign In</span>
          <div>
            <label htmlFor="username" className="textstyle-body">
              Username
            </label>
            <TextInput
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="textstyle-body">
              Password
            </label>
            <TextInput
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
