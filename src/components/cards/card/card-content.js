import React from 'react';

const CardContent = props => {

    return(
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h5>{props.content.Subheading}</h5>
                <ul>
                    {props.content.Details.map((detail) => 
                        <li>{detail}</li>
                    )}
                    {props.content.Link ? <a href={props.content.Link}><li>Live Link</li></a> : ""}
                </ul>
            </li>    
        </ul>
    );


};

export default CardContent;