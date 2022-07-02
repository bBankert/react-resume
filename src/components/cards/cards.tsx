import React from 'react';
import Card from './card/card';

const Cards = (props : any) => {
    return(
        <div>
            {props.content.map((card: any,idx: string) =>
                <Card key={'card-'+idx} card={card}/>
            )}
        </div>
    );
}

export default Cards;