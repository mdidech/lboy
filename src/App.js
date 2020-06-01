import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import Products from "./pages/ProductsPage";
import Account from "./pages/ComptePage";
import Default from "./pages/DefaultPage";
import Admin from "./pages/AdminPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
function App(props) {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/moncompte' component={Account} />
        <Route path='/cart' component={Cart} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route path='/register' component={Register} />
        <Route exact path='/products/:category' component={Products} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
