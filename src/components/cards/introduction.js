import React,{useEffect,useState} from 'react';
import './introduction.css';

const Introduction = props => {


    return (
    <div id="introduction" className="my-4">
        <div className="offset-md-3 col-md-6 col-sm-12">
            <img src={props.introduction.Image} alt="broken image"/>
        </div>
        <div className="offset-md-3 col-md-6 col-sm-12">
            <h3 className="name">{props.introduction.Name}</h3>
            <h4 className="title text-muted">{props.introduction.Title}</h4>
        </div>
    </div>
    );
}

export default Introduction;