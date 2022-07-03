import React from 'react';
import CardContent from './card-subsection/card-subsection';
import { ICardContent } from '~/shared/models/card-content';
import { ICardSubsection } from '~/shared/models/card-subsection';

interface ICardProps {
    cardContents: ICardContent
}


const Card = ({cardContents}:ICardProps) => {


    return(

        <div id={(cardContents.header.replace(" ","-").toLocaleLowerCase())} className="my-4">
         <div className="card">
             <div className="card-header bg-dark text-white">
                <h3>{cardContents.header}</h3>
             </div>
             <div className="card-body">
                 {cardContents.subsections.map((section: ICardSubsection,idx : number) => 
                 <CardContent key={cardContents.header+'-subsection-'+idx} cardSubsection={section} />  
                 )}
             </div>
         </div>
     </div>
        
        
        );
}

export default Card;