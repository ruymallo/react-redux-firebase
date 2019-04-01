import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history} >
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App as default, history };
