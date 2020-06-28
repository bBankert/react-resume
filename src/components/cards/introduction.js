import React from 'react';
import './introduction.css';
const Introduction = props => (
    <div id="introduction" className="my-4">
        <div className="offset-md-3 col-md-6 col-sm-12">
            <img src="./images/face.png" alt="broken image"/>
        </div>
        <div className="offset-md-3 col-md-6 col-sm-12">
            <h3 className="name">Brandon Bankert</h3>
            <h4 className="title text-muted">Full Stack Web Developer</h4>
        </div>
    </div>
);

export default Introduction;