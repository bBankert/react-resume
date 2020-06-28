import React from 'react';
import './navigation.css';

const Navigation = props => (
    //hide on phones (sm)
    <div id="navigation" className="col-12">
        <ul className="pl-0">
            <a href="#education"><li className="col">Education</li></a>
            <a href="#projects"><li className="col">Projects</li></a>
            <a href="#professional"><li className="col">Professional Experience</li></a>
        </ul>
    </div>

);

export default Navigation;