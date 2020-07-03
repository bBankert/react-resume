import React from 'react';
import CardContent from './card-content';

const Card = props => {


    return(

        <div id={(props.card.Header.replace(" ","-").toLocaleLowerCase())} className="my-4">
         <div className="card">
             <div className="card-header bg-info">
                <h3>{props.card.Header}</h3>
             </div>
             <div className="card-body">
                 {props.card.Subsections.map((section,idx) => 
                 <CardContent key={props.card.Header+'-subsection-'+idx} content = {section} />  
                 )}
             </div>
         </div>
     </div>
        
        
        );
}

export default Card;