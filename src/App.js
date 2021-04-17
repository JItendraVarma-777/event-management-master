import './App.css';
import Registration from './components/Registration/Registration';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Layout/Home';
import Events from './components/Events/Events';
import EditEvent from './components/Events/EditEvent';
import { useEffect, useState } from 'react';
import Admin from './components/Layout/Admin';
import AboutUs from './components/Layout/AboutUs';
import ListOfUsers from './components/Layout/ListOfUsers';
function App() {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    const isadmin = localStorage.getItem('admin');
    setAdmin(isadmin);
  }, [admin]);

  return (
    <>
      <Router>
        <NavBar admin={admin} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AboutUs" exact component={AboutUs}></Route>
          <Route path="/admin" exact component={Admin} />
          <Route
            path="/events"
            exact
            component={() => <Events admin={admin} />}
          />

          <CustomRoute path="/events/edit" exact component={EditEvent} />
          <CustomRoute
            path="/events/edit/:eventId"
            exact
            component={EditEvent}
          />
          <CustomRoute path="/events/user" exact component={ListOfUsers} />

          <Route path="/register/:eventId" component={Registration} exact />
          <Route
            path="/event-not-found"
            render={() => <div>NO Event Found</div>}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;

const CustomRoute = (props) => {
  const admin = localStorage.getItem('admin');
  if (admin) {
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
};
