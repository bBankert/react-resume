import Introduction from '../components/cards/introduction';
import Cards from '../components/cards/cards';
import React from 'react';
import { ICardContent } from '~/shared/models/card-content';
import { IIntroduction } from '~/shared/models/introduction';

interface IContentProps{
    content: ICardContent[],
    introduction: IIntroduction
}


const Content = ({content,introduction} : IContentProps) => {


    return(
    <main className="offset-md-3 col-md-6 col-sm-12">
        <Introduction 
        imagePath={introduction.image}
        name={introduction.name}
        title={introduction.title}/>
        {content ?
            <Cards cardsContents={content}/> : 
            <p>Loading...</p>  
        }
    </main>
    );
}

export default Content;