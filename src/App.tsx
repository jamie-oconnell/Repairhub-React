import Drawer from "./components/layout/drawer";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import CreateCustomer from "./pages/CreateCustomer";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <main className="flex min-h-screen">
        <Drawer open={true}></Drawer>
        <div className="flex-1 bg-gray-5 pl-drawer">
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/customers" component={Customers} exact />
            <Route path="/customers/create" component={CreateCustomer} exact />
            <Route path="/customers/view/:id" component={Customer} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
