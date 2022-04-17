import React from 'react';
import './introduction.css';

const Introduction = props => {


    return (
    <div id="introduction" className="my-4">
        <div className="col-12">
            <img src={props.introduction.Image} alt="Brandon Bankert"/>
        </div>
        <div className="col-12">
            <h1 className="name">{props.introduction.Name}</h1>
            <h2 className="title text-muted">{props.introduction.Title}</h2>
        </div>
    </div>
    );
}

export default Introduction;