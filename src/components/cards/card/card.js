import React,{useEffect} from 'react';
import CardContent from './card-content';

const Card = props => {

    useEffect(() => {
        // props.content.map((card) => {
        //     //console.log(card);
        //     card.Subsections.map((section) => {
        //         //console.log(section);
        //         section.Details.map((detail) => {
        //             console.log(detail);
        //         })
        //     });
        // });
            //

    }, [props.content]);

    //const card = props.content[0];

    return(

        <div id={(props.card.Header.replace(" ","-").toLocaleLowerCase())} className="my-4">
         <div className="card">
             <div className="card-header bg-info">
                 {props.card.Header}
             </div>
             <div className="card-body">
                 {props.card.Subsections.map((section) => 
                 <CardContent content = {section} />  
                 )}
             </div>
         </div>
     </div>
        
        
        );
}

export default Card;