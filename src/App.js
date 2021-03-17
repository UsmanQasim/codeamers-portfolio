import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SomeFrickinHandler from "./screens/SomeFrickinHandler";

import Header from "./components/Header";

import Main from "./screens/Main";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Members from "./screens/Members";

import pageNotFound from "./screens/pageNotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <SomeFrickinHandler path="/" component={Main} exact={true} />
      <SomeFrickinHandler path="/about" component={About} exact={true} />
      <SomeFrickinHandler path="/members" component={Members} exact={true} />
      <SomeFrickinHandler path="/contact" component={Contact} exact={true} />
      <Route component={pageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
