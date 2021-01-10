import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";

import Login from "./pages/Login";
import Error from "./pages/Error";
import ClearAuth from "./pages/ClearAuth";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Customers
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/CreateCustomer";

// Tickets
import Tickets from "./pages/Tickets";
import Ticket from "./pages/Ticket";
import CreateTicket from "./pages/CreateTicket";

// Devices
import Devices from "./pages/Devices";
import Device from "./pages/Device";
import CreateDevice from "./pages/CreateDevice";

import Settings from "./pages/Settings";

interface Props {}

const Routes = (props: Props) => {
  return (
    <Switch>
      <ProtectedRoute path="/" component={Dashboard} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/auth/clear" component={ClearAuth} exact />

      {/* Customers */}
      <ProtectedRoute path="/customers" component={Customers} exact />
      <ProtectedRoute
        path="/customers/create"
        component={CreateCustomer}
        exact
      />
      <ProtectedRoute path="/customers/view/:id" component={Customer} exact />

      {/* Tickets */}
      <ProtectedRoute path="/tickets" component={Tickets} exact />
      <ProtectedRoute path="/tickets/create" component={CreateTicket} exact />
      <ProtectedRoute path="/tickets/view/:id" component={Ticket} exact />

      {/* Devices */}
      <ProtectedRoute path="/devices" component={Devices} exact />
      <ProtectedRoute path="/devices/create" component={CreateDevice} exact />
      <ProtectedRoute path="/devices/view/:id" component={Device} exact />

      <ProtectedRoute path="/settings" component={Settings} exact />

      <ProtectedRoute component={Error} />
    </Switch>
  );
};

export default Routes;
