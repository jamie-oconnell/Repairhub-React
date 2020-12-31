import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/CreateCustomer";
import Error from "./pages/Error";

interface Props {}

const Routes = (props: Props) => {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Dashboard} exact />
      <Route path="/customers" component={Customers} exact />
      <Route path="/customers/create" component={CreateCustomer} exact />
      <Route path="/customers/view/:id" component={Customer} exact />
      <Route component={Error} />
    </Switch>
  );
};

export default Routes;
