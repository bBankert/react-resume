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
        </ul>
      </div>
    </nav>

);

export default Navigation;