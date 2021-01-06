import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";
import useRouter from "../hooks/router";
import _ from "lodash";

import { useAuthDispatch, useAuthState } from "../context/auth";

interface Props {}

const validationSchema = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
});

const Login = (props: Props) => {
  const router = useRouter();
  const [login, { error }] = useLoginMutation();
  const dispatch = useAuthDispatch();
  const { authenticated } = useAuthState();
  let { from }: any = router.location.state || { from: { pathname: "/" } };

  if (authenticated) {
    router.push("/");
  }

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

      if (response?.data) {
        //@ts-ignore
        setAccessToken(response?.data?.loginUser.accessToken);
      }

      dispatch("LOGIN", _.omit(response.data?.loginUser, ["accessToken"]));

      router.push(from);
    },
  });
  return (
    <div className="h-screen bg-white grid grid-cols-2">
      <div></div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full"
          style={{ maxWidth: "420px" }}
        >
          <span className="textstyle-header text-gray-100">Sign In</span>
          <div className="mt-8">
            <label htmlFor="username" className="textstyle-body">
              Username
            </label>
            <TextInput
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              className="mt-2"
              placeholder="Username"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="password" className="textstyle-body">
              Password
            </label>
            <TextInput
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="mt-2"
              placeholder="Password"
            />
          </div>
          <Button variant="primary" type="submit" className="w-full mt-8">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
