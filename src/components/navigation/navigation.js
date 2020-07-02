import React from 'react';
import NavigationItem from './navigationItem';

const Navigation = props => (
    <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {props.data.map((link,idx) => 
              <NavigationItem key={'link-'+idx} link={link}/>
          )}
          {/* Static links */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href={window.location + "documents/Resume.pdf" } download>Download Resume</a>
              <a className="dropdown-item" href="http://www.github.com/bBankert">GitHub</a>
              <a className="dropdown-item" href="mailto:bankert.brandon@gmail.com">Contact Me</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

);

export default Navigation;