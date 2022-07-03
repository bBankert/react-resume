import React from 'react';
import { ICardSubsection } from '~/shared/models/card-subsection';

interface ICardSubsectionProps {
    cardSubsection: ICardSubsection
}


const CardContent = ({cardSubsection}:ICardSubsectionProps) => {

    return(
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h4>{cardSubsection.subheading}</h4>
                <ul>
                    {cardSubsection.details.map((detail:string,idx : number) => 
                        <li key={cardSubsection.subheading + '-detail-'+idx}>{detail}</li>
                    )}
                    {cardSubsection.link ? <a href={cardSubsection.link}><li>Live Link</li></a> : ""}
                </ul>
            </li>    
        </ul>
    );


};

export default CardContent;