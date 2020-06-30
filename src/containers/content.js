import React from  'react';
import Introduction from '../components/cards/introduction';
import Cards from '../components/cards/cards';

const Content = props => {


    return(

    <div className="offset-md-3 col-md-6 col-sm-12">
        <Introduction introduction={props.data.Introduction}/>
        {props.data && Object.keys(props.data.Content).length > 0  ?<Cards content={props.data.Content}/> : <p>Loading...</p>  }
       
    </div>
    );
}

export default Content;