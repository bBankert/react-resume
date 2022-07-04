import React from 'react';
import NavigationItem from './navigation-item';
import {AiOutlineMail,AiFillGithub,AiOutlineDownload} from 'react-icons/ai';
import './navigation.css';
import { Container, Navbar,Nav } from 'react-bootstrap';

interface INavigationProps {
  navigationItems: string[]
}

const Navigation = ({navigationItems} : INavigationProps) => (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid="xl"> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navigationItems.map((link: string,idx: number) => 
                <NavigationItem key={'link-'+idx} navigationLink={link}/>
            )}
          </Nav>
          </Navbar.Collapse>
          <div className="icon-container">
            <Nav.Link aria-label="Download a copy of my resume" href={window.location + "documents/Resume.pdf" } download><AiOutlineDownload/></Nav.Link>
            <Nav.Link aria-label="Go to my github page" href="http://www.github.com/bBankert"><AiFillGithub/></Nav.Link>
            <Nav.Link aria-label="Email me" href="mailto:bankert.brandon@gmail.com"><AiOutlineMail/></Nav.Link>
          </div>
          
      </Container>
    </Navbar>
);

export default Navigation;