import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./pages/Admin";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/admin' component={Admin} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
