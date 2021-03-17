import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './screens/Layout';
import Main from './screens/Main';
import About from './screens/About';
import Contact from './screens/Contact';
import Members from './screens/Members';
import pageNotFound from './screens/4o4';


const App = () => (
  <BrowserRouter>

    <Switch>
      <Layout>
        <Route path='/' component={Main} exact />
        <Route path='/about' component={About} exact />
        <Route path='/members' component={Members} exact />
        <Route path='/contact' component={Contact} exact />
      </Layout>
      <Route path="/*" component={pageNotFound} exact />
    </Switch>

  </BrowserRouter>
)




export default App;
