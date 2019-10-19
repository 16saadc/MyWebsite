import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './Pages/HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer'
import ResumeScreen from './Pages/ResumeScreen';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="resume" exact path="/resume" component={ResumeScreen} />
          <Route name="projects" exact path="/projects" component={Projects} />
          <Route name="experience" exact path="/experience" component={Experience} />
        </div>
      </Router>
    )
  }
}


export default App;