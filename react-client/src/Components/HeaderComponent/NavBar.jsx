import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
      return (
        <header>
          <ul id="headerButtons">
            <li className="navButton"><Link to="">Home</Link></li>
            <li className="navButton"><Link to="/resume">Resume</Link></li>
            <li className="navButton"><Link to="/projects">Projects</Link></li>
            <li className="navButton"><Link to="/experience">Experience</Link></li>
          </ul>
        </header>
      )
    }
  }
  export default NavBar;