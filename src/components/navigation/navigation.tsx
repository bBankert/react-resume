import React from 'react';
import NavigationItem from './navigation-item';
import {AiOutlineMail,AiFillGithub,AiOutlineDownload} from 'react-icons/ai';
import './navigation.css';

interface INavigationProps {
  navigationItems: string[]
}

const Navigation = ({navigationItems} : INavigationProps) => (
    <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="skip-link" href="#introduction">Skip to main content</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse mr-auto" id="navbarNav">
        <ul className="navbar-nav">
          {navigationItems.map((link: string,idx: number) => 
              <NavigationItem key={'link-'+idx} navigationLink={link}/>
          )}
        </ul>
      </div>
      <ul className="navbar-nav ml-auto" id="static-links">
            <a className="dropdown-item" aria-label="Download a copy of my resume" href={window.location + "documents/Resume.pdf" } download><AiOutlineDownload/></a>
            <a className="dropdown-item" aria-label="Go to my github page" href="http://www.github.com/bBankert"><AiFillGithub/></a>
            <a className="dropdown-item" aria-label="Email me" href="mailto:bankert.brandon@gmail.com"><AiOutlineMail/></a>
        </ul>
    </nav>

);

export default Navigation;