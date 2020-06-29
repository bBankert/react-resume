import React from 'react';
import Card from './card/card';

const Cards = props => {
    return(
        <div>
            {props.content.map((card) =>
                <Card card={card}/>
            )};
        </div>
    );
}

export default Cards;