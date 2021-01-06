import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";

import Login from "./pages/Login";
import Error from "./pages/Error";

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
      <ProtectedRoute path="/" exact>
        <Dashboard />
      </ProtectedRoute>
      <Route path="/login" component={Login} exact>
        <Login />
      </Route>

      {/* Customers */}
      <ProtectedRoute path="/customers" exact>
        <Customers />
      </ProtectedRoute>
      <ProtectedRoute path="/customers/create" exact>
        <CreateCustomer />
      </ProtectedRoute>
      <ProtectedRoute path="/customers/view/:id" exact>
        <Customer />
      </ProtectedRoute>

      {/* Tickets */}
      <ProtectedRoute path="/tickets" exact>
        <Tickets />
      </ProtectedRoute>
      <ProtectedRoute path="/tickets/create" exact>
        <CreateTicket />
      </ProtectedRoute>
      <ProtectedRoute path="/tickets/view/:id" exact>
        <Ticket />
      </ProtectedRoute>

      {/* Devices */}
      <ProtectedRoute path="/devices" exact>
        <Devices />
      </ProtectedRoute>
      <ProtectedRoute path="/devices/create" exact>
        <CreateDevice />
      </ProtectedRoute>
      <ProtectedRoute path="/devices/view/:id" exact>
        <Device />
      </ProtectedRoute>

      <ProtectedRoute path="/settings" exact>
        <Settings />
      </ProtectedRoute>

      <ProtectedRoute>
        <Error />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
