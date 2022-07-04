import React from 'react';
import './introduction.scss';


interface IIntroductionProps {
    imagePath: string,
    name: string,
    title: string
}

const Introduction = ({imagePath,name,title}: IIntroductionProps) => {


    return (
    <div id="introduction" className="my-4 introduction-container">
        <div className="col-12">
            <img src={imagePath} alt="Brandon Bankert"/>
        </div>
        <div className="col-12">
            <h1 className="name">{name}</h1>
            <h2 className="title text-muted">{title}</h2>
        </div>
    </div>
    );
}

export default Introduction;