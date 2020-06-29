import React,{useEffect} from  'react';
import Introduction from '../components/cards/introduction';
import Cards from '../components/cards/cards';

const Content = props => {

    // useEffect(() => {
    //     console.log(props.data && Object.keys(props.data.Content).length > 0 ? props.data : "not loaded");
        
    // }, [props.data.Content])


    return(

    <div className="offset-md-2 col-md-7 col-sm-12">
        <Introduction introduction={props.data.Introduction}/>
        {/* <Education/>
        <Projects/>
        <Work/> */}
        {props.data && Object.keys(props.data.Content).length > 0  ?<Cards content={props.data.Content}/> : <p>Loading...</p>  }
       
    </div>
    );
}

export default Content;