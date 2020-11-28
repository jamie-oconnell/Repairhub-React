import Drawer from "./components/layout/drawer";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <main className="flex min-h-screen">
        <Drawer open={true}></Drawer>
        <div className="flex-1 bg-gray-5 pl-drawer">
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/customers" component={Customers} />
            <Route component={Error} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
