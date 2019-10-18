import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="header" exact path="/HeaderComponent" component={NavBar} />
          <Route name="footer" exact path="/FooterComponent" component={Footer} />
        </div>
      </Router>
    )
  }
}


export default App;