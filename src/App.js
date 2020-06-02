import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import JobDetail from "./JobDetail/JobDetail";
import { isAuth } from "./Services/Auth";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <PrivateRoute path='/' exact component={Dashboard} />
          <PrivateRoute path='/jobs/:id' exact component={JobDetail} />
          {/* <Route /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
