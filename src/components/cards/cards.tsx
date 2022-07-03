import React from 'react';
import Card from './card/card';
import { ICardContent } from '~/shared/models/card-content';

interface CardsProps{
    cardsContents: ICardContent[]
}


const Cards = ({cardsContents} : CardsProps) => {
    return(
        <div>
            {cardsContents.map((card: ICardContent,idx: number) =>
                <Card key={'card-'+idx} cardContents={card}/>
            )}
        </div>
    );
}

export default Cards;