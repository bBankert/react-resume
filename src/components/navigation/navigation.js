import React from 'react';
import NavigationItem from './navigationItem';

const Navigation = props => (
    <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {props.data.map((link) => 
              <NavigationItem link={link}/>
          )}
          {/* Static links */}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href={window.location + "/documents/Resume.pdf"} download>Download Resume</a>
              <a class="dropdown-item" href="http://www.github.com/bBankert" target="_blank">GitHub</a>
              <a class="dropdown-item" href="mailto:bankert.brandon@gmail.com">Contact Me</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

);

export default Navigation;