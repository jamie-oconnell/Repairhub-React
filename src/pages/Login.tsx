import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import Tooltip from "../components/ui/Tooltip";
import Toast from "../components/ui/Toast";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";
import useRouter from "../hooks/router";
import _ from "lodash";

import { useAuthDispatch, useAuthState } from "../context/auth";

interface Props {}

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const Login = (props: Props) => {
  const router = useRouter();
  const [login, { error }] = useLoginMutation();
  const [isServerError, setIsServerError] = React.useState(false);
  const [serverErrorMessage, setServerErrorMessage] = React.useState('');
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
      setIsServerError(false);
      await login({
        variables: {
          username,
          password,
        },
      }).then((response) => {
        if (response?.data) {
          //@ts-ignore
          setAccessToken(response?.data?.loginUser.accessToken);
        }
  
        dispatch("LOGIN", _.omit(response.data?.loginUser, ["accessToken"]));
  
        router.push(from);
      }).catch((e) => {
        setIsServerError(true);
        setServerErrorMessage(e.toString());
      });
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
            {formik.touched.username && formik.errors.username && <Tooltip content={formik.errors.username} direction="top" />}
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
            {formik.touched.password && formik.errors.password && <Tooltip content={formik.errors.password} direction="top" />}
          </div>
          <Button variant="primary" type="submit" className="w-full mt-8">
            Sign In
          </Button>
        </form>
        {isServerError && <Toast content={serverErrorMessage} isShow={isServerError} />}
      </div>
    </div>
  );
};

export default Login;
