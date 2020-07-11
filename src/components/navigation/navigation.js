import React from 'react';
import NavigationItem from './navigationItem';
import {AiOutlineMail,AiFillGithub,AiOutlineDownload} from 'react-icons/ai';
import './navigation.css';

const Navigation = props => (
    <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto" id="static-links">
            <a className="dropdown-item" href={window.location + "documents/Resume.pdf" } download><AiOutlineDownload/></a>
            <a className="dropdown-item" href="http://www.github.com/bBankert"><AiFillGithub/></a>
            <a className="dropdown-item" href="mailto:bankert.brandon@gmail.com"><AiOutlineMail/></a>
        </ul>
      <div className="collapse navbar-collapse mr-auto" id="navbarNav">
        <ul className="navbar-nav">
          {props.data.map((link,idx) => 
              <NavigationItem key={'link-'+idx} link={link}/>
          )}
          {/* Static links */}
        </ul>
      </div>
      <ul className="navbar-nav ml-auto" id="static-links-desktop">
            <a className="dropdown-item" href={window.location + "documents/Resume.pdf" } download><AiOutlineDownload/></a>
            <a className="dropdown-item" href="http://www.github.com/bBankert"><AiFillGithub/></a>
            <a className="dropdown-item" href="mailto:bankert.brandon@gmail.com"><AiOutlineMail/></a>
        </ul>
    </nav>

);

export default Navigation;