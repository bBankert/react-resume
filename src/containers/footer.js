import React from 'react';
import './footer.css';

const Footer = props => (
    <div id="footer" className="col-12">
        <a href="react-resume/documents/Resume.pdf" download>Download Resume</a>
        <a href="http://www.github.com/bBankert">GitHub</a>
        <a href="mailto:bankert.brandon@gmail.com">Contact Me</a>
    </div>
);

export default Footer;