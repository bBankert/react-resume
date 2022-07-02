import React from 'react';
const CardContent = (props : any) => {

    return(
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h4>{props.content.Subheading}</h4>
                <ul>
                    {props.content.Details.map((detail:any,idx : string) => 
                        <li key={props.content.Subheading + '-detail-'+idx}>{detail}</li>
                    )}
                    {props.content.Link ? <a href={props.content.Link}><li>Live Link</li></a> : ""}
                </ul>
            </li>    
        </ul>
    );


};

export default CardContent;