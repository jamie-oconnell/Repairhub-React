import { useEffect } from "react";
import { useAuthDispatch } from "../context/auth";
import useRouter from "../hooks/router";
interface Props {}

const ClearAuth = (props: Props) => {
  const dispatch = useAuthDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch("LOGOUT");
    router.history.push("/login");
  }, []);
  return <></>;
};

export default ClearAuth;
