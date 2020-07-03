import React from 'react';
import Card from './card/card';

const Cards = props => {
    return(
        <div>
            {props.content.map((card,idx) =>
                <Card key={'card-'+idx} card={card}/>
            )}
        </div>
    );
}

export default Cards;